<template>
  <div>
    <div class="login">
      <Form :model="formData" :rules="validateRules" ref="form" class="login-form">
        <h1 class="login-title">用户登录</h1>
        <FormItem prop="username" class="item">
          <Input prefix="ios-person-outline" v-model="formData.username" class="login-input" placeholder="请输入用户名/邮箱" />
        </FormItem>
        <FormItem prop="password" class="item">
          <Input prefix="ios-lock-outline" v-model="formData.password" class="login-input" type="password" password placeholder="请输入密码" />
        </FormItem>
        <FormItem class="login-extral">
          <Checkbox v-model="formData.remembered" class="login-remember">记住登录</Checkbox>
          <router-link to="/password" class="login-password">忘记密码?</router-link>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleUserLogin" class="login-submit">立即登录</Button>
        </FormItem>
        <div class="register">
          还没有账号？<router-link to="/register">去注册</router-link>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import {API_login} from '@/api/User'
export default {
  data () {
    return {
      formData: {
        username: '',
        password: '',
        remembered: false
      },
      validateRules: {
        username: [{required: true, message: '用户名/邮箱不能为空', trigger: 'blur'}],
        password: [{required: true, message: '密码不能为空', trigger: 'blur'}]
      },
      isLoading: false
    }
  },
  methods: {
    handleUserLogin() {
      this.$refs['form'].validate(valid=> {
        if(!valid) {
          this.$Message.error('表单内容输入有误，请重新检查')
        } else {
          this.isLoading = true
          API_login(this.formData).then(data=> {
            this.isLoading = false
            if(data.token) {
              localStorage.setItem('token',data.token)
              localStorage.setItem('displayname',data.user_display_name)
              localStorage.setItem('nickname',data.user_nicename)
              this.$Message.success({
                background: true,
                duration: 3,
                content: '登录成功！3s后自动跳转到首页',
                onClose: ()=> {
                  this.$router.push({path: '/'})
                }
              })
            }
            console.log(`Welcome ${data.user_display_name} come back`)
          }).catch(err=> {
            this.isLoading = !this.isLoading
            let message = err.response ? err.response.data.message : '网络错误，请检查网络或稍后重新再试！'
            this.$Message.error(message)
          })
        }
      })
    }
  }
}
</script>
<style scoped>
  body,html {
    width: 100%;
    height: 100%;
  }
  .login {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: #93defe;
  }
  .login-left {
    width: 500px;
    height: 360px;
  }
  .login-form {
    width: 400px;
    height: 360px;
    background: #fff;
    border-radius: 5px;
    text-align: center;
  }
  .login-title {
    color: #409eff;
    font-size: 28px;
    margin: 20px auto;
  }
  .login-input {
    width: 250px;
  }
  .login-submit {
    width: 250px;
  }
  .login-extral {
    width: 250px;
    display: inline-block;
    text-align: left;
    margin-bottom: 0;
    font-size: 12px;
  }
  .login-password {
    float: right;
  }
  .login-remember,.login-password {
    font-size: 12px;
  }
  .register {
    font-size: 12px;
  }
  .item {
    display: inline-flex;
  }
</style>

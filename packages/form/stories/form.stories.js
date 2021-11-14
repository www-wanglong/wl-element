import WlForm from '../'
import WlFormItem from '../../formitem'
import WlInput from '../../input'
import WlButton from '../../button'

export default {
  title: 'WlForm',
  component: WlForm
}


export const Login = () => ({
  components: { WlForm, WlFormItem, WlInput, WlButton },
  template: `
    <wl-form class="form" ref="form" :model="user" :rules="rules">
      <wl-form-item label="用户名" prop="username">
        <!-- <wl-input v-model="user.username"></wl-input> -->
        <wl-input :value="user.username" @input="user.username=$event" placeholder="请输入用户名"></wl-input>
      </wl-form-item>
      <wl-form-item label="密码" prop="password">
        <wl-input type="password" v-model="user.password"></wl-input>
      </wl-form-item>
      <wl-form-item>
        <wl-button type="primary" @click="login">登 录</wl-button>
      </wl-form-item>
    </wl-form>
  `,
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          },
          {
            min: 6,
            max: 12,
            message: '请输入6-12位密码'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      console.log('button')
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('验证成功')
        } else {
          alert('验证失败')
          return false
        }
      })
    }
  }
})

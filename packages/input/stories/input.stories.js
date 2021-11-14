import WlInput from '../'

export default {
  title: 'WlInput',
  component: WlInput
}

export const Text = () => ({
  components: { WlInput },
  template: '<wl-input v-model="value"></wl-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})

export const Password = () => ({
  components: { WlInput },
  template: '<wl-input type="password" v-model="value"></wl-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})

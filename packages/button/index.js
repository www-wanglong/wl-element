import WlButton from './src/button.vue'

WlButton.install = Vue => {
  Vue.component(WlButton.name, WlButton)
}

export default WlButton

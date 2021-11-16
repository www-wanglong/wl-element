import WlLink from './src/link.vue'

WlLink.install = Vue => {
  Vue.component(WlLink.name, WlLink)
}

export default WlLink

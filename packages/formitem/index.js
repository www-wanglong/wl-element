import WlFormItem from './src/formitem.vue'

WlFormItem.install = Vue => {
  Vue.component(WlFormItem.name, WlFormItem)
}

export default WlFormItem

import WlForm from './src/form.vue'

WlForm.install = Vue => {
  Vue.component(WlForm.name, WlForm)
}
console.log('test')
export default WlForm

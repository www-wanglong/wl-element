import WlLink from '../src/link.vue'

export default {
  title: 'WlLink',
  component: WlLink
}

export const Link = _ => ({
  components: { WlLink },
  template: `
    <div>
      <wl-link disabled="true" href="http://www.baidu.com">百度</wl-link>
    </div>
  `
})
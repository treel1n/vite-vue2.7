import { Button } from 'ant-design-vue'
import Vue from 'vue'

export default () => {
  const uis = [Button]
  uis.forEach(item => Vue.use(item))
}

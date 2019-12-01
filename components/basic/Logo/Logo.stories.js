import { action } from '@storybook/addon-actions'
import Logo from './Logo.vue'

export default {
  title: 'basic|Logo'
}

export const LogoDefault = () => ({
  components: { Logo },
  template: `<Logo @click="action"></Logo>`,
  methods: { action: action('clicked') }
})

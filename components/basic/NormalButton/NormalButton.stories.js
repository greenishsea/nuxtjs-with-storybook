import { action } from '@storybook/addon-actions'
import NormalButton from './NormalButton.vue'
import MarkdownText from './NormalButton.md' // Using storiesOf leads to scss issue. Needs to look for adding notes syntax without storiesOf

export default {
  title: 'basic|NormalButton',
  notes: { markdown: MarkdownText }
}

// Syntax A
export const NormalButtonDefault = () => ({
  components: { NormalButton },
  template: `<NormalButton @click="action">Hello Button</NormalButton>`,
  methods: { action: action('clicked') }
})

// // Syntax B
// export const NormalButtonDefault = () => ({
//   components: { NormalButton },
//   render(h) {
//     return <NormalButton onClick={this.action}>Default</NormalButton>
//   },
//   methods: { action: action('clicked') }
// })

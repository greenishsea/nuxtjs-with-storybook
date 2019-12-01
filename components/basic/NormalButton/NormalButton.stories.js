import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import NormalButton from './NormalButton.vue'
import MarkdownText from './NormalButton.md'

storiesOf('basic|NormalButton', module).add(
  'Default',
  () => ({
    components: { NormalButton },
    template: `<NormalButton @click="action">Default</NormalButton>`,
    methods: { action: action('clicked') }
  }),
  {
    notes: { markdown: MarkdownText }
  }
)

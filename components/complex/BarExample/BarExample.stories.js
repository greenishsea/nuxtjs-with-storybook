import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import BarExample from './BarExample.vue'
import MarkdownText from './BarExample.md'

storiesOf('complex|BarExample', module).add(
  'Default',
  () => ({
    components: { BarExample },
    template: `<BarExample @click="action">Default</BarExample>`,
    methods: { action: action('clicked') }
  }),
  {
    notes: { markdown: MarkdownText }
  }
)

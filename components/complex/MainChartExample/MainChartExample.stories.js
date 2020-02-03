import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import MainChartExample from './MainChartExample.vue'
import MarkdownText from './MainChartExample.md'

storiesOf('complex|MainChartExample', module).add(
  'Default',
  () => ({
    components: { MainChartExample },
    template: `<MainChartExample @click="action">Default</MainChartExample>`,
    methods: { action: action('clicked') }
  }),
  {
    notes: { markdown: MarkdownText }
  }
)

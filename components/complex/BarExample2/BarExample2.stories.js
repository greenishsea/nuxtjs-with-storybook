import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import temperatures1 from '../../../assets/json/temperatures1.json'
import BarExample2 from './BarExample2.vue'
import MarkdownText from './BarExample2.md'

const chartData = temperatures1.content

storiesOf('complex|BarExample2', module).add(
  'Default',
  () => ({
    components: { BarExample2 },
    template: `<BarExample2 width="800" @click="action" :chart-data="chartData">Default</BarExample2>`,
    methods: { action: action('clicked') },
    data: () => ({ chartData })
  }),
  {
    notes: { markdown: MarkdownText }
  }
)

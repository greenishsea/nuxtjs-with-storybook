import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import MyMap from './MyMap.vue'
import MarkdownText from './MyMap.md'

storiesOf('complex|MyMap', module).add(
  'Default',
  () => ({
    components: { MyMap },
    template: `<MyMap @click="action">Default</MyMap>`,
    methods: { action: action('clicked') }
  }),
  {
    notes: { markdown: MarkdownText }
  }
)

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import MapboxExample from './MapboxExample.vue'
import MarkdownText from './MapboxExample.md'

storiesOf('complex|MapboxExample', module).add(
  'Default',
  () => ({
    components: { MapboxExample },
    template: `<MapboxExample @click="action">Default</MapboxExample>`,
    methods: { action: action('clicked') }
  }),
  {
    notes: { markdown: MarkdownText }
  }
)

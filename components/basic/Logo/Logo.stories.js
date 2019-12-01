import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import Logo from './Logo.vue'
import MarkdownText from './Logo.md'

storiesOf('basic|Logo', module).add(
  'Default',
  () => ({
    components: { Logo },
    template: `<Logo @click="action"></Logo>`,
    methods: { action: action('clicked') }
  }),
  {
    notes: { markdown: MarkdownText }
  }
)

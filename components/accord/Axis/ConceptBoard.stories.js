import { storiesOf } from '@storybook/vue'
import { linkTo } from '@storybook/addon-links'
import MarkdownText from './ConceptBoard.md'
import ConceptBoard from './ConceptBoard.js'

storiesOf('accord|ConceptBoard', module).add(
  'ReadMe',
  () => ({
    components: { ConceptBoard },
    template: `<ConceptBoard :showApp="action" />`,
    methods: { action: linkTo('Button') }
  }),
  {
    notes: { markdown: MarkdownText }
  }
)

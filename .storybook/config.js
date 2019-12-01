import { configure, addParameters, addDecorator } from '@storybook/vue'
import Centered from '@storybook/addon-centered/vue'

addParameters({ options: {
  name: 'Storybook for Nuxt Project',
  hierarchyRootSeparator: /\|/,
  // url: '',
  // selectedAddonPanel: 'storybook/stories/stories-panel' // obsolete property ?
  // selectedPanel: 'storybook/actions/panel' // new one
}})

addDecorator(Centered)
// addDecorator(() => ({
//   template: '<div style="textAlign: center"><story/></div>',
// }));

configure(require.context('../components', true, /\.stories\.(js|mdx)$/), module)

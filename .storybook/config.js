import { configure, addDecorator } from '@storybook/vue';
import { withOptions } from '@storybook/addon-options';
import Centered from '@storybook/addon-centered/vue';

addDecorator(
  withOptions({
      name: 'Storybook for Nuxt Project',
      hierarchyRootSeparator: /\|/,
      // url: '',
      // selectedAddonPanel: 'storybook/stories/stories-panel' // obsolete property ?
      // selectedPanel: 'storybook/actions/panel' // new one
  })
)
addDecorator(Centered)
// addDecorator(() => ({
//   template: '<div style="textAlign: center"><story/></div>',
// }));

configure(require.context('../components', true, /\.stories\.(js|mdx)$/), module);

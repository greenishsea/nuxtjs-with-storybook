import { configure } from '@storybook/vue';
import './storybook-total.scss';

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
// configure(require.context('../components', true, /\.stories\.(js|mdx)$/), module);

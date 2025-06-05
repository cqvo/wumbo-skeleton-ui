import type { Preview } from '@storybook/sveltekit';

import '../src/app.css';

const preview: Preview = {
	tags: ['autodocs'],
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	},
	decorators: [
		(Story) => {
			if (typeof document !== 'undefined') {
				document.documentElement.setAttribute('data-theme', 'cerberus');
			}
			return Story();
		}
	]
};

export default preview;

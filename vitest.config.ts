import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],

	test: {
		workspace: [
			{
				extends: './vitest.config.ts',
				test: {
					name: 'browser',
					browser: {
						enabled: true,
						provider: 'playwright',
						instances: [{ browser: 'chromium' }]
					},
					include: ['src/**/*.browser.test.{ts,js}']
				}
			},
			{
				extends: './vitest.config.ts',
				test: {
					name: 'unit',
					environment: 'node',
					include: ['src/**/*.test.{ts,js}'],
					exclude: ['src/**/*.browser.test.{ts,js}']
				}
			}
		]
	}
});

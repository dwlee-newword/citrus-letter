import { register, init, getLocaleFromNavigator } from 'svelte-i18n';
import en from './locales/en.json';
import ko from './locales/ko.json';

// Register translations synchronously
register('en', () => Promise.resolve(en));
register('ko', () => Promise.resolve(ko));

// Initialize
init({
	fallbackLocale: 'ko',
	initialLocale: 'ko'
});

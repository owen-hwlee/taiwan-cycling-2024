<script lang="ts">
	import { browser } from '$app/environment';
	import Footer from '$lib/components/Footer';
	import Header from '$lib/components/Header';
	import '../app.css';
	import { i18n } from '../lib/services/i18n';
	import { getLocaleFromNavigator } from 'svelte-i18n';

	i18n.init();

	if (browser) {
		let initialLocale = window.localStorage.getItem("locale");
		if (initialLocale === null) {
			initialLocale = i18n.convertToSupportedLocale(getLocaleFromNavigator() ?? 'en');
			if (!Object.keys(i18n.supportedLocales).includes(initialLocale)) {
				if (initialLocale.includes('zh')) {
					alert(`不好意思，本網頁僅支援繁體中文。`);
					initialLocale = 'zh-Hant-TW';
				} else {
					alert(
						`Sorry, your browser locale is detected as "${getLocaleFromNavigator()}", which is unfortunately an unsupported language. Falling back to English.`
					);
					initialLocale = 'en';
				}
			}
		}
		i18n.setCurrentLocale(initialLocale);
	}

	// i18n.locale.subscribe((value) => {
	// 	if (browser) {
	// 		window.localStorage.setItem("locale", value!);
	// 	}
	// });
</script>

<svelte:head>
	<meta name="description" content="Owen's Extended Cycling Around Taiwan 2024" />
</svelte:head>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

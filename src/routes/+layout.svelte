<script lang="ts">
	import { page } from "$app/stores";
	import { base } from "$app/paths";
	import { browser } from "$app/environment";
	import Footer from "$lib/components/Footer";
	import Header from "$lib/components/Header";
	import "../app.css";
	import { i18n } from "../lib/services/i18n";
	import { t } from "svelte-i18n";

	i18n.init();

	if (browser) {
		let initialLocale = window.localStorage.getItem("locale");
		if (initialLocale === null) {
			initialLocale = i18n.convertToSupportedLocale(navigator.language ?? "zh-Hant-TW");
			if (!Object.keys(i18n.supportedLocales).includes(initialLocale)) {
				if (initialLocale.includes("zh")) {
					alert(`不好意思，本網頁僅支援繁體中文。`);
					initialLocale = "zh-Hant-TW";
				} else {
					alert(
						`Sorry, your browser locale is detected as "${navigator.langugage}", which is unfortunately an unsupported language. Falling back to English.`
					);
					initialLocale = "en";
				}
			}
		}
		i18n.setCurrentLocale(initialLocale);
		window.localStorage.setItem("locale", initialLocale);
	}

	// i18n.locale.subscribe((value) => {
	// 	if (browser) {
	// 		window.localStorage.setItem("locale", value!);
	// 	}
	// });

	$: pageName =
		$page.url.pathname
			.replace(base + "/", "")			// remove domain
			.replace("index.html", "")			// remove index.html (if exists)
			.slice(0, -1)						// remove trailing "/"
			.replace("/", ".")					// cater to cases like ~/trip/day01/
		|| "home";								// empty means home page 

	$: title = `${$t(`pages.${pageName}.title`)} - ${$t("appname")}`;
</script>

<svelte:head>
	<title>{title}</title>
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

import { init, addMessages, locale } from "svelte-i18n";
import en from "../../../locales/en.json";
import zh_Hant_HK from "../../../locales/zh-Hant-HK.json";
import zh_Hant_TW from "../../../locales/zh-Hant-TW.json";
import { get } from "svelte/store";

export const i18n = {
	locale: locale,
	setCurrentLocale: (lang: string) => locale.set(i18n.convertToSupportedLocale(lang)),

	init: () => {
		// register('en', () => import('../../../locales/en.json'));
		// register('zh-Hant-HK', () => import('../../../locales/zh-Hant-HK.json'));
		// register('zh-Hant-TW', () => import('../../../locales/zh-Hant-TW.json'));

		addMessages("en", en);
		addMessages("zh-Hant-HK", zh_Hant_HK);
		addMessages("zh-Hant-TW", zh_Hant_TW);

		init({
			fallbackLocale: "en",
			initialLocale: "zh-Hant-TW",
		});
	},

	supportedLocales: {
		en: "English",
		"zh-Hant-HK": "繁體中文（香港）",
		"zh-Hant-TW": "正體中文（臺灣）",
	},

	convertToSupportedLocale: (lang: string): string => {
		switch (lang) {
			case "zh-TW":
			case "zh-Hant":
				lang = "zh-Hant-TW";
				break;
			case "zh-HK":
			case "zh-MO":
			case "zh-Hant-MO":
				lang = "zh-Hant-HK";
		}
		if (lang.startsWith("en")) lang = "en";
		return lang;
	},

	isLocaleSupported: () => {
		const lang = get(locale);
		if (lang === null || lang === undefined) return false;
		return Object.keys(i18n.supportedLocales).includes(lang);
	},
};

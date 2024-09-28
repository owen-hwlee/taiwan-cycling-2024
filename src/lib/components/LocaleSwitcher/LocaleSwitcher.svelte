<script lang="ts">
	import { browser } from '$app/environment';
	import { get } from 'svelte/store';
	import { i18n } from '$lib/services/i18n';

	$: selectedLocale = get(i18n.locale);

	if (browser) {
		selectedLocale = window.localStorage.getItem("locale");
	}

	const changeLocales = (event): void => {
		i18n.setCurrentLocale(event.target.value);
		window.localStorage.setItem("locale", event.target.value);
	};
</script>

<div class="locale-switcher">
	<select class="locale-switcher-select" bind:value={selectedLocale} on:change={changeLocales}>
		{#each Object.entries(i18n.supportedLocales) as [lang, text]}
			<option class="locale-switcher-option" value={lang}>{text}</option>
		{/each}
	</select>
</div>

<style>
	.locale-switcher {
	}

	.locale-switcher-select {
	}

	.locale-switcher-option {
	}
</style>

<script lang="ts">
	import { browser } from "$app/environment";
	import { get } from "svelte/store";
	import { i18n } from "$lib/services/i18n";

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

	.locale-switcher select:after {
		content: "▼"; /* Custom arrow icon */
		position: absolute;
		top: 50%;
		right: 10px;
		transform: translateY(-50%);
		pointer-events: none; /* Arrow should not interfere with clicks */
		/* color: #777; */
		font-size: 14px;
	}

	.locale-switcher-select {
		padding: 10px 40px 10px 12px; /* Adds padding with space for custom arrow */
		border: 1px solid #ddd; /* Subtle border */
		border-radius: 6px; /* Rounded corners */
		background-color: #f8f9fa; /* Light background */
		color: #333; /* Text color */
		transition: all 0.3s ease; /* Smooth transition on focus */
		cursor: pointer;
	}

	.locale-switcher-option {
	}
</style>

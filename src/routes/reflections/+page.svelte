<script lang="ts">
	import CurrencyConverter from '$lib/components/CurrencyConverter';
    import { t } from 'svelte-i18n';
</script>

<svelte:head>
	<title>Reflections</title>
</svelte:head>

<h1>Reflections</h1>
<div>{$t('hi')}</div>
<div><CurrencyConverter valueInNTD={200} /></div>

<style>
</style>

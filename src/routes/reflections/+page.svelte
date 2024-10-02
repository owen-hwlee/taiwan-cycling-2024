<script lang="ts">
	import CurrencyConverter from "$lib/components/CurrencyConverter";
	import { t } from "svelte-i18n";
</script>

<h1>Reflections</h1>
<div>{$t("pages.reflections.content")}</div>
<div><CurrencyConverter valueInNTD={200} /></div>

<style>
</style>

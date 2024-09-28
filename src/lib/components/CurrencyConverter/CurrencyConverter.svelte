<script lang="ts">
	import { i18n } from '$lib/services/i18n';

	export let valueInNTD: number;

	let displayCurrencyString: string = `$ ${valueInNTD} NTD`;
    
	const locale: string = i18n.currentLocale;
    
    if (locale !== "zh-Hant-TW") {
        displayCurrencyString += ' (';
        // TODO: add currency conversion API, handle money symbol and converted currency value
        
        displayCurrencyString += ')';
    }
</script>

<span>{displayCurrencyString}</span>

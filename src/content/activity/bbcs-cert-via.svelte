<script context="module" lang="ts">
	import Activity from '$lib/components/activity.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	export const metadata = {
		title: 'VIA Letter',
		date: '2025',
		logo: {
			src: '/activity/bbcs/logo.png',
			alt: 'BuildingBloCS Logo'
		},
		type: 'certificate',
		org: 'BuildingBloCS'
	};
</script>

<Activity title={metadata.org + ' ' + metadata.title} date={metadata.date}>
	<img
		src="/activity/bbcs/via.jpg"
		alt="VIA Letter"
		class="mx-auto w-[75%] rounded-md ring ring-slate-300"
	/>
	<a href="/activity/bbcs/via.pdf" target="_blank" rel="noopener noreferrer">
		<Button>Download VIA Letter</Button>
	</a>
</Activity>

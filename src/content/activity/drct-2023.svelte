<script context="module" lang="ts">
	import Activity from '$lib/components/activity.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	export const metadata = {
		title: 'Bronze Award',
		date: '2023',
		logo: {
			src: '/activity/drct/logo.png',
			alt: 'DrCT Logo'
		},
		type: 'certificate',
		org: 'DrCT'
	};
</script>

<Activity title={metadata.org + ' ' + metadata.title} date={metadata.date}>
	<img
		src="/activity/drct/2023.png"
		alt="DrCT Bronze Award"
		class="mx-auto w-[75%] rounded-md ring ring-slate-300"
	/>
</Activity>

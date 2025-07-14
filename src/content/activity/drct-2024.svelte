<script context="module" lang="ts">
	import Activity from '$lib/components/activity.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	export const metadata = {
		title: 'Honorable Mention',
		date: '2024',
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
		src="/activity/drct/2024.png"
		alt="DrCT Honorable Mention Award"
		class="mx-auto w-[75%] rounded-md ring ring-slate-300"
	/>
</Activity>

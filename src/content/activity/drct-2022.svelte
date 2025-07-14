<script context="module" lang="ts">
	import Activity from '$lib/components/activity.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	export const metadata = {
		title: 'Gold Award',
		date: '2022',
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
		src="/activity/drct/2022.jpg"
		alt="DrCT Gold Award"
		class="mx-auto w-[75%] rounded-md ring ring-slate-300"
	/>
	<a href="/activity/drct/2022.pdf" target="_blank" rel="noopener noreferrer">
		<Button>Download Certificate</Button>
	</a>
</Activity>

<script context="module" lang="ts">
	import Activity from '$lib/components/activity.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	export const metadata = {
		title: 'Best Presentation Award',
		date: '2022',
		logo: {
			src: '/activity/microbit/logo.webp',
			alt: 'Microbit Logo'
		},
		type: 'certificate',
		org: 'MGS-NYP'
	};
</script>

<Activity title={metadata.org + ' ' + metadata.title} date={metadata.date}>
	<img
		src="/activity/microbit/award.jpg"
		alt="Best presentation award"
		class="mx-auto w-[75%] rounded-md ring ring-slate-300"
	/>
	<a href="/activity/microbit/award.pdf" target="_blank" rel="noopener noreferrer">
		<Button>Download Certificate</Button>
	</a>
</Activity>

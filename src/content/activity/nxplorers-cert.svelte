<script context="module" lang="ts">
	import Activity from '$lib/components/activity.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	export const metadata = {
		title: 'Participation Certificate',
		date: '2023',
		logo: {
			src: '/activity/nxplorers/logo.png',
			alt: 'Shell Logo'
		},
		type: 'certificate',
		org: 'Shell / NXplorers'
	};
</script>

<Activity title={metadata.org + ' ' + metadata.title} date={metadata.date}>
	<img
		src="/activity/nxplorers/cert.jpg"
		alt="NXplorers Participation Certificate"
		class="mx-auto w-[75%] rounded-md ring ring-slate-300"
	/>
	<a href="/activity/nxplorers/cert.pdf" target="_blank" rel="noopener noreferrer">
		<Button>Download Certificate</Button>
	</a>
</Activity>

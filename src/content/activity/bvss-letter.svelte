<script context="module" lang="ts">
	import Activity from '$lib/components/activity.svelte';
    import { Button } from '$lib/components/ui/button/index.js';
	export const metadata = {
		title: 'Letter of Recommendation',
		date: '2025',
		logo: {
			src: '/activity/cca/logo.png',
			alt: 'Bukit View Secondary School Logo'
		},
		type: 'certificate',
		org: 'Bukit View Secondary School'
	};
</script>

<Activity title={metadata.org + ' ' + metadata.title} date={metadata.date}>
	<img
		src="/activity/bvss/reco.jpg"
		alt="Letter of Recommendation"
		class="mx-auto w-[75%] rounded-md ring ring-slate-300"
	/>
	<a href="/activity/bvss/reco.pdf" target="_blank" rel="noopener noreferrer">
		<Button>Download Letter</Button>
	</a>
</Activity>

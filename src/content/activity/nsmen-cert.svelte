<script context="module" lang="ts">
	import Activity from '$lib/components/activity.svelte';
	export const metadata = {
		title: 'Appreciating NSMen Video Competition',
		date: '2023',
		logo: {
			src: '/activity/nsmen/logo.png',
			alt: 'Safra Logo'
		},
		type: 'certificate',
		org: 'SAFRA'
	};
</script>

<Activity title={metadata.org + ' ' + metadata.title} date={metadata.date}>
	<img
		src="/activity/nsmen/award.png"
		alt="Certificate of Participation"
		class="mx-auto w-[75%] rounded-md ring ring-slate-300"
	/>
</Activity>

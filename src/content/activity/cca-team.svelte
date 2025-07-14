<script context="module" lang="ts">
	import Activity from '$lib/components/activity.svelte';
	export const metadata = {
		title: 'CCA Team Excellence Award',
		date: '2023',
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
		src="/activity/bvss/2023-cca-team.png"
		alt={metadata.title}
		class="mx-auto w-[75%] rounded-md ring ring-slate-300"
	/>
	<img
		src="/activity/bvss/2024-cca-team.jpg"
		alt={metadata.title}
		class="mx-auto w-[75%] rounded-md ring ring-slate-300"
	/>
</Activity>

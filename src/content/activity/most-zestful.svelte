<script context="module" lang="ts">
	import Activity from '$lib/components/activity.svelte';
	export const metadata = {
		title: 'Most Zestful Award',
		date: '2022',
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
		src="/activity/bvss/2022-zestful.jpg"
		alt="Most Zestful Award"
		class="mx-auto w-[75%] rounded-md ring ring-slate-300"
	/>
	<img
		src="/activity/bvss/2023-zestful.png"
		alt="Most Zestful Award"
		class="mx-auto w-[75%] rounded-md ring ring-slate-300"
	/>
</Activity>

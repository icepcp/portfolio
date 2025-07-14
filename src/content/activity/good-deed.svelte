<script context="module" lang="ts">
	import Activity from '$lib/components/activity.svelte';
	export const metadata = {
		title: 'Good Deed Award',
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
		src="/activity/bvss/2022-good-deed.jpg"
		alt="Good Deed Award"
		class="mx-auto w-[75%] rounded-md ring ring-slate-300"
	/>
</Activity>

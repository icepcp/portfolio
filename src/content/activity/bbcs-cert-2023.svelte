<script context="module" lang="ts">
	import Activity from '$lib/components/activity.svelte';
	export const metadata = {
		title: 'Certificate of Participation',
		date: '2023',
		logo: {
			src: '/activity/bbcs/logo.png',
			alt: 'BuildingBloCS Logo'
		},
		type: 'certificate',
		org: 'BuildingBloCS'
	};
</script>

<Activity title={metadata.org + ' ' + metadata.title} date={metadata.date}>
	<img
		src="/activity/bbcs/cert-2023.png"
		alt="VIA Letter"
		class="mx-auto w-[75%] rounded-md ring ring-slate-300"
	/>
</Activity>

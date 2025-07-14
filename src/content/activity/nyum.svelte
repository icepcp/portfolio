<script context="module" lang="ts">
	import Activity from '$lib/components/activity.svelte';
	export const metadata = {
		title: 'Certificate of Appreciation',
		date: '2023',
		logo: {
			src: '/activity/nyum/logo.jpg',
			alt: 'NYUM Logo'
		},
		type: 'certificate',
		org: 'NYUM'
	};
</script>

<Activity title={metadata.org + ' ' + metadata.title} date={metadata.date}>
	<img
		src="/activity/nyum/cert.png"
		alt={metadata.title}
		class="mx-auto w-[75%] rounded-md ring ring-slate-300"
	/>
</Activity>

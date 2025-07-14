<script context="module" lang="ts">
	import Activity from '$lib/components/activity.svelte';
	export const metadata = {
		title: 'Infocomm Media Club Youth Awards',
		date: '2022',
		logo: {
			src: '/activity/youth-media-awards/logo.png',
			alt: 'IMDA Logo'
		},
		type: 'certificate',
		org: 'IMDA'
	};
</script>

<Activity title={metadata.org + ' ' + metadata.title} date={metadata.date}>
	<img
		src="/activity/youth-media-awards/award.png"
		alt="Certificate of Accomplishment"
		class="mx-auto w-[75%] rounded-md ring ring-slate-300"
	/>
</Activity>

<script context="module" lang="ts">
	import Activity from '$lib/components/activity.svelte';
	export const metadata = {
		title: 'National Software Competition',
		date: '2023',
		logo: {
			src: '/activity/nsc/logo.jpeg',
			alt: 'Singapore Polytechnic Logo'
		},
		type: 'certificate',
		org: 'Singapore Poly'
	};
</script>

<Activity title={metadata.org + ' ' + metadata.title} date={metadata.date}>
	<img
		src="/activity/nsc/award.png"
		alt="Certificate of Participation"
		class="mx-auto w-[75%] rounded-md ring ring-slate-300"
	/>
</Activity>

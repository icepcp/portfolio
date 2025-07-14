<script context="module" lang="ts">
	import Activity from '$lib/components/activity.svelte';
	export const metadata = {
		title: 'Young Engineers Achievement',
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
		src="/activity/yea/2023-achievment.png"
		alt="Certificate of Achievement"
		class="mx-auto w-[75%] rounded-md ring ring-slate-300"
	/>
	<img
		src="/activity/yea/2023-al.png"
		alt="Certificate of Applied Learning"
		class="mx-auto w-[75%] rounded-md ring ring-slate-300"
	/>
</Activity>

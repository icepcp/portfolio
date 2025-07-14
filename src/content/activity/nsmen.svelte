<script context="module" lang="ts">
	import Activity from '$lib/components/activity.svelte';
	export const metadata = {
		title: 'Appreciating NSMen Video Competition',
		date: '2023',
		logo: {
			src: '/activity/nsmen/logo.png',
			alt: 'Safra Logo'
		},
		type: 'experience'
	};
</script>

<Activity title={metadata.title} date={metadata.date}>
	<p>
		The Appreciating NSMen Video Competition was one I participated with one of my good friends, Jun
		Shuo, alongside my seniors Skyler, Ilyssa, and Albert. Getting a recommendation from my English
		teacher, we immediately signed up and started brainstorming on what would be the best way to
		appreciate our NSmen.
	</p>
	<p>
		With many ideas in mind, we settled on a video where we highlight the importance of NSmen,
		through the National Cadet Corps CCA in our school. We recorded a few clips of them marching,
		and interviewed the teacher in charge. Even though we may have not won an award, we learnt the
		importance of proper planning and execution in video production, and had a lot of fun recording
		and editing the clips together.
	</p>
	<img
		src="/activity/nsmen/award.png"
		alt="Certificate of Participation"
		class="mx-auto w-[75%] rounded-md ring ring-slate-300"
	/>
</Activity>

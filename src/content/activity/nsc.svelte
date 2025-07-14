<script context="module" lang="ts">
	import Activity from '$lib/components/activity.svelte';
	export const metadata = {
		title: 'National Software Competition',
		date: '2023',
		logo: {
			src: '/activity/nsc/logo.jpeg',
			alt: 'Singapore Polytechnic Logo'
		},
		type: 'experience'
	};
</script>

<Activity title={metadata.title} date={metadata.date}>
	<p>
		The National Software Competition, organized by Singapore Polytechnic, was one that I enjoyed
		the most. The competition consists of a JavaScript quiz. Before the competition day, me and my
		friends had practiced on their in-house JavaScript quiz platform, which I found challenging, as
		there was no place to run JavaScript code to test our answers, unlike HTML which can be run
		online. I had to resort to using the browser console to check if my answers were correct, and
		even then, there were some abnormalities.
	</p>
	<p>
		While I may have not won the competition, I really enjoyed the tour around Singapore Polytechnic
		campus and the many great facilitators.
	</p>
	<img
		src="/activity/nsc/award.png"
		alt="Certificate of Participation"
		class="mx-auto w-[75%] rounded-md ring ring-slate-300"
	/>
</Activity>

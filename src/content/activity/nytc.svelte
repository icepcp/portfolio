<script context="module" lang="ts">
	import Activity from '$lib/components/activity.svelte';
	export const metadata = {
		title: 'National Youth Tech Championship',
		date: '2023',
		logo: {
			src: '/activity/nytc/logo.jpg',
			alt: 'Google Cloud Logo'
		},
		type: 'experience'
	};
</script>

<Activity title={metadata.title} date={metadata.date}>
	<p>
		The National Youth Tech Championship, a competition organized by IMDA and Google Cloud, was a
		truly memorable experience for me. Through the competition, we had to use Tello drones with
		Python to complete various tasks, which was both challenging and exciting. And the best part was
		meeting TEAM TITAN, one of my childhood YouTubers.
	</p>
	<img
		src="/activity/nytc/image.jpg"
		alt="The team"
		class="mx-auto w-[75%] rounded-md ring ring-slate-300"
	/>
	<p>
		One of the tasks we had to do was an obstacle tasks, ensuring the drone goes through circles,
		squares, etc. Another one was where we had to have the drone rotated in a specific degree. I had
		a really fun time working with my friends and seniors, unfortunately, we did not manage to get
		through the first stage, as we were off just by a few points. I was truly devastated when I saw
		our school not listed.
	</p>
</Activity>

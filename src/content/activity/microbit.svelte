<script context="module" lang="ts">
	import Activity from '$lib/components/activity.svelte';
	export const metadata = {
		title: 'The Young Catalyst Inter-school Microbit Competition',
		date: '2022',
		logo: {
			src: '/activity/microbit/logo.webp',
			alt: 'Microbit Logo'
		},
		type: 'experience'
	};
</script>

<Activity title={metadata.title} date={metadata.date}>
	<p>
		The 2022 MGS-NYP The Young Catalyst Inter-school Microbit Competition was one of my first few
		competitions. The Young Catalyst is a platform for young minds to come together to design
		authentic and innovative solutions for their immediate environment. Working with my friend since
		primary school, Gibson, we brainstormed heavily on what can be improved in our learning
		environments, and finally came up with a solution.
	</p>
	<h3 class="text-5xl">Our Solution</h3>
	<p>
		Introducing, the N.E.R.D! Also known as the New Epic Radio Device, it sets out to solve a common
		solution in Singapore schools. Sometimes, our teachers may go too fast or slow, and it is quite
		embarrassing to ask the teacher to speed up or slow down, in a class filled with many students.
		The N.E.R.D sets out to solve this problem, by allowing teacher-student communication through
		the push of a button, powered by microbits and radios.
	</p>
	<img
		src="/activity/microbit/image.jpg"
		alt="Gibson and Myat holding the N.E.R.D"
		class="mx-auto w-[75%] rounded-md ring ring-slate-300"
	/>
	<h3 class="text-5xl">Outcome</h3>
	<p>We got "Most Creative Presentation" award and met many new people!</p>
	<img
		src="/activity/microbit/award.jpg"
		alt="Most Creative Presentation Certificate"
		class="mx-auto w-[75%] rounded-md ring ring-slate-300"
	/>
</Activity>

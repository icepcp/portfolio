<script context="module" lang="ts">
	import Activity from '$lib/components/activity.svelte';
	export const metadata = {
		title: 'Infocomm Media Club Youth Awards',
		date: '2022',
		logo: {
			src: '/activity/youth-media-awards/logo.png',
			alt: 'IMDA Logo'
		},
		type: 'experience'
	};
</script>

<Activity title={metadata.title} date={metadata.date}>
	<p>
		The Infocomm Media Club Youth Awards was a thrilling and exiting event that me and Gibson
		participated in, and I am really appreciative to experience the competition with my good friend.
		With the theme being Mental Health & Youths, we recalled a solution that we developed not too
		long ago.
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
		src="/activity/youth-media-awards/image.png"
		alt="Gibson and Myat holding the N.E.R.D"
		class="mx-auto w-[75%] rounded-md ring ring-slate-300"
	/>
	<h3 class="text-5xl">Outcome</h3>
	<p>
		We got the Accomplishment award, winning Popular vouchers, a Google Nest Mini, JBL Speaker and a
		Razer Microphone, while meeting many new people!
	</p>
	<img
		src="/activity/youth-media-awards/award.png"
		alt="Certificate of Accomplishment"
		class="mx-auto w-[75%] rounded-md ring ring-slate-300"
	/>
</Activity>

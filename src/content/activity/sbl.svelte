<script context="module" lang="ts">
	import Activity from '$lib/components/activity.svelte';
	export const metadata = {
		title: 'Singapore Biology League',
		date: '2023',
		logo: {
			src: '/activity/sbl/logo.jpeg',
			alt: 'Singapore Biology League Logo'
		},
		type: 'experience'
	};
</script>

<Activity title={metadata.title} date={metadata.date}>
	<p>
		In 2023, I was asked if I could help out with Singapore Biology League, a contest akin to
		Singapore Physics league, as a web developer. I immediately jumped on the offer, and started
		having calls, discussions, with the lead, Cervon. We worked out the core infrastructure of SBL,
		including database, what frameworks to use, and eventually settled on a combination of Firebase,
		Next.js and Astro.js for the homepage. If I had to choose again, I'd probably go with Supabase
		and Remix.js, as they're more secure and allows for more reads and writes, which is essential in
		a fast-paced competition.
	</p>
	<p>
		Throughout the next few months, I started working on the Admin Console, where SBL organisers can
		edit participant information and create groupings. However, due to my lack of time management, I
		had procrastinated this for a very long time. Eventually, as we got closer to the SBL date,
		Cervon was understandably disappointed with the very slow progress. I had tried to finish
		everything up super quickly, but it was just not possible. Things like automated groupings
		needed a lot of logic and testing, something that cannot be done in just a few days.
	</p>
	<p>
		After SBL 2024 had finished, I had a proper discussion with Cervon regarding the future of SBL,
		and we mutually agreed that I should step down as a web developer. I was not able to balance my
		time properly, and it was unfair to the team. I am still very grateful for the opportunity, and
		I hope to work with Cervon again in the future, it is a very large, painful lesson for me to
		learn, but I am glad that I did.
	</p>
</Activity>

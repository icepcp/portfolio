<script context="module" lang="ts">
	import Activity from '$lib/components/activity.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	export const metadata = {
		title: 'Shell NXplorers',
		date: '2023',
		logo: {
			src: '/activity/nxplorers/logo.png',
			alt: 'Shell Logo'
		},
		type: 'experience'
	};
</script>

<Activity title={metadata.title} date={metadata.date}>
	<p>
		I had an opportunity to participate in the Shell NXplorers program in 2023, educational
		programme to help young people develop critical thinking and creative problem solving skills
		throughout their school, college, university and professional lives. The program consisted of
		multiple stages, and many activities to address the complex challenges of our world.
	</p>
	<div>
		<!-- <h3 class="text-5xl">2023</h3> -->
		<p>
			I joined the program with my good friends Gibson and Moiz, who, even though were one year
			older than me, I was very close with. Our first session consisted of an introduction to
			NXplorers. Eventually, we started brainstorming, finding issues in our world. While there were
			many issues, we decided to focus on one - crop growing.
		</p>
	</div>
	<p>
		For the next few sessions, we started developing our idea using critical thinking skills taught
		by the program, such as the preferred future, pros and cons, and many more. We ended up at a
		sustainble plant growing system.
	</p>
	<div>
		<h4 class="!text-3xl">N.E.R.D</h4>
		<p>
			The N.E.R.D. - stands for New Epic Rainwater Device. Its concept is simple: collect rainwater,
			then distribute it to plants through sprinklers at a specified time. At the same time, it
			gains energy through solar panels. This solves three issues at once - saving water, saving
			electricity, and ensuring plants get watered consistently. However, on a larger scale, it
			solves much more issues, such as, lesser manpower required for plantations, automation in HDB
			community gardens, and many more; the concept was very simple yet powerful. Of course, there
			were many negatives too, such as it requires maintenance, and it is not meant to be a full-on
			replacement.
		</p>
	</div>
	<p>
		Over the next few months, we started to turn our vision, into a prototype. NXplorers has kindly
		provided a grant, due to our idea being very well thought out. We bought a multi-compartment
		trolley from IKEA, a water pump, and headed to the workshop to start building. The largest issue
		we ran into was with water collection, so we used cardboard and plastic to create a funnel for
		rainwater to go through.
	</p>
	<p>
		Initially, we wanted to use microbits to power and operate the system, however, there was no
		good way for it to be powered by solar panels, and it was not very waterproof, so we headed to
		Taobao to purchase the materials.
	</p>
	<div>
		<h3 class="text-5xl">Outcome</h3>
		<p>
			We managed to get a participant certificate - as the program was not a competition, but rather
			a learning experience. We also got a chance to present our idea to the Science Centre team,
			and got praised for the excellent idea.
		</p>
	</div>
	<img
		src="/activity/nxplorers/cert.jpg"
		alt="NXplorers Participation Certificate"
		class="mx-auto w-[75%] rounded-md ring ring-slate-300"
	/>
</Activity>

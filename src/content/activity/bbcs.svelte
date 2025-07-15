<script context="module" lang="ts">
	import Activity from '$lib/components/activity.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	export const metadata = {
		title: 'BuildingBloCS',
		date: '2022 - 2025',
		logo: {
			src: '/activity/bbcs/logo.png',
			alt: 'BuildingBloCS Logo'
		},
		type: 'experience'
	};
</script>

<Activity title={metadata.title} date={metadata.date}>
	<a href="/activity/bbcs/via.pdf" target="_blank" rel="noopener noreferrer">
		<Button>Download VIA Letter</Button>
	</a>
	<p>
		BuildingBloCS is a year-long outreach programme for students, by students, aimed at promoting
		more exposure to Computing and CS as a whole to Secondary School, JC and IP students.
	</p>
	<p>
		I've first joined BuildingBloCS as a participant, from 2022 to 2023, participating in the
		hackathon and the many workshops that were offered. Through BuildingBloCS, I actually started
		delving more into Web Development.
	</p>

	<div>
		<h3 class="text-5xl">2022</h3>
		<p>
			In 2022, I built a small webapp where teachers and students can easily book consultations.
			When you are a teacher, you may forget what consultations you may have, especially if it's
			buried in many WhatsApp messages. SchoolConsult brings a central location for all
			consultations
		</p>
	</div>
	<img
		src="/activity/bbcs/schoolconsult.png"
		alt="Screenshot of SchoolConsult"
		class="mb-4 rounded-md"
	/>
	<p>
		This was one of my first few custom-built websites without any templates, done through Bootstrap
		Studio. As my web development knowledge was very lacking, there was no mobile support, it looked
		unpleasant, worked weirdly on Firefox, and many more issues. Check it out at
		<a href="https://schoolconsult.bss.design/home.html" target="_blank" rel="noopener noreferrer"
			>https://schoolconsult.bss.design/home.html</a
		>.
	</p>

	<div>
		<h3 class="text-5xl">2023</h3>
		<p>
			In 2023, my team and I built a mobile app, allowing users to detect unknown medication,
			through the use of machine learning. Just snap a picture of the medication, and the app will
			provide accurate information instantly, such as the name, alongside its use and prescription
			advice. The tool would be especially useful for medication that may have its label faded, or
			for caretakers who aren't sure about the prescription required. <video
				controls
				class="rounded-md"
			>
				<source src="/activity/bbcs/medisure.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</p>
	</div>
	<p>
		Through the project, I've met many people and learnt many new skills, such as design thinking,
		integrating AI into Python, and many more. After this event, I decided to sign up as an
		organizer.
	</p>

	<div>
		<h3 class="text-5xl">Late 2023 - 2024</h3>
		<p>
			As part of the organizer team, in the Dev department, I set out to redesign the BuildingBloCS
			website with a new and intuitive design, using Nuxt. The site is currently at <a
				href="https://old.buildingblocs.sg/2023-newnew/"
				target="_blank"
				rel="noopener noreferrer">https://old.buildingblocs.sg/2023-newnew/</a
			>. At the same time, I planned for my own workshop, "Intro to Nuxt.JS and TailwindCSS", where
			I taught participants how to use TailwindUI, TailwindCSS, and how to scaffold a project in
			Nuxt.JS.
		</p>
	</div>
	<img
		src="/activity/bbcs/site1.png"
		alt="BuildingBloCS 2023 website"
		class="mx-auto w-[75%] rounded-md ring ring-slate-300"
	/>
	<p>
		Check it out at <a
			href="https://old.buildingblocs.sg/2023-newnew/"
			target="_blank"
			rel="noopener noreferrer">https://old.buildingblocs.sg/2023-newnew/</a
		>
	</p>
	<p>
		I felt that with Nuxt, there was a lot of technical debt, and because this was one of my first
		few websites, there were unoptimized and funky code, alongside the fact that it had many console
		errors. The site was rebuilt with Astrojs, focusing more on clean and optimized code, and it is
		still currently used by the organization. Check it out at <a
			href="https://buildingblocs.sg"
			target="_blank"
			rel="noopener noreferrer">https://buildingblocs.sg</a
		>.
	</p>
	<img
		src="/activity/bbcs/site2.png"
		alt="BuildingBloCS 2024 website"
		class="mx-auto w-[75%] rounded-md ring ring-slate-300"
	/>
	<p>
		Throughout 2024, I had contributed greatly to BuildingBloCS. For the 2024 June Conference, I was
		in charge of Audio-Visual, recording all workshops, ensuring that presentations went smoothly,
		and helped out with general manpower as well. During that period, me and Du Yuhan, the
		Overall-In-Charge of BuildingBloCS 2024, had come up with a Design Guideline for the
		organization, as part of my responsibilities in the Design department. We generated variations
		of the logo, describing how to use it in all kinds of scenario, to ensure consistent branding
		and maintain a cohesive visual identity.
	</p>
	<div>
		<h3 class="text-5xl">Late 2024 - 2025</h3>
		<p>
			After the June Conference was over, I was given an opportunity to join the Executive Committee
			for the upcoming December Conference, with four other members. This was a very exiting offer,
			and I had gladly accepted it. Over the upcoming months, we had discussed on the planning of
			December Conference, and decided to make it hybrid - a first for BuildingBloCS conferences.
			Through this, participants had the choice of joining the workshops online, or onsite at
			Singapore Management University. Working tightly with four other members I had never talked
			much with was slightly challenging, as we barely knew each other. However, as time passed,
			I've come to be very close with them - Sahil, Dhanvine, Jolynn and Weiyi. On the day of the
			conference itself, I was once again, in charge of Audio-Visual, and also created a general
			theme for the conference, used in slides and designs. We had many essential discussions
			throughout the day as we solved grouping issues with teammates being missing in action. It was
			one of the most memorable experiences and many valuable lessons were learnt.
		</p>
	</div>
	<p>
		Approaching 2025, I had decided to reduce my involvement with the organization, as it was my
		O-Level year. I still helped out with general Dev tasks, such as emailing participants their
		certificates, coming up with new scripts and tools to save time. During the 2025 June
		Conference, I was still in charge of Audio-Visual, but it would be my last time helping out.
	</p>
	<p>
		As of now, I am no longer involved with BuildingBloCS, but I am still very grateful for the
		opportunities and lessons I have learnt, managing to contribute 300 hours. Overall,
		BuildingBloCS has been a very important part of my life, and without it, I definitely would not
		have delved into web development as much as I did.
	</p>
</Activity>

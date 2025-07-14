<script context="module" lang="ts">
	import Activity from '$lib/components/activity.svelte';
	export const metadata = {
		title: 'greentea',
		date: '2023',
		logo: {
			src: '/activity/greentea/logo.webp',
			alt: 'Cup of Matcha'
		},
		type: 'experience'
	};
</script>

<Activity title={metadata.title} date={metadata.date}>
	<p>
		In 2023, my friend Shermaine asked if I could help her out with a portfolio website. I decided
		to use the following stack: Astro.js, TailwindCSS and Sanity CMS, so that she does not need to
		edit the code and can edit through the CMS, deploying it all on Cloudflare Pages.
	</p>
	<img
		src="/activity/greentea/image.png"
		alt="Shermaine's website"
		class="mx-auto w-[75%] rounded-md ring ring-slate-300"
	/>
	<p>
		Check it out at <a href="https://greentea.pages.dev" target="_blank" rel="noopener noreferrer"
			>https://greentea.pages.dev</a
		>
	</p>
</Activity>

<script lang="ts">
	import { getActivities, type Activity } from '$lib/activity';
	import { onMount } from 'svelte';
	import Modal from '$lib/components/modal.svelte';
	import * as Drawer from '$lib/components/ui/drawer/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { ArrowUpRightIcon } from '@lucide/svelte';

	let activities: Activity[] = [];
	let active: Activity | null = null;
	let drawerOpen = false;

	onMount(() => {
		activities = getActivities('experience', 3);
	});

	function open(act: Activity) {
		active = act;
	}

	function closeEverything() {
		drawerOpen = false;
		active = null;
	}
</script>

<div
	class="mt-20 overflow-hidden bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed ring
    ring-slate-300
    [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10"
>
	<div
		class="flex flex-col items-center justify-between gap-0 sm:flex-row md:mx-10 md:gap-10 lg:mx-15"
	>
		<h1
			class="relative flex w-min flex-col bg-white text-8xl leading-20 text-slate-600 ring ring-slate-300"
		>
			<div class="overflow-hidden">
				<span class="a1 z-1 -mt-[0.55rem] -ml-[0.2rem] block">AUNG</span>
			</div>
			<div class="overflow-hidden">
				<span class="a2 -mr-[0.45rem] -ml-[0.55rem] block">KAUNG</span>
			</div>
			<div class="overflow-hidden">
				<span class="a3 -mr-0.5 -mb-2 block text-right">MYAT</span>
			</div>
		</h1>
		<div
			class="b flex max-w-2xl flex-col gap-4 overflow-hidden bg-white p-5
text-slate-600 ring ring-slate-300 lg:rounded-lg"
		>
			<p>
				Hello, I'm Myat, a 16 year old male living in Singapore. I love web development and have
				experience with many web frameworks and technologies.
			</p>
			<ul class="grid list-inside list-disc grid-cols-3 marker:text-slate-400">
				<li>Remix.js</li>
				<li>Astro.js</li>
				<li>Vue.js</li>
				<li>Express.js</li>
				<li>Typescript</li>
				<li>Supabase</li>
				<li>Material UI</li>
				<li>AWS EC2, Lambda</li>
				<li>and many more...</li>
			</ul>
		</div>
	</div>
</div>
<div
	class="mt-10 bg-[radial-gradient(circle,#cad5e2_1px,transparent_1px)] bg-[size:10px_10px] ring ring-slate-300"
>
	<div class="items-center justify-between gap-10 py-5 sm:mx-10 sm:flex md:mx-20">
		<h2 class="my-10 ml-10 sm:my-0 sm:ml-0">
			A bit about<br />me.
		</h2>
		<div
			class="flex max-w-3xl flex-col gap-4 bg-white p-5 leading-7 text-slate-600 ring ring-slate-300 sm:rounded-lg"
		>
			<p>
				Initially, when I was in Primary 4 or 5, I had an interest in Videography and Visual
				Effects. I would spend my time watching tutorials on how to create lyric videos using After
				Effects, playing around with motion design and graphic design. However, I felt that it was
				very tiring for me to continue creating such videos and wanted to dive into making my own
				websites. Eventually, in Primary 6, I downloaded a few HTML templates and made websites for
				any kind of reason. I remember I made websites about myself, my many YouTube channels, and
				saw my future in web development.
			</p>
			<p>
				Now, I have grown and learn so much more about web development, and I feel like I have made
				the right direction delving into web development.
			</p>
		</div>
	</div>
</div>
<div class="mt-10 bg-gradient-to-b from-slate-100 to-slate-200 ring ring-slate-300">
	<div class="items-center justify-between gap-10 py-5 sm:mx-10 md:mx-20 md:flex">
		<h2 class="my-10 ml-10 md:my-0 md:ml-0 md:hidden" style="font-size: 3.5rem;">
			Why Web<br />Development?
		</h2>
		<div
			class="flex max-w-3xl flex-col gap-4 bg-white p-5 leading-7 text-slate-600 ring ring-slate-300 sm:rounded-lg"
		>
			<p>
				I like to think forward for my future. Many people and business are looking to having a
				website. A website is the most critical component of a business, especially if it is
				international. Websites also provide long-term revenue through hosting and maintenance. Even
				after I have finished building a site, clients may ask me to update content, and compared to
				videography and motion design, it is sustainable.
			</p>
			<p>
				I also feel like it is easier to finish a project with websites than motion design. I am
				better at coming up and solving solutions with websites and APIs. Web development is also
				more opinionated, allowing me to think within JavaScript, compared to having an empty
				canvas. To me, this is what I am good at, solving problems logically, rather than
				storytelling and creativity.
			</p>
		</div>
		<h2 class="hidden md:block">
			Why Web<br />Development?
		</h2>
	</div>
</div>

<div class="mt-10 ring ring-slate-300">
	<div class="items-center justify-between gap-10 py-5">
		<h2 class="ml-5 text-5xl sm:ml-2 sm:ml-20 sm:text-6xl">My experiences</h2>
		<Drawer.Root
			bind:open={drawerOpen}
			onOpenChange={(isOpen: boolean) => {
				if (!isOpen) closeEverything();
			}}
		>
			<ul class="flex flex-nowrap gap-x-5 overflow-x-auto px-5 pb-2 sm:px-20">
				{#each activities as activity}
					<li
						class="relative mt-5 w-xs flex-shrink-0 rounded-md bg-slate-100 p-3 shadow-sm ring ring-slate-300"
					>
						<div class="flex gap-x-3">
							<img
								src={activity.metadata.logo.src}
								alt={activity.metadata.logo.alt}
								class="h-full w-12 rounded-sm object-cover ring ring-slate-300"
							/>
							<div>
								<h3 class="text-xl leading-5">{activity.metadata.title}</h3>
								<h4>{activity.metadata.date}</h4>
							</div>
						</div>
						<button class="absolute right-2 bottom-2" on:click={() => open(activity)}>
							<Drawer.Trigger
								class="inline-flex items-center justify-center space-x-1 rounded-sm px-1 text-sm text-slate-600 transition hover:bg-slate-300 hover:text-slate-800"
							>
								<span>View More</span>
								<ArrowUpRightIcon class="h-4 w-4" />
							</Drawer.Trigger>
						</button>
					</li>
				{/each}
				<li
					class="relative mt-5 w-xs flex-shrink-0 rounded-md bg-slate-100 p-3 shadow-sm ring ring-slate-300"
				>
					<div class="flex gap-x-3">
						<div>
							<h3 class="text-xl">There's More</h3>
							<h4>Check out Experiences Page</h4>
						</div>
					</div>
					<a class="absolute right-2 bottom-2" href="/experiences">
						<div
							class="inline-flex items-center justify-center space-x-1 rounded-sm px-1 text-sm text-slate-600 transition hover:bg-slate-300 hover:text-slate-800"
						>
							<span>View More</span>
							<ArrowUpRightIcon class="h-4 w-4" />
						</div>
					</a>
				</li>
			</ul>

			{#if active}
				<Modal closeOnBackdrop={false}>
					<Drawer.Content>
						<div class="relative overflow-auto">
							<div class="mx-5 max-w-2xl py-10 !select-text md:mx-auto">
								<svelte:component this={active.component} />
							</div>
							<Drawer.Close class="fixed bottom-0 w-full bg-slate-100/50 backdrop-blur-xs">
								<Button class="mx-auto my-5 rounded-full bg-slate-600">Close</Button>
							</Drawer.Close>
						</div>
					</Drawer.Content>
				</Modal>
			{/if}
		</Drawer.Root>
	</div>
</div>

<div class="mt-30 mb-50 mx-20">
	<div class="group flex justify-center">
		<a
			href="certificates"
			style="font-family: 'Instrument Serif', serif;"
			class="flex items-center text-7xl font-medium text-slate-700 transition hover:-translate-y-1 hover:text-slate-500 hover:underline"
		>
			See my certificates
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="80px"
				viewBox="0 -960 960 960"
				width="80px"
				fill="#314158"
				class="ml-2 transition group-hover:fill-[#64748b]"
			>
				<path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
			</svg>
		</a>
	</div>
</div>

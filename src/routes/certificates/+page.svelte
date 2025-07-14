<script lang="ts">
	import { getActivities, type Activity } from '$lib/activity';
	import { onMount } from 'svelte';
	import Modal from '$lib/components/modal.svelte';
	import * as Drawer from '$lib/components/ui/drawer/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { ArrowUpRightIcon } from '@lucide/svelte';
	import * as Select from '$lib/components/ui/select/index.js';

	let activities: Activity[] = [];
	let active: Activity | null = null;
	let drawerOpen = false;

	let sortKey: 'date' | 'title' = 'date';
	let sortOrder: 1 | -1 = -1;

	onMount(() => {
		activities = getActivities('certificate');
	});

	function open(act: Activity) {
		active = act;
		drawerOpen = true;
	}

	function closeEverything() {
		drawerOpen = false;
		active = null;
	}

	$: sortedActivities = activities.slice().sort((a, b) => {
		let av =
			sortKey === 'date' ? new Date(a.metadata.date).getFullYear() : a.metadata.title.toLowerCase();
		let bv =
			sortKey === 'date' ? new Date(b.metadata.date).getFullYear() : b.metadata.title.toLowerCase();

		if (av < bv) return -1 * sortOrder;
		if (av > bv) return 1 * sortOrder;
		return 0;
	});

	const labels = {
		date: 'Year',
		title: 'Name'
	};
</script>

<h1
	class="relative mt-10 ml-5 flex w-min flex-col text-7xl leading-20 tracking-tighter text-slate-600"
>
	Certificates
</h1>
<div class="mt-5 flex items-center gap-2 px-5">
	<p>Filter:</p>
	<label>
		<Select.Root type="single" bind:value={sortKey}>
			<Select.Trigger class="w-[180px]"><span>{labels[sortKey]}</span></Select.Trigger>
			<Select.Content>
				<Select.Item value="date">Year</Select.Item>
				<Select.Item value="title">Name</Select.Item>
			</Select.Content>
		</Select.Root>
	</label>

	<button type="button" on:click={() => (sortOrder = -sortOrder)}>
		<Button variant="outline">
			{sortOrder === 1 ? '↑ Asc' : '↓ Desc'}
		</Button>
	</button>
</div>

<Drawer.Root
	bind:open={drawerOpen}
	onOpenChange={(isOpen: boolean) => {
		if (!isOpen) closeEverything();
	}}
>
	<ul class="flex flex-wrap gap-x-5 px-5 pb-2">
		{#each sortedActivities as activity}
			<li class="relative mt-5 w-xs rounded-md bg-slate-100 p-3 shadow-sm ring ring-slate-300">
				<div class="flex gap-x-3">
					<img
						src={activity.metadata.logo.src}
						alt={activity.metadata.logo.alt}
						class="h-full w-12 rounded-sm object-cover ring ring-slate-300"
					/>
					<div>
						<h3 class="text-xl leading-5">{activity.metadata.title}</h3>
						<h4>{activity.metadata.org}</h4>
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

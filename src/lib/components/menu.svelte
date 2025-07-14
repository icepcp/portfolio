<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import Modal from '$lib/components/modal.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Menu } from '@lucide/svelte';

	let dropdownOpen = false;

	const navigationItems = [
		{ href: '/', label: 'Home' },
		{ href: '/experiences', label: 'Experiences' },
		{ href: '/certificates', label: 'Certificates' },
		{ href: '/about', label: 'About this Site' }
	];
</script>

<DropdownMenu.Root bind:open={dropdownOpen}>
	<DropdownMenu.Trigger>
		<Button size="icon" class="rounded-full bg-slate-600 shadow-sm">
			<Menu />
		</Button>
	</DropdownMenu.Trigger>

	{#if dropdownOpen}
		<Modal slot="modal" on:close={() => (dropdownOpen = false)}>
			<DropdownMenu.Content sideOffset={4} collisionPadding={8} class="bg-slate-200/70 backdrop-blur-xs">
				<div class="flex gap-x-5 p-5">
					<div class="flex flex-col justify-between sm:flex-row">
						<h1 class="relative flex w-min flex-col text-3xl leading-7 text-slate-600">
							<div class="overflow-hidden">
								<span class="a1 z-1 block">AUNG</span>
							</div>
							<div class="overflow-hidden">
								<span class="a2 block">KAUNG</span>
							</div>
							<div class="overflow-hidden">
								<span class="a3 block text-right">MYAT</span>
							</div>
						</h1>
					</div>
					<div class="flex flex-col gap-y-2">
						{#each navigationItems as item}
							<a href={item.href} class="flex-1" on:click={() => (dropdownOpen = false)}>
								<Button variant="outline" class="w-full bg-slate-200/70">{item.label}</Button>
							</a>
						{/each}
					</div>
				</div>
			</DropdownMenu.Content>
		</Modal>
	{/if}
</DropdownMenu.Root>

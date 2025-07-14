<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import Modal from '$lib/components/modal.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Menu } from '@lucide/svelte';

	let dropdownOpen = false;
</script>

<DropdownMenu.Root bind:open={dropdownOpen}>
	<DropdownMenu.Trigger>
		<Button size="icon" class="rounded-full bg-slate-600 shadow-sm">
			<Menu />
		</Button>
	</DropdownMenu.Trigger>

	{#if dropdownOpen}
		<Modal slot="modal" on:close={() => (dropdownOpen = false)}>
			<DropdownMenu.Content sideOffset={4} collisionPadding={8}>
				<div class="flex gap-x-5 p-5">
					<div class="flex flex-col justify-between sm:flex-row">
						<h1 class="relative flex w-min flex-col bg-white text-3xl leading-7 text-slate-600">
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
						<a href="/" class="flex-1" on:click={() => (dropdownOpen = false)}>
							<Button variant="outline" class="w-full">Home</Button>
						</a>
						<a href="/experiences" class="flex-1" on:click={() => (dropdownOpen = false)}>
							<Button variant="outline" class="w-full">Experiences</Button>
						</a>
						<a href="/certificates" class="flex-1" on:click={() => (dropdownOpen = false)}>
							<Button variant="outline" class="w-full">Certificates</Button>
						</a>
						<a href="/about" class="flex-1" on:click={() => (dropdownOpen = false)}>
							<Button variant="outline" class="w-full">About this Site</Button>
						</a>
					</div>
				</div>
			</DropdownMenu.Content>
		</Modal>
	{/if}
</DropdownMenu.Root>

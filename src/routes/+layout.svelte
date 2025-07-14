<script lang="ts">
	import { modalCount } from '$lib/stores/modal';
	import Menu from '$lib/components/menu.svelte';
	import '../app.css';
	import '@fontsource-variable/instrument-sans';
	import '@fontsource/instrument-serif';
	import '@fontsource-variable/bricolage-grotesque';

	let { children } = $props();
</script>

<div class="relative flex full-viewport-height w-full items-center justify-center overflow-hidden bg-black">
	<div
		class="h-full w-full transform bg-slate-50 p-1 transition-all duration-300"
		class:scale-95={$modalCount > 0}
		class:brightness-50={$modalCount > 0}
		class:rounded-sm={$modalCount > 0}
	>
		<div
			class="relative flex h-full w-full flex-col overflow-hidden rounded-md border border-slate-300"
		>
			<div class="flex-1 overflow-auto rounded-md">
				{@render children()}
			</div>
		</div>
	</div>

	<div class="absolute right-5 bottom-5 z-50">
		<Menu />
	</div>
</div>

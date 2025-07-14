<script lang="ts">
	import { onMount, onDestroy, createEventDispatcher } from 'svelte';
	import Portal from 'svelte-portal';
	import { openModal, closeModal } from '$lib/stores/modal';

	const dispatch = createEventDispatcher();
	export let closeOnBackdrop = true;

	onMount(() => openModal());
	onDestroy(() => closeModal());

	function backdropClick() {
		if (closeOnBackdrop) dispatch('close');
	}
</script>

<Portal>
	<div class="fixed inset-0 z-40"></div>
	<button
		type="button"
		class="fixed inset-0 z-50 flex items-center justify-center overflow-auto p-4"
		on:click={backdropClick}
	>
		<slot />
	</button>
</Portal>

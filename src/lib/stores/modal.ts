import { writable } from 'svelte/store';

export const modalCount = writable(0);

export function openModal() {
	modalCount.update((n) => n + 1);
}

export function closeModal() {
	modalCount.update((n) => Math.max(0, n - 1));
}

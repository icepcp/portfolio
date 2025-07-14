import type { SvelteComponent } from 'svelte';

export interface Activity {
	metadata: {
		title: string;
		date: string;
		type?: string;
		description: string;
		[key: string]: any;
	};
	component: typeof SvelteComponent;
}

/**
 * Load all activities, optionally filtering by metadata.type,
 * sorting newest→oldest, and limiting the number of results.
 */
export function getActivities(filterType?: string, limit?: number): Activity[] {
	const modules = import.meta.glob('/src/content/activity/*.svelte', {
		eager: true
	});

	const acts = Object.entries(modules).map(([_, module]) => {
		const mod = module as any;
		return {
			metadata: mod.metadata,
			component: mod.default
		} satisfies Activity;
	});

	let result = acts
		.filter((act) => {
			if (!filterType) return true;
			return act.metadata.type === filterType;
		})
		.sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());

	if (limit !== undefined) {
		result = result.slice(0, limit);
	}

	return result;
}

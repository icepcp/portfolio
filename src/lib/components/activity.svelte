<script lang="ts">
	let props = $props();
</script>

<div
	class="prose prose-headings:mt-0 prose-headings:mb-0 prose-p:mt-0 prose-p:mb-0 flex flex-col gap-y-5 pb-15"
>
	<div>
		<h2>{props.title}</h2>
		<small>{props.date}</small>
	</div>
	{@render props.children?.()}
</div>

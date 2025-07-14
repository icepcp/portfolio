<svelte:head>
	<title>About this Site - Myat</title>
	<meta name="description" content="Learn more about the technologies that power my portfolio" />
</svelte:head>

<h1 class="relative mt-10 ml-5 flex flex-col text-7xl leading-20 tracking-tighter text-slate-600">
	About this Site
</h1>
<div class="prose mx-5">
	<p>This site is built using SvelteKit, with the following libraries:</p>
	<ul>
		<li>Shadcn Svelte - for buttons, dropdowns</li>
		<li>Tailwind CSS - for styling</li>
		<li>Lucide Icons - for icons</li>
		<li>Vaul - for drawer</li>
		<li>Prettier - linting and formatting code</li>
		<li>svelte-portal - for drawer and menu to have pop-up effect</li>
	</ul>
	<p>It is hosted on Cloudflare Pages, with code hosted on GitHub.</p>
	<p>
		I opted to use .svelte files for content entries rather than MDsvex, as their documentation was
		lacking, and using svelte files were more flexible. All entries can be accessed through a
		function, and has metadata for title, images, etc.
	</p>
</div>

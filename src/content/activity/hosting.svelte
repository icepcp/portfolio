<script context="module" lang="ts">
	import Activity from '$lib/components/activity.svelte';
	export const metadata = {
		title: 'myat hosting',
		date: '2024 - Present',
		logo: {
			src: '/activity/hosting/logo.png',
			alt: 'Myat Hosting Logo'
		},
		type: 'experience'
	};
</script>

<Activity title={metadata.title} date={metadata.date}>
	<p>
		myat hosting is a small business that aims to solve one issue - high prices paired with horrible
		service within the hosting sector. It all started when I saw on Reddit, that many web hosting
		providers were changing prices every now and then. However, I felt like there would be many
		challenges as I started this venture, such as high customer demands, high costs, and lack of
		reliability as my company was just starting out.
	</p>
	<p>
		I signed up for a reseller hosting plan, which I felt was most appropriate, and started offering
		it to customers for the low price of $10 annually. This eye-catching price made many interested,
		and as such, I started getting a few customers.
	</p>
	<p>
		Not all customers are the same, and some may require different services, such as proper email
		hosting (I only offered email hosting through shared hosting, which is not the best) or even
		Node.JS hosting. I eventually started to expand my offerings, while still offering low rates and
		great customer service.
	</p>
	<p>
		Eventually as I started to earn a bit more cash and had more expenses, I needed a way to keep
		track to ensure that I was not operating at a loss. I started to explore into accounting
		software, and ended up using Quickbooks. Through Quickbooks, I'd add customers, vendors, and
		track all expenses and income so I can make proper financial decisions.
	</p>
	<p>
		I've had some amazing customers, who I could chat with every day, and they complain that hosting
		prices have skyrocketed, and would rather choose a provider that keeps its prices consistent.
		However, there are some customers who expect too much from just $10 annually - I've had one who
		asked me to set up an entire WooCommerce site for him, from scratch, adding all his products,
		images, and many more. While I do not mind helping out, I found myself having lesser sleep and
		felt that it affected me mentally.
	</p>
	<p>
		Some potential customers also felt that the lack of a proper website was a dealbreaker.
		Currently, my website is very simple, consisting of just a few pages, compared to big hosting
		providers where they have multiple pages, blogs, and many more. Just recently, I've implemented
		a billing system through Blesta, so that it is easier for my clients to "self-manage" their
		service, and allows for an easier billing experience. Currently, customers can contact me
		through ticketing, email or WhatsApp for any issues they may face.
	</p>
	<p>
		As of now, the business is still up and running, and I've got a nhaveew customer who wants to
		host GhostCMS. It has been a slight challenge for me, especially since I needed to migrate from
		WordPress to Ghost, but so far I am quite happy with the progress. I've earned $150+ SGD in
		sales revenue, and hope to continue growing the business. I have also learnt many experiences,
		and eventually want to rent a server rather than using reseller hosting.
	</p>
</Activity>

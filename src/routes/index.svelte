<script lang="ts" context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import { setClient, operationStore, query } from '@urql/svelte';
	import { Find_Contents_BannerDocument } from '../generated/graphql';
	import type { Find_Contents_BannerQuery } from '../generated/graphql';

	import client from '../_client';
	setClient(client);

	const items = operationStore<Find_Contents_BannerQuery>(Find_Contents_BannerDocument, {
		sort: '{}',
		skip: 0,
		limit: 10,
		search: '{}'
	});

	query(items);
</script>

<svelte:head>
	<title>Articles</title>
</svelte:head>

{#if $items.fetching}
	<p>Loading...</p>
{:else if $items.error}
	<p>Oh no ~ {$items.error.message}</p>
{:else}
	{#each $items.data.findMainBanners as item}
		<div class="mb-10">
			<div class="border-b-2 border-gray-700">
				<a href={`/articles/${item._id}`} class="text-2xl font-bold uppercase text-indigo-500"
					>{item.contents.txt_title}</a
				>
			</div>
			<div class="my-10 text-2xl">{item.contents.txta_description}</div>
			<div class="flex justify-end mt-5">{item.pageSize}</div>
		</div>
	{/each}
{/if}

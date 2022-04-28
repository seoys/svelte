<script lang="ts" context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import { setClient, operationStore, query } from '@urql/svelte';
	import { page } from '$app/stores';

	import { Get_ContentsDocument } from '../../generated/graphql';
	import type { Get_ContentsQuery } from '../../generated/graphql';

	import client from '../../_client';
	setClient(client);

	const article = operationStore<Get_ContentsQuery>(Get_ContentsDocument, {
		id: $page.params.id ?? ''
	});

	console.log('article', article);

	query(article);
</script>

<svelte:head>
	<title>{$article?.data?.viewMainBanner?.contents.txt_title}</title>
</svelte:head>

{#if $article.fetching}
	<p>Loding...</p>
{:else if $article.error}
	<p>Oh no... {$article.error.message}</p>
{:else}
	<div class="mb-10">
		<div class="border-b-2 border-gray-700 text-2xl font-bold uppercase text-indigo-500">
			{$article.data?.viewMainBanner?.contents.txt_title}
		</div>
		<div class="my-10 text-2xl">{$article.data?.viewMainBanner?.contents.txta_description}</div>
		<div class="flex justify-end mt-5">
			{$article.data?.viewMainBanner?.contents.images[0]?.filename}
		</div>
	</div>
{/if}

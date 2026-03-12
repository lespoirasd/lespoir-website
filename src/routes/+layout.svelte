<script lang="ts">
  import { untrack, type Snippet } from "svelte";
  import { SvelteTheme } from "svelte-themes";
  import { createLanyardSocket, setLanyardContext } from "$lib/context/lanyard.svelte";
  import "../app.css";
  import type { LayoutData } from "./$types";

  let { children, data }: { children: Snippet; data: LayoutData } = $props();

  let lanyardData = $state(untrack(() => data.lanyard));

  setLanyardContext({
    get data() {
      return lanyardData;
    },
  });

  const { connect, destroy } = createLanyardSocket(incoming => (lanyardData = incoming));

  connect();

  $effect(() => () => destroy());
</script>

<svelte:head>
  <title>L'espoir</title>
  <meta name="description" content="Personal website of L'espoir." />
  <meta name="keywords" content="lespoir, L'espoir, Website, Portfolio" />
  <meta name="application-name" content="L'espoir" />
  <meta name="apple-mobile-web-app-title" content="L'espoir" />
  <meta name="author" content="L'espoir" />

  <meta property="og:title" content="L'espoir" />
  <meta property="og:description" content="Personal website of L'espoir." />
  <meta property="og:url" content="https://lespoir.is-a.dev" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="L'espoir" />
  <meta property="og:image" content="/logo.png" />

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="L'espoir" />
  <meta name="twitter:description" content="Personal website of L'espoir." />
  <meta name="twitter:image" content="/logo.png" />
</svelte:head>

<SvelteTheme attribute="class">
  <div
    class="bg-stone-100 text-black dark:bg-black dark:bg-linear-to-br dark:from-black dark:via-(--charcoal) dark:to-black dark:text-white"
  >
    {@render children()}
  </div>
</SvelteTheme>

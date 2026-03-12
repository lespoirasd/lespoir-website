<script lang="ts">
  import LuMail from "~icons/lucide/mail";
  import ThemeToggle from "$lib/components/ThemeToggle.svelte";
  import { SOCIAL_LINKS } from "$lib/util";
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<section class="mt-4 flex w-full items-center">
  <div class="flex gap-x-2">
    <a
      class="flex items-center gap-x-2 rounded-xl bg-gray-200/60 p-2 font-semibold underline underline-offset-4 dark:bg-white/10"
      href={SOCIAL_LINKS.Email}
      target="_blank"
      rel="noopener noreferrer"
      title="Email"
    >
      <LuMail class="size-5 text-(--icon-color)" />
    </a>
  </div>
  <div class="mx-3 h-5 w-px rounded-full bg-black/20 dark:bg-white/20"></div>
  <ThemeToggle />
</section>

<script lang="ts">
  import '../app.css'
  import '../app.css'
  import NavLinks from '$lib/common/navLinks.svelte'
  import ThemeSwitcher from '$lib/common/themeSwitcher.svelte'
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'

  onMount(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    themeChange(false)
  })

  let mobileMenuOpen = false
</script>

<svelte:head>
  <title>Site Name Here</title>
</svelte:head>

<aside
  class:translate-x-full={mobileMenuOpen}
  class="absolute z-40 w-full h-full transition duration-500 ease-in-out transform bg-neutral-focus -left-full"
  on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
>
  <div class="flex flex-col text-xl text-neutral-content">
    <NavLinks />
  </div>
</aside>

<nav class="navbar bg-neutral text-neutral-content">
  <div class="flex-none">
    <button
      class="z-50 btn btn-square btn-ghost lg:hidden"
      on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="inline-block w-10 h-10 stroke-current"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </div>
  <div class="items-center flex-1">
    <div class="px-2 pb-2 mx-2 flex-0">
      <a class="text-4xl font-bold text-primary" href="/"> Logo </a>
    </div>
    <div class="flex-1 hidden px-2 mx-2 lg:block">
      <div class="items-stretch">
        <NavLinks />
      </div>
    </div>
  </div>
  <div class="flex-none">
    <ThemeSwitcher />
  </div>
</nav>
<main class="min-h-screen">
  <slot />
</main>
<footer class="flex justify-center w-full px-12 py-32 bg-neutral">
  <span class="text-xl text-neutral-content">
    Copyright &copy; 2021 CHANGEME. All Rights Reserved
  </span>
</footer>

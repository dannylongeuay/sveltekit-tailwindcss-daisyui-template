<script lang="ts">
  let themes: string[] = [
    'aqua',
    'black',
    'bumblebee',
    'corporate',
    'cupcake',
    'cyberpunk',
    'dark',
    'dracula',
    'emerald',
    'fantasy',
    'forest',
    'garden',
    'light',
    'lofi',
    'luxury',
    'pastel',
    'retro',
    'synthwave',
    'valentine',
    'wireframe'
  ]
</script>

<div class="z-30 dropdown dropdown-left">
  <div tabindex="0" class="btn btn-ghost">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      class="inline-block w-6 h-6 stroke-current md:mr-2"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
      /></svg
    >
    <span class="hidden md:block">Theme</span>
  </div>
  <ul tabindex="0" class="pb-2 shadow menu dropdown-content bg-neutral-focus w-52">
    {#each themes as theme}
      <li>
        <button
          class="mx-4 mt-2 btn btn-primary"
          data-set-theme={theme}
          data-act-class="ACTIVECLASS">{theme}</button
        >
      </li>
    {/each}
  </ul>
</div>

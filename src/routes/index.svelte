<script lang="ts">
  import { decrement } from '$lib/decrement'

  let upCount = 0
  let downCount = 0

  export const increment = (): void => {
    upCount += 1
  }
</script>

<div class="container flex justify-center mx-auto">
  <div class="flex flex-col">
    <h1 class="text-4xl font-bold text-primary">Home Content</h1>
    <button class="btn btn-primary" on:click={increment}>Up Clicks: {upCount}</button>
    <button class="btn btn-primary" on:click={() => (downCount = decrement(downCount))}
      >Down Clicks: {downCount}</button
    >
  </div>
</div>

<script lang="ts">
  import HeaderButtons from './HeaderButtons.svelte';
</script>

<template>
  <div class="header-wrapper">
    <h1 class="named"><span class="blue">Theta</span><span class="pink">Hacks</span></h1>
    <h2 class="lose">
      Lose yourself in creativity.
    </h2>

    <HeaderButtons discord_background="#B8D3D1" />
  </div>
</template>

<style lang="sass">
  h1, h2, h3, h4, h5, p, span
    font-family: 'Raleway', sans-serif
    color: white

  .header-wrapper
    text-align: center

    .named
      font-weight: 9000
      font-size: 11vh

      .blue
        color: #B8D3D1

      .pink
        color: #CE7B91

    .lose
      margin-top: -5vh
      font-size: 4vh
</style>

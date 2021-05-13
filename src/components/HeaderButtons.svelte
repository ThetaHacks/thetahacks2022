<script lang="ts">
	export let discord_background;
</script>

<template>
  <div class="button-wrapper">
    <a href="https://discord.gg/xNaUAPUuFP" target="_blank">
      <button style="background-color: {discord_background}" class="discord">Join the discord</button>
    </a>
  </div>
</template>

<style lang="sass">
  button:hover
    cursor: pointer

  .button-wrapper
    margin-top: 20vh

  button
    border: none
    border-radius: 10px
    padding: 2vh
    font-size: 2vh

    font-weight: bold
</style>

<template>
  <header class="mx-80 my-7">
    <div class="flex items-center justify-between">
      <a class="flex text-lg items-center" href="/">
        <terminal-icon />
        Brock Herion
      </a>
      <NavLinks />
    </div>
  </header>
</template>
<script lang="ts">
import {
  TerminalIcon,
} from 'vue-feather-icons';

export default {
  components: {
    TerminalIcon,
  }
}
</script>

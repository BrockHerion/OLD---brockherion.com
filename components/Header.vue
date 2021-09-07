<template>
  <header class="px-80 xl:px-60 py-7 mb-7">
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
import Vue from 'vue'
import {
  TerminalIcon,
} from 'vue-feather-icons';

export default Vue.extend({
  components: {
    TerminalIcon,
  }
});
</script>

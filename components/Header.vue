<template>
  <header class="bg-blue-50">
    <div class="2xl:px-96 xl:px-60 lg:px-36 md:px-16 px-4 py-7 flex items-center justify-between">
      <a class="flex text-lg items-center" href="/">
        <terminal-icon />
        Brock Herion
      </a>
      <NavLinks class="hidden md:flex" />
      <MobileNavLinks class="flex md:hidden" />
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

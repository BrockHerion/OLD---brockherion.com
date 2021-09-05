<template>
  <header class="mx-80 my-7">
    <div class="flex items-center justify-between">
      <a class="flex text-lg items-center" href="/">
        <terminal-icon />
        Brock Herion
      </a>
      <ul class="flex items-center">
        <li class="mr-6">
          <a href="/articles">Articles</a>
        </li>
        <li class="mr-6">
          <a href="/about">About</a>
        </li>
        <li class="mr-6">
          <a href="/tech">Tech</a>
        </li>
        <li class="mr-6">
          <a href="/newsletter">Newsletter</a>
        </li>
      </ul>
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


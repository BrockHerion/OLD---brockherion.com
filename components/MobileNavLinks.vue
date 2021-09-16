<template>
  <div>
    <button>
      <menu-icon />
    </button>
    <nav>
      <ul>

      </ul>
    </nav>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import {
  MenuIcon
} from 'vue-feather-icons';

export default Vue.extend({
  components: {
    MenuIcon
  }
})
</script>

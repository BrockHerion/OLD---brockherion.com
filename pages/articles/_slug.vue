<template>
  <article>
    <h1>{{ page.title }}</h1>
    <nuxt-content :document='page' />
  </article>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  async asyncData({ $content, params, error }) {
    const slug = params.slug || 'index';
    const page = await $content('articles', slug)
      .fetch()
      .catch(_ => {
        error({ statusCode: 404, message: 'Page not found' });
      });

    return {
      page
    };
  }
});
</script>

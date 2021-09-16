<template>
  <article class="2xl:px-96 xl:px-60 lg:px-36 md:px-16 px-4 flex flex-col">
    <h1 class="text-5xl mb-4 font-bold text-center">{{ page.title }}</h1>
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

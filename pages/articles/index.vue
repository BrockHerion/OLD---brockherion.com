<template>
  <div class="2xl:px-96 xl:px-60 lg:px-36 md:px-16 px-4 py-7">
    <h1 class="text-5xl mb-4 font-bold text-center md:text-left">Articles 📰</h1>
    <ul>
      <li v-for="article in articles" :key="article.slug">
        <h1>{{ article.title }}</h1>
        <NuxtLink to="/articles" >{{article.description}}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  async asyncData({ $content, error }) {
    const articles = await $content('articles')
      .where({ category: 'Test' })
      .fetch()
      .catch(_ => {
        error({ statusCode: 201, message: 'No articles were found' })
      });

    return {
      articles
    };
  }
})
</script>
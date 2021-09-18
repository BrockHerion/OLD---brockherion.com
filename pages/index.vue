<template>
  <div>
    <section class="2xl:px-96 xl:px-80 lg:px-36 md:px-16 px-4 md:grid md:grid-cols-2 flex flex-col-reverse items-center py-7 bg-blue-50">
      <div class="flex flex-col">
        <h1 class="text-5xl mb-4 font-bold text-center md:text-left">
          Hi there,<br/>
          I'm Brock 👋</h1>
        <h2 class="text-2xl mb-3">
          I'm a full-stack software developer and content creator from Chicago.
        </h2>
        <h3 class="text-lg mb-3 font-body">
          On this site, you'll find content relating to the software development, along with other areas of a developers life, like health
          and productivity.
        </h3>
        <h3 class="text-lg mb-4 font-body">
          In The Weekly Retrospective, my weekly newsletter, we reflect on
          the week and share other helpful and interesting
          content. Enter your email below and join a friendly,
          growing community of readers!
        </h3>
        <form class="flex justify-start items center">
          <input class="py-2 px-3 mr-1 rounded-md border border-gray-300" type="email" placeholder="Email address" />
          <button class="bg-blue-500 text-white py-2 px-3 rounded-md" type="submit">Subscribe</button>
        </form>
      </div>
      <div class="flex justify-center">
        <div class="h-64 w-64 rounded-full bg-gray-800 flex items-center justify-center">
          <img class="rounded-full" src="~/assets/images/hero-photo.jpeg" width="240" height="240" />
        </div>
      </div>
    </section>
    <section class="2xl:px-96 xl:px-80 lg:px-36 md:px-16 px-4 bg-gray-50 flex flex-col items-center md:items-start">
      <div>
        <h2 class="text-2xl my-3">Check out these recent articles 📰</h2>
      </div>
    </section>
    <section class="2xl:px-96 xl:px-80 lg:px-36 md:px-16 px-4">
      <div class="md:grid md:grid-cols-2">
        <div>
          <h3 class="text-xl my-3">Popular Catagories</h3>
        </div>
        <div>
          <h3 class="text-xl my-3">Recent Book Notes</h3>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
<style scoped>
.font-body {
  font-family: var(--font-body);
}
</style>

<template>
  <div>
    <section class="2xl:px-80 xl:px-60 lg:px-36 md:px-16 px-4 md:grid md:grid-cols-2 flex flex-col-reverse items-center mb-7">
      <div>
        <h1 class="text-5xl mb-4 font-bold text-center md:text-left">Hi there &#128075;</h1>
        <h2 class="text-2xl mb-3">
          I'm Brock, a full-stack software developer and content creator from Chicago.
        </h2>
        <h3 class="text-lg mb-3">
          On this site, you'll find content relating to the software development, along with other areas of a developers life, like health
          and productivity.
        </h3>
        <h3 class="text-lg mb-4">
          In The Weekly Retrospective, my weekly newsletter, we reflect on
          the week and share other helpful and interesting
          content. Enter your email below and join a friendly,
          growing community of readers!
        </h3>
        <div class="flex justify-center">
          <form>
            <input class="py-2 px-3 mr-1 rounded-md" type="email" placeholder="Email address" />
            <button class="bg-blue-500 text-white py-2 px-3 rounded-md" type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="h-64 w-64 rounded-full bg-gray-800 flex items-center justify-center">
          <img class="rounded-full" src="~/assets/images/hero-photo.jpeg" width="240" height="240" />
        </div>
      </div>
    </section>
    <section class="2xl:px-80 xl:px-60 lg:px-36 md:px-16 px-4 bg-gray-300 flex flex-col items-center md:items-start mb-7">
      <div>
        <h2 class="text-2xl my-3">Check out these recent articles</h2>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

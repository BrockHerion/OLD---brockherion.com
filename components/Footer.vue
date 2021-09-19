<template>
  <footer>
    <section class="2xl:px-96 xl:px-80 lg:px-36 px-4 pt-4 pb-8 bg-blue-50">
      <h3 class="text-lg mb-2">The Weekly Retrospective 📨</h3>
      <div class="md:grid md:grid-cols-2">
        <p class="text-md mb-4">
          The Weekly Retrospective is a newsletter that relfects on the previous week.
          In it, we look at what went well, what could have gone better, and what we
          can learn from it. I also share any interesting content I found during the week, including
          things like Twitter Threads, other blog posts, and videos. Sign up to join
          a growing community of friendly readers!
        </p>
        <form class="flex flex-col pl-6">
          <input id="footerNewsletter" class="py-2 px-3 mb-2 mr-1 rounded-md border border-gray-200" type="email" placeholder="Email address" />
          <button class="bg-blue-500 text-white py-2 px-3 rounded-md" type="submit">Subscribe</button>
        </form>
      </div>
    </section>
    <section class="2xl:px-96 xl:px-80 lg:px-36 md:px-16 px-4 py-4 bg-gray-800 flex flex-col-reverse md:flex-row items-center md:justify-between">
      <div class="text-gray-50">
        <small>&copy; Brock Herion 2021.</small>
      </div>
      <FooterSocialIcons />
    </section>
  </footer>
</template>

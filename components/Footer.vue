<template>
  <footer>
    <section class="2xl:px-80 xl:px-60 lg:px-36 px-4 py-4 bg-gray-300 md:grid md:grid-cols-2">
      <div>
        <h3 class="text-lg">The Weekly Retrospective</h3>
      </div>
      <form class="flex flex-col">
        <label for="footerNewsletter">Your email</label>
        <input id="footerNewsletter" class="py-2 px-3 mr-1 rounded-md" type="email" />
      </form>
    </section>
    <section class="2xl:px-80 xl:px-60 lg:px-36 md:px-16 px-4 py-4 bg-gray-800 flex flex-col-reverse md:flex-row items-center md:justify-between">
      <div class="text-gray-50">
        <small>&copy; Brock Herion 2021.</small>
      </div>
      <FooterIcons />
    </section>
  </footer>
</template>

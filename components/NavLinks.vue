<template>
  <ul class="flex items-center">
    <li class="mr-6 link">
      <NuxtLink to="/articles">Articles</NuxtLink>
    </li>
    <li class="mr-6 link">
      <NuxtLink to="/about">About</NuxtLink>
    </li>
    <li class="mr-6 link">
      <NuxtLink to="/books">Book Notes</NuxtLink>
    </li>
    <li class="mr-6 link">
      <NuxtLink to="/tech">Tech</NuxtLink>
    </li>
    <li class="link">
      <NuxtLink to="/newsletter">Newsletter</NuxtLink>
    </li>
  </ul>
</template>
<style scoped>
.link:hover {
  text-decoration: underline;
}
</style>

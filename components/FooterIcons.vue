<template>
  <ul class="flex items-center">
    <li class="mr-2">
      <a href="https://twitter.com/BrockHerion" target="blank">
        <twitter-icon fill="#fff" stroke="#1f2937" />
      </a>
    </li>
    <li class="mr-2">
      <a href="https://twitch.tv/brockherion" target="blank">
        <twitch-icon fill="#fff" stroke="#1f2937" />
      </a>
    </li>
    <li class="mr-2">
      <a href="https://github.com/brockherion" target="blank">
        <github-icon fill="#fff" stroke="#1f2937" />
      </a>
    </li>
    <li class="mr-2">
      <a href="https://www.linkedin.com/in/brock-j-herion-34279a176/" target="blank">
        <linkedin-icon fill="#fff" stroke="#1f2937" />
      </a>
    </li>
    <li class="mr-2">
      <a href="https://www.instagram.com/brock_herion/" target="blank">
        <instagram-icon fill="#fff" stroke="#1f2937" />
      </a>
    </li>
    <li>
      <a href="https://www.facebook.com/Brock-Herion-197864878943988" target="blank">
        <facebook-icon fill="#fff" stroke="#1f2937" />
      </a>
    </li>
  </ul>
</template>
<script lang="ts">
import {
  FacebookIcon,
  InstagramIcon,
  TwitchIcon,
  TwitterIcon,
  GithubIcon,
  LinkedinIcon
} from 'vue-feather-icons';

export default {
  components: {
    FacebookIcon,
    InstagramIcon,
    TwitchIcon,
    TwitterIcon,
    GithubIcon,
    LinkedinIcon
  }
}
</script>
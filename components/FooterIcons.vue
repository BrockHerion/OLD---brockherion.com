<template>
  <ul class="flex items-center">
    <li>
      <a>
        <twitter-icon fill="#fff" stroke="#1f2937" />
      </a>
    </li>
    <li>
      <a>
        <twitch-icon fill="#fff" stroke="#1f2937" />
      </a>
    </li>
    <li>
      <a>
        <github-icon fill="#fff" stroke="#1f2937" />
      </a>
    </li>
    <li>
      <a>
        <instagram-icon fill="#fff" stroke="#1f2937" />
      </a>
    </li>
    <li>
      <a>
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
  GithubIcon
} from 'vue-feather-icons';

export default {
  components: {
    FacebookIcon,
    InstagramIcon,
    TwitchIcon,
    TwitterIcon,
    GithubIcon
  }
}
</script>
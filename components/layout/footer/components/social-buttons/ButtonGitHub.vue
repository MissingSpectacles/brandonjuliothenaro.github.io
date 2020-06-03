<template>
  <ButtonSocialBase
    :icon="mdiGithub"
    href="https://github.com/brandon-julio-t"
    label="GitHub"
  />
</template>

<script>
import { mdiGithub } from '@mdi/js'

import ButtonSocialBase from '~/components/layout/footer/components/social-buttons/ButtonSocialBase'

export default {
  name: 'ButtonGitHub',

  components: { ButtonSocialBase },

  data() {
    return {
      mdiGithub
    }
  }
}
</script>

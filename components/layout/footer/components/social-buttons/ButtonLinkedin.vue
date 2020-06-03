<template>
  <ButtonSocialBase
    :icon="mdiLinkedin"
    href="https://www.linkedin.com/in/brandonjuliothenaro"
    label="LinkedIn"
  />
</template>

<script>
import { mdiLinkedin } from '@mdi/js'

import ButtonSocialBase from '~/components/layout/footer/components/social-buttons/ButtonSocialBase'

export default {
  name: 'ButtonLinkedin',

  components: { ButtonSocialBase },

  data() {
    return { mdiLinkedin }
  }
}
</script>

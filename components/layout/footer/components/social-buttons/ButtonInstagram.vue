<template>
  <ButtonSocialBase
    :icon="mdiInstagram"
    href="https://www.instagram.com/brandon.julio.t"
    label="Instagram"
  />
</template>

<script>
import { mdiInstagram } from '@mdi/js'

import ButtonSocialBase from '~/components/layout/footer/components/social-buttons/ButtonSocialBase'

export default {
  name: 'ButtonInstagram',

  components: { ButtonSocialBase },

  data() {
    return {
      mdiInstagram
    }
  }
}
</script>

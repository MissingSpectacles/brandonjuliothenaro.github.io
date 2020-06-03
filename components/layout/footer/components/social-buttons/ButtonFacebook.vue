<template>
  <ButtonSocialBase
    :icon="mdiFacebook"
    href="https://www.facebook.com/profile.php?id=100008724798107"
    label="Facebook"
  />
</template>

<script>
import { mdiFacebook } from '@mdi/js'

import ButtonSocialBase from '~/components/layout/footer/components/social-buttons/ButtonSocialBase'

export default {
  name: 'ButtonFacebook',

  components: { ButtonSocialBase },

  data() {
    return {
      mdiFacebook
    }
  }
}
</script>

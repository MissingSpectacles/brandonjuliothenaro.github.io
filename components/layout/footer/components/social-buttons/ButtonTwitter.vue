<template>
  <ButtonSocialBase
    :icon="mdiTwitter"
    href="https://twitter.com/brandon_julio_t"
    label="Twitter"
  />
</template>

<script>
import { mdiTwitter } from '@mdi/js'

import ButtonSocialBase from '~/components/layout/footer/components/social-buttons/ButtonSocialBase'

export default {
  name: 'ButtonTwitter',

  components: { ButtonSocialBase },

  data() {
    return { mdiTwitter }
  }
}
</script>

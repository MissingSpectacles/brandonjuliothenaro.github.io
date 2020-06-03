<template>
  <ButtonSocialBase
    :icon="mdiEmail"
    href="mailto:brandon.julio.t@icloud.com"
    label="Email me"
  />
</template>

<script>
import { mdiEmail } from '@mdi/js'

import ButtonSocialBase from '~/components/layout/footer/components/social-buttons/ButtonSocialBase'

export default {
  name: 'ButtonEmail',

  components: { ButtonSocialBase },

  data() {
    return { mdiEmail }
  }
}
</script>

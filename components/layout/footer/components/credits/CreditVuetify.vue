<template>
  <div>
    Designed with
    <app-button-external-link href="https://vuetifyjs.com/en/">
      <v-icon left>mdi-vuetify</v-icon>
      Vuetify
    </app-button-external-link>
  </div>
</template>

<script>
import AppButtonExternalLink from '~/components/common/AppButtonExternalLink'

export default {
  name: 'CreditVuetify',

  components: { AppButtonExternalLink }
}
</script>

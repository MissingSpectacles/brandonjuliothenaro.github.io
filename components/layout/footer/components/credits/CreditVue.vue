<template>
  <div>
    Powered by
    <app-button-external-link href="https://vuejs.org/">
      <v-icon left>mdi-vuejs</v-icon>
      Vue
    </app-button-external-link>
  </div>
</template>

<script>
import AppButtonExternalLink from '~/components/common/AppButtonExternalLink'

export default {
  name: 'CreditVue',

  components: { AppButtonExternalLink }
}
</script>

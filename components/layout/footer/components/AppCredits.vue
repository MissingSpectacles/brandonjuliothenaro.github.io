<template>
  <v-row justify="center" align="center">
    <v-col sm="auto">
      <credit-nuxt></credit-nuxt>
      <credit-vuetify></credit-vuetify>
      <credit-vue></credit-vue>
    </v-col>

    <v-col v-if="!isLoading" sm="auto">
      <credit-netlify></credit-netlify>
    </v-col>
  </v-row>
</template>

<script>
import CreditNuxt from '~/components/layout/footer/components/credits/CreditNuxt'
import CreditVuetify from '~/components/layout/footer/components/credits/CreditVuetify'
import CreditVue from '~/components/layout/footer/components/credits/CreditVue'
import CreditNetlify from '~/components/layout/footer/components/credits/CreditNetlify'

export default {
  name: 'AppCredits',

  components: { CreditNetlify, CreditVue, CreditVuetify, CreditNuxt },

  props: {
    isLoading: {
      type: Boolean,
      required: true
    }
  }
}
</script>

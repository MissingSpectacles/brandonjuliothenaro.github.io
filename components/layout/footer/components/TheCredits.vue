<template>
  <v-row justify="center" align="center">
    <v-col sm="auto">
      <CreditNuxt />
      <CreditVuetify />
      <CreditVue />
    </v-col>

    <v-col v-if="!isLoading" sm="auto">
      <CreditNetlify />
    </v-col>
  </v-row>
</template>

<script>
import CreditNuxt from '~/components/layout/footer/components/credits/CreditNuxt'
import CreditVuetify from '~/components/layout/footer/components/credits/CreditVuetify'
import CreditVue from '~/components/layout/footer/components/credits/CreditVue'
import CreditNetlify from '~/components/layout/footer/components/credits/CreditNetlify'

export default {
  name: 'TheCredits',

  components: { CreditNetlify, CreditVue, CreditVuetify, CreditNuxt },

  props: {
    isLoading: {
      type: Boolean,
      required: true
    }
  }
}
</script>

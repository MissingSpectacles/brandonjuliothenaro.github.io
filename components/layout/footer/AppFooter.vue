<template>
  <v-footer absolute app padless>
    <v-row justify="center">
      <v-col class="text-center">
        <app-social-buttons></app-social-buttons>

        <v-divider class="my-5"></v-divider>

        <app-credits :is-loading="isLoading"></app-credits>

        <v-divider class="my-5"></v-divider>

        <p>
          Copyright &copy; {{ new Date().getFullYear() }} Brandon Julio Thenaro.
          All rights reserved.
        </p>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import AppSocialButtons from '~/components/layout/footer/components/AppSocialButtons'
import AppCredits from '~/components/layout/footer/components/AppCredits'

export default {
  name: 'AppFooter',

  components: { AppCredits, AppSocialButtons },

  props: {
    isLoading: {
      type: Boolean,
      required: true
    }
  }
}
</script>

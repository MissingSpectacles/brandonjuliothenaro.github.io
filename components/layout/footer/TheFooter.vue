<template>
  <v-footer padless>
    <v-row justify="center">
      <v-col class="text-center">
        <AppSocialButtons />

        <v-divider class="my-5"></v-divider>

        <AppCredits :is-loading="isLoading" />

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
import AppSocialButtons from '~/components/layout/footer/components/TheSocialButtons'
import AppCredits from '~/components/layout/footer/components/TheCredits'

export default {
  name: 'TheFooter',

  components: { AppCredits, AppSocialButtons },

  props: {
    isLoading: {
      type: Boolean,
      required: true
    }
  }
}
</script>

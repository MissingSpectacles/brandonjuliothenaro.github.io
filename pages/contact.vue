<template>
  <v-container>
    <v-row justify="center">
      <v-col lg="8" sm="10">
        <v-form
          :novalidate="false"
          data-netlify="true"
          method="POST"
          name="Contact"
          netlify-honeypot="bot-field"
        >
          <input name="form-name" type="hidden" value="Contact" />

          <div v-show="false">
            <label>
              Don’t fill this out if you're human:
              <input name="bot-field" />
            </label>
          </div>

          <v-text-field
            autocomplete="name"
            autofocus
            clearable
            label="Name (Optional)"
            name="name"
          ></v-text-field>

          <v-textarea label="Message" name="message" required></v-textarea>

          <v-btn block type="submit">Submit</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  mounted() {
    this.$store.commit('setPageTitle', 'Contact')
  },

  head() {
    return {
      title: 'Contact'
    }
  }
}
</script>

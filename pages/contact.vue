<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-center">Contact</h1>
      </v-col>
    </v-row>

    <v-divider class="my-5"></v-divider>

    <v-row justify="center">
      <v-col lg="8" sm="10">
        <v-form
          :netlify="true"
          :novalidate="false"
          data-netlify="true"
          method="POST"
          name="Contact"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="Contact" />

          <div v-show="false">
            <label>
              Don’t fill this out if you're human:
              <input name="bot-field" />
            </label>
          </div>

          <v-text-field
            autofocus
            autocomplete="name"
            clearable
            label="Name (Optional)"
          ></v-text-field>

          <v-textarea label="Message" required></v-textarea>

          <v-btn block type="submit">Submit</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      title: 'Contact'
    }
  }
}
</script>

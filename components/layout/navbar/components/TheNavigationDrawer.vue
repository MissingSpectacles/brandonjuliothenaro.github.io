<!--
  https://vuejs.org/v2/guide/components-custom-events.html#sync-Modifier
-->

<template>
  <v-navigation-drawer
    :value="openDrawer"
    absolute
    app
    temporary
    @input="$emit('update:open-drawer', $event)"
  >
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Navigation</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list nav>
      <v-list-item
        v-for="(page, index) in allPages"
        :key="index"
        :to="page.to"
        exact
      >
        <v-list-item-action>
          <v-icon>{{ page.icon }}</v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>{{ page.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'TheAppNavigationDrawer',

  props: {
    openDrawer: {
      type: Boolean,
      required: true
    }
  },

  computed: {
    allPages() {
      return this.$store.state.allPages
    }
  }
}
</script>

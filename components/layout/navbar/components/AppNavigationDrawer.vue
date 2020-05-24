<template>
  <v-navigation-drawer
    app
    :value="openDrawer"
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
        v-for="(page, index) in pages"
        :key="index"
        :to="page.to"
        exact
      >
        <v-list-item-action>
          <v-icon>{{ page.icon }}</v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title v-text="page.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'AppNavigationDrawer',

  props: {
    openDrawer: {
      type: Boolean,
      required: true
    },

    pages: {
      type: Array,
      required: true
    }
  }
}
</script>

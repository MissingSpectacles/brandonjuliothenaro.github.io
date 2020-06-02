<template>
  <v-col>
    <h2>Frameworks</h2>

    <v-list v-for="(category, categoryIdx) in frameworks" :key="categoryIdx">
      <v-subheader>
        <h3>{{ category.name }}</h3>
      </v-subheader>

      <v-divider></v-divider>

      <v-list-item v-for="(item, itemIdx) in category.items" :key="itemIdx">
        <v-list-item-content>{{ item }}</v-list-item-content>
      </v-list-item>
    </v-list>
  </v-col>
</template>

<script>
export default {
  name: 'SkillsFrameworks',

  data() {
    return {
      frameworks: [
        { name: 'Front-end', items: ['Bootstrap', 'Vue', 'Vuetify', 'Nuxt'] },
        { name: 'Back-end', items: ['Express', 'Laravel'] }
      ]
    }
  }
}
</script>

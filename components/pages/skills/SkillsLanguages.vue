<template>
  <v-col>
    <h2>Languages</h2>

    <v-list v-for="(category, categoryIdx) in languages" :key="categoryIdx">
      <v-subheader>
        <h3>{{ category.name }}</h3>
      </v-subheader>

      <v-divider></v-divider>

      <v-list-item v-for="(item, itemIdx) in category.items" :key="itemIdx">
        <v-list-item-content>
          {{ item }}
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-col>
</template>

<script>
export default {
  name: 'SkillsLanguages',

  data() {
    return {
      languages: [
        { name: 'Programming', items: ['C/C++', 'Java', 'JavaScript'] },
        { name: 'Spoken', items: ['Indonesia', 'English'] },
        { name: 'Others', items: ['HTML', 'Markdown', 'SQL'] }
      ]
    }
  }
}
</script>

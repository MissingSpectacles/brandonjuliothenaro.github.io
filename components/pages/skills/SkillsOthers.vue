<template>
  <v-col>
    <h2>Others</h2>

    <v-list v-for="(category, categoryIdx) in others" :key="categoryIdx">
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
  name: 'SkillsOthers',

  data() {
    return {
      others: [
        { name: 'Cloud', items: ['Firebase', 'Heroku'] },
        { name: 'IDE', items: ['JetBrain IDEs', 'Visual Studio Code'] },
        { name: 'Productivity', items: ['Adobe Xd', 'Microsoft Office 365'] },
        { name: 'Collaboration', items: ['Basecamp', 'Microsoft Teams'] }
      ]
    }
  }
}
</script>

<template>
  <v-col>
    <h2 class="display-1">Databases</h2>

    <v-list>
      <v-list-item
        v-for="(database, databaseIdx) in databases"
        :key="databaseIdx"
      >
        <v-list-item-content>{{ database }}</v-list-item-content>
      </v-list-item>
    </v-list>
  </v-col>
</template>

<script>
export default {
  name: 'SkillsDatabases',

  data() {
    return {
      databases: ['FaunaDB', 'MySQL', 'PostgreSQL', 'SQL Server', 'SQLite']
    }
  }
}
</script>

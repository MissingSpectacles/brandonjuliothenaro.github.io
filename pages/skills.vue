<template>
  <v-container>
    <v-row>
      <SkillsLanguages />
      <SkillsFrameworks />
      <SkillsDatabases />
      <SkillsOthers />
    </v-row>
  </v-container>
</template>

<script>
import SkillsLanguages from '~/components/pages/skills/SkillsLanguages'
import SkillsFrameworks from '~/components/pages/skills/SkillsFrameworks'
import SkillsDatabases from '~/components/pages/skills/SkillsDatabases'
import SkillsOthers from '~/components/pages/skills/SkillsOthers'

export default {
  components: {
    SkillsOthers,
    SkillsDatabases,
    SkillsFrameworks,
    SkillsLanguages
  },

  mounted() {
    this.$store.commit('setCurrentPageTitle', 'Technical Skills')
  },

  head() {
    return {
      title: 'Skills'
    }
  }
}
</script>

<template>
  <v-container>
    <IndexTechnicalSkillsOverview />

    <keep-alive>
      <IndexPinnedGitHubProjects />
    </keep-alive>
  </v-container>
</template>

<script>
import IndexTechnicalSkillsOverview from '~/components/pages/index/IndexTechnicalSkillsOverview'
import IndexPinnedGitHubProjects from '~/components/pages/index/IndexPinnedGitHubProjects'

export default {
  components: {
    IndexPinnedGitHubProjects,
    IndexTechnicalSkillsOverview
  },

  head() {
    return { title: 'Home' }
  }
}
</script>

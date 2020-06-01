<template>
  <v-container>
    <v-subheader class="d-flex justify-center text-center">
      Lifelong Learner | Web Developer
      <br />
      Since 2019
    </v-subheader>

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

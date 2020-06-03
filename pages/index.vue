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

    <IndexCertificates />
  </v-container>
</template>

<script>
import IndexPinnedGitHubProjects from '~/components/pages/index/IndexPinnedGitHubProjects'
import IndexTechnicalSkillsOverview from '~/components/pages/index/IndexTechnicalSkillsOverview'
import IndexCertificates from '~/components/pages/index/IndexCertificates'

export default {
  components: {
    IndexCertificates,
    IndexPinnedGitHubProjects,
    IndexTechnicalSkillsOverview
  },

  head() {
    return { title: 'Home' }
  }
}
</script>

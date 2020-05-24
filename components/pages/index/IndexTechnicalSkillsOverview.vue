<template>
  <v-row justify="center">
    <v-col>
      <h2>Technical Skills Overview</h2>

      <v-row>
        <v-col
          v-for="(category, categoryIdx) in developerSkills"
          :key="categoryIdx"
        >
          <app-card-raisable>
            <v-list>
              <v-subheader>
                <h3>{{ category.title }}</h3>
              </v-subheader>

              <v-list-item
                v-for="(item, itemIdx) in category.items"
                :key="itemIdx"
              >
                <v-list-item-icon>
                  <v-icon>
                    {{ item.icon }}
                  </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.label }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </app-card-raisable>
        </v-col>
      </v-row>

      <v-btn block nuxt to="skills">
        <v-icon left>mdi-magnify</v-icon>
        View More
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import AppCardRaisable from '~/components/common/AppCardRaisable'

export default {
  name: 'IndexTechnicalSkillsOverview',

  components: { AppCardRaisable },

  data() {
    return {
      developerSkills: [
        {
          title: 'Programming Languages',
          items: [
            { label: 'Java', icon: 'mdi-language-java' },
            { label: 'JavaScript', icon: 'mdi-language-javascript' },
            { label: 'SQL', icon: 'mdi-database' }
          ]
        },
        {
          title: 'Frameworks',
          items: [
            { label: 'Laravel', icon: 'mdi-laravel' },
            { label: 'React', icon: 'mdi-react' },
            { label: 'Vue', icon: 'mdi-vuejs' }
          ]
        }
      ]
    }
  }
}
</script>

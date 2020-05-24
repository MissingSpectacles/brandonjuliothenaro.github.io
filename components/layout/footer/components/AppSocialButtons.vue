<template>
  <div>
    <button-github></button-github>
    <button-twitter></button-twitter>
    <button-facebook></button-facebook>
    <button-instagram></button-instagram>
    <button-linkedin></button-linkedin>

    <br />

    <button-freecodecamp></button-freecodecamp>
  </div>
</template>

<script>
import ButtonFacebook from '~/components/layout/footer/components/social-buttons/ButtonFacebook'
import ButtonGithub from '~/components/layout/footer/components/social-buttons/ButtonGitHub'
import ButtonInstagram from '~/components/layout/footer/components/social-buttons/ButtonInstagram'
import ButtonLinkedin from '~/components/layout/footer/components/social-buttons/ButtonLinkedin'
import ButtonTwitter from '~/components/layout/footer/components/social-buttons/ButtonTwitter'
import ButtonFreecodecamp from '~/components/layout/footer/components/social-buttons/ButtonFreecodecamp'

export default {
  name: 'AppSocialButtons',
  components: {
    ButtonFreecodecamp,
    ButtonFacebook,
    ButtonGithub,
    ButtonInstagram,
    ButtonLinkedin,
    ButtonTwitter
  }
}
</script>

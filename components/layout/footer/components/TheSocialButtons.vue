<template>
  <span>
    <ButtonEmail />
    <ButtonFacebook />
    <ButtonFreecodecamp />
    <ButtonGitHub />
    <ButtonInstagram />
    <ButtonLinkedin />
    <ButtonTwitter />
  </span>
</template>

<script>
import ButtonEmail from '~/components/layout/footer/components/social-buttons/ButtonEmail'
import ButtonFacebook from '~/components/layout/footer/components/social-buttons/ButtonFacebook'
import ButtonFreecodecamp from '~/components/layout/footer/components/social-buttons/ButtonFreecodecamp'
import ButtonGitHub from '~/components/layout/footer/components/social-buttons/ButtonGitHub'
import ButtonInstagram from '~/components/layout/footer/components/social-buttons/ButtonInstagram'
import ButtonLinkedin from '~/components/layout/footer/components/social-buttons/ButtonLinkedin'
import ButtonTwitter from '~/components/layout/footer/components/social-buttons/ButtonTwitter'

export default {
  name: 'TheSocialButtons',

  components: {
    ButtonEmail,
    ButtonFacebook,
    ButtonFreecodecamp,
    ButtonGitHub,
    ButtonInstagram,
    ButtonLinkedin,
    ButtonTwitter
  }
}
</script>

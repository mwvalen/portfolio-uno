<template>
  <v-container fluid fill-height row wrap>
    <v-layout justify-center row wrap>
      <v-flex xs12 text-xs-center mt-5>
        <Bio>
          {{ bio }}
        </Bio>
      </v-flex>
      <v-flex xs12 text-xs-center row pb-3>
        <v-icon x-large>fas fa-grin-beam</v-icon>
      </v-flex>
    <v-flex xs12>
      <Skills />
    </v-flex>
    <v-flex xs12 mt-5 pt-5>
      <ContactForm />
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Bio from '../components/Bio'
  import Skills from '../components/Skills'
  import ContactForm from '../components/ContactForm'

  export default {
    components: {
      Skills,
      Bio,
      ContactForm
    },
    computed: {
      bio: function() {
        return this.$store.state.bio
      }
    }
  }
</script>

<template>
  <v-container fluid fill-height row wrap>
    <v-layout justify-center row wrap>
      <v-flex xs12 text-xs-center mt-5>
        <p class="headline font-weight-thin">{{ bio }}</p>
      </v-flex>
      <v-flex xs12 text-xs-center row pb-3>
        <v-icon x-large>fas fa-grin-beam</v-icon>
      </v-flex>
    <v-flex xs12>
      <Skills />
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Skills from '../components/Skills'

  export default {
    components: {
      Skills
    },
    computed: {
      bio: function() {
        return this.$store.state.bio
      }
    }
  }
</script>

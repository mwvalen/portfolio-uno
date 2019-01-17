<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>{{name.first}}</span>
        <span class="font-weight-light">{{name.last}}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        :href="linkedin"
        target="_blank"
      >
        <span class="mr-2">LinkedIn</span>
        <v-icon>fas fa-external-link-alt</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      //
    }
  },
  computed: {
    name: function() {
      return {
        first: this.$store.state.name.first,
        last: this.$store.state.name.last
      }
    },
    linkedin: function() {
      return this.$store.state.linkedin
    }
  }
}
</script>

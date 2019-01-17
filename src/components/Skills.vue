<template>
    <v-layout 
        justify-center
        row
        wrap    
    >
        <v-flex xs12 sm10 md8>
            <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                    <v-toolbar-title>Skills</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <Skill v-for="(skill, i) in skills"
                            :name="skill.name" 
                            :key="i"
                            :rating="skill.rating"
                    ></Skill>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import Skill from './Skill.vue'

    export default {
        data: () => ({
            
        }),
        computed: {
            skills: function() { 
                return this.$store.getters.orderedSkills
            }
        },
        components: {
            Skill
        }
    }
</script>

<style scoped>
</style>
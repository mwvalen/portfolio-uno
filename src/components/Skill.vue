<template>
    <div>
        <h2 class="subheading font-weight-bold">{{name}}</h2>
        <v-progress-linear
            color="primary"
            height="15"
            :value="rating * 10"
        >
        </v-progress-linear>
    </div>
</template>

<script>
    export default {
        data: () => ({

        }),
        props: {
            name: String,
            rating: {
                type: Number,
                default: 0
            }
        }
    }
</script>

<style scoped>
</style>
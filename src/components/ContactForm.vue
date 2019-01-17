<template>
    <v-layout
        justify-center
        row
        wrap
    >
        <v-flex xs12 sm10 md8>
            <p class="display-1 font-weight-thin">Contact</p>
            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
            >
                <v-text-field
                    label="Email"
                    height=36
                    box
                    class="font-weight-thin"
                    v-model="email"
                    :rules="emailRules"
                ></v-text-field>
                <v-textarea
                    height="199"
                    box
                    class="font-weight-thin mx-0 my-0 py-0 px-0"
                    label="Message"
                    v-model="message"
                    :rules="messageRules"
                >
                </v-textarea>
                <v-btn
                    color="primary"
                    class="full-width"
                    block
                    @click="validate"
                    :disabled="hasSent"
                >
                    {{buttonText}}
                </v-btn>
            </v-form>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    data: () => ({
        valid: true,
        email: '',
        message: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid' 
        ],
        messageRules: [
            v => !!v || 'Message is required'
        ],
        hasSent: false
    }),
    methods: {
        validate () {
            if (this.$refs.form.validate()) {
                this.hasSent = true
            }
        }
    },
    computed: {
        buttonText() {
            return (this.hasSent ? 'Message sent! Thank you' : 'Send')
        }
    }
}
</script>

<style>

</style>

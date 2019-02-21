<template>
    <div>
        <p>Counter is: {{ tripleCounter }}</p>
        <p> {{ stringCounter }} </p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
    export default {
        // computed: {
        //     counter(){
        //         return this.$store.getters.tripleCounter;
        //     }
        // },

        // computed: mapGetters(
        //     [
        //         'tripleCounter', 'stringCounter'
        //     ]
        // )

        computed: {
            ...mapGetters(
            [
                'tripleCounter', 'stringCounter'
            ]
        )
        }
    }
</script>
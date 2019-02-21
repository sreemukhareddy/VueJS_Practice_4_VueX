<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by: 500, duration: 1500})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 400, duration: 1500})">Decrement</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

    export default {
        // methods: {
        //     ...mapMutations([
        //             'increment', 'decrement'
        //     ])
        // }

        methods: {
            ...mapMutations([
                    'asyncIncrement', 'asyncDecrement'
            ])
        }
    }
</script>
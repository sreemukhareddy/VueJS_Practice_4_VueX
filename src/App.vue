<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <hr>
                <app-another-result></app-another-result>
                <hr>
                <app-action-counter></app-action-counter>
                <hr>
                <app-counter></app-counter>

                <hr>
                <input type="text" :value="value" @input="enteredInput">
                <hr>
                <p>{{ value }} </p>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';
    import AnotherResult from './components/AnotherResult.vue';
    import AnotherCounter from './components/AnotherCounter.vue';
    import ActionCounter from './components/ActionCounter.vue';

    export default {
        components: {
            appCounter: Counter,
            appResult: Result,
            appAnotherResult: AnotherResult,
//            appAnotherCounter: AnotherCounter
            appActionCounter: ActionCounter
        },

        computed: {
            value(){
                return this.$store.getters.value;
            }
        },

        methods: {
              enteredInput(event){
                  this.$store.dispatch('updatedValue', event.target.value);
              } 
        }
    }
</script>


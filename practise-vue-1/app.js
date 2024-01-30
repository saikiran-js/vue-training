const goal= Vue.createApp({
    data(){
        return{
            goals:[],
            enteredValue:''
        }
    },
    methods:
    {
        addGoal(){
            this.goals.push(this.enteredValue);
        },
        reset(){
            this.goals=[];
        }
    }
})
goal.mount('#app')
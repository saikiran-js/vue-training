let app = Vue.createApp({
    data(){
        return {
            enteredGoal:'',
            goals:[]
        }
    },
    methods:{
        saveGoal(){
            if(this.enteredGoal.trim() ===''){
                alert('Enter some value to submit')
            
            }else{
                this.goals.push(this.enteredGoal.trim());
                console.log(this.goals);
                this.enteredGoal='';
            }
        },
        removeGoal(id){
            this.goals.splice(id,1)
        }
    }
})

app.mount('#app')
Vue.createApp({
    data(){
        return{
        tasks:[],
        enteredvalue : '',
        displayList : true
        }
    },
    methods:{
        addTask(){
            this.tasks.push(this.enteredvalue);
        },
        removeTask(idx){
            this.tasks.splice(idx,1)
        }
    }
}).mount('#assignment')
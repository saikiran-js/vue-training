const app=Vue.createApp({
    data(){
        return {
            name:'Saikiran',
            age:28,
            cover:"https://vuejs.org/images/logo.png"
        }
    }
    ,
    methods:{
        ageAfter5(){
            return this.age+5;
        }
    }
})

app.mount('#assignment')
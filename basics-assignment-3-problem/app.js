const app=Vue.createApp({
    data(){
        return{
            sum:0,
            result:''
        }
    },
    methods:{
        add(num){
            this.sum=this.sum+num;
        }
    },
    computed:{
        showResult(){
            if(this.sum<37){
                return 'Not there yet';
            }else if(this.sum>37){
                return 'Too Much!'
            }else{
                return "37"
            }
        }
    },
    watch:{
        sum(value){
                setTimeout(()=>{
                    this.sum=0},5000)
        }
    }
});

app.mount('#assignment');
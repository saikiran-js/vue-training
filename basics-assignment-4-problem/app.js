const app=Vue.createApp({
    data(){
        return{
            p1style:'',
            togglebutton:'visible',
            enterbackgroundColor:''
        }
    },
    methods:{
        toggle(){
            if(this.togglebutton=="visible"){
                this.togglebutton="hidden"
            }else if(this.togglebutton=="hidden"){
                this.togglebutton="visible"
            }
        }
    }
});

app.mount('#assignment');
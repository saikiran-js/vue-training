const app=Vue.createApp({
    data(){
        return{
        firstName:'',
        lastName:''
        }
    },
    methods:{
        submitForm(){
            alert('Submitted ');
        },
        firstNameText(event){
            this.firstName=event.target.value;
        },
        lastNameText(event){
            this.lastName=event.target.value;
        }

    }
});

app.mount('#assignment');
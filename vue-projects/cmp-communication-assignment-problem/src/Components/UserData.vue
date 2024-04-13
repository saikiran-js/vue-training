<template>
<form @submit.prevent="submitData">
    <div>
        Name : 
        <input type="text" v-model="enteredName">
    </div>
    <div>
        Age : 
        <input type="number" v-model="enteredAge">
    </div>
    <button>Set User Data</button>
</form>
</template>

<script>
// UserData should output two input fields => for name and age
export default({
    data(){
        return{
            enteredName:"",
            enteredAge:""
        }
    },
    methods:{
        submitData(){
            this.$emit('set-data',this.enteredName,this.enteredAge)
        }
    }
    
})

</script>
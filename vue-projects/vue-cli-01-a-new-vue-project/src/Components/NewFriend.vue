<template>
    <form @submit.prevent="addFriend">
    Name: <input type="text" 
    v-model="enteredName">
    Phone: <input type="text" 
    v-model="enteredPhone">
    Email: <input type="email" 
    v-model="enteredMail">
    <button>Add Friend</button>
    </form>
</template>
<script>
export default ({
    emits : ['add-friend'],
    data(){
        return{
            enteredName:'',
            enteredPhone:'',
            enteredMail:''
        }
    }, 
    methods:{
        addFriend(){
            this.$emit('add-friend',this.enteredName,this.enteredPhone,this.enteredMail)
        }
    }
    
})

</script>
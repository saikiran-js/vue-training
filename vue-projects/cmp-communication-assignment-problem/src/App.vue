<template>
    <div>
        <user-data @set-data="setUserData"></user-data>
        <active-user  :username="activeUsers.name" :age="activeUsers.age"></active-user>
    </div>

</template>

<script>
export default({
    data(){
        return{
            activeUsers:{
                name:'Saikiran',
                age: 23
            }
        }
    },
    methods:{
        setUserData(name,age){
            this.activeUsers.name=name,
            this.activeUsers.age=age
        }
    }
})
</script>
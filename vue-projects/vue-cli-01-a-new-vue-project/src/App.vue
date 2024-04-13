<template>
    <new-friend @add-friend="addContact"></new-friend>
    <friend-contact
    v-for="friend in friends"
    :key="friend.id"
    :name="friend.name" 
    :phone-number="friend.phone"
    :email-address="friend.email"
    :isFavorite="friend.isFavorite"
    @delete="deleteContact"
    >
    </friend-contact>
</template>

<script>
export default {
    data() {
        return {
            friends: [
                {
                    id: 1,
                    name: 'Saikiran',
                    phone: '44444444',
                    email: 'qqq@localhost.com',
                    isFavorite: false
                },
                {
                    id: 2,
                    name: 'Krishna',
                    phone: '54444444',
                    email: 'qqq@localhost.com',
                    isFavorite:true
                }
            ]
        }
    },
    methods:{
        addContact(name,phone,mail){
            const newFriend={
                id: new Date().toISOString(),
                name: name,
                phone: phone,
                email: mail,
                isFavorite: false
            }
            this.friends.push(newFriend);
        },
        deleteContact(idx){
            this.friends=this.friends.filter(friend => friend.id !== idx)
        }
    }
}

</script>
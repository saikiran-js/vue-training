<template>
<ul>
    Name: {{ name }} - ( {{result? 'Favorite':'Not favorite'}} )
    <button  @click="favorite">{{isFavorite? 'Favorite':''}} details</button> 
    <button  @click="visible">{{showDetails? 'Hide':'Show'}} details</button>
    
    
    <li v-if="showDetails">
        Phone: {{ phoneNumber }}
        Email: {{ emailAddress }}
               
    </li>
    <button  @click="$emit('delete',id)">Delete</button>
</ul>
</template>

<script>
export default {
    emits:['delete'],
    props:
        ['id',
        'name',
        'phoneNumber',
        'emailAddress',
        'isFavorite'
        ],
    data(){
        return {
            showDetails:false,
            result:this.isFavorite
            }
    },
    methods:{
        visible(){
            this.showDetails=!this.showDetails;
        },
        favorite(){
            this.result=!this.result;
        }
    }
}
</script>
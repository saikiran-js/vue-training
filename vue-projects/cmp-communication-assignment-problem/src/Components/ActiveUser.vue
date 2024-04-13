<template>
    <!-- ActiveUser should output a username (h2) and age (h3) -->
    <div><h2>{{ username }}</h2></div>
    <div><h3>{{ age }}</h3></div>

</template>
<script>
export default({

props:{
    username: {
        type: String,
        required: true
    },
    age:{
        type: Number,
        required:true
    }
    }
}

)
</script>


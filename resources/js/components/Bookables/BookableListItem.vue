<template>
    <div>
        <h1>{{itemTitle}}</h1>
        <p>{{itemContent}}</p>
        <p>{{Price}}</p>
    </div>
</template>

<script>
export default {
    props: {
        itemTitle: String,
        itemContent: String,
        Price: Number
    },
    mounted(){
        console.log(this.itemTitle);
        this.itemTitle = 'yo';
    }
}
</script>
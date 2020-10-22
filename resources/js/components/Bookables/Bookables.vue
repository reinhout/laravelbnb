<template>
    <div>

       <bookable-list-item item-title="test" item-content="123" :Price="1500"></bookable-list-item>


    </div>
</template>

<script>

import BookableListItem from "./BookableListItem";

export default {
    components: {
        BookableListItem
    }
};
</script>

<template>
  <div>{{ el }}</div>
</template>

<script>
export default {
    async asyncData(ctx){
        return {el: 'foo'}
    }
}
</script>


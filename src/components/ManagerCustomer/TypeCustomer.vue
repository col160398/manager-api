<template>
    <option class="text-xs font-medium leading-3 text-gray-600" :value="type.FIELD_VALUE"> {{type.DESCFIELD}}</option>
</template>

<script>
export default {
    props:["type"],
}
</script>

<style>

</style>
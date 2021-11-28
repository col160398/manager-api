<template>
    <div class="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
        <!-- Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border -->
        <div class="w-full h-full rounded border-gray-300">
            <!-- Place your content here -->
            <list-edit-customer />
        </div>
    </div>
</template>

<script>
import ListEditCustomer from '../../components/ManagerCustomer/ListEditCustomer.vue'
export default {
    components:{ListEditCustomer}
}
</script>

<style>

</style>
<template>
    <!-- Remove class [ h-64 ] when adding a card block -->
    <div class="container mx-auto py-6 h-64 md:w-4/5 w-11/12 px-6 h-full">
        <!-- Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border -->
        <div class="w-full h-full rounded border-gray-300">
            <!-- Place your content here -->
            <list-customer />
        </div>
    </div>
</template>

<script>
import ListCustomer from '../../components/ManagerCustomer/ListCustomer.vue'
export default {
  components: { ListCustomer },
}
</script>

<style>

</style>
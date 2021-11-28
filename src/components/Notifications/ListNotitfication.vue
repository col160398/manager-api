<template>
    <div class="fixed sm:mr-6 mt-16 sm:mt-6 mb-6 sm:mb-0 xl:w-3/12 mx-auto left-0 sm:left-auto right-0 sm:bottom-0 sm:w-1/2 w-10/12 flex pr-4 py-4 transition duration-150 ease-in-out grid grid-cols-1 gap-2">
        <card-notification v-for="notification in notifications" :key="notification.id" :notification="notification" />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import CardNotification from './CardNotification.vue'
export default {
    components: { CardNotification },
    computed:{
         ...mapState("notifications",["notifications"])
    }
   
}
</script>

<style>

</style>
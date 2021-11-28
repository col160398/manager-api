<template>
    <div class="w-full h-full bg-gray-200">
        <!--code for notification starts-->
        <list-notitfication />
        <!--code for notification ends-->
        <div class="flex flex-no-wrap bg-gray-200">
            <sidebar />
            <sidebar-response />
            <router-view />
        </div>
    </div>
    
</template>

<script>
import ListNotitfication from '../components/Notifications/ListNotitfication.vue';
import Sidebar from '../components/Sidebar/Sidebar.vue';
import SidebarResponse from '../components/Sidebar/SidebarResponse.vue';
export default {
    components: { Sidebar,SidebarResponse, ListNotitfication },
};
</script>
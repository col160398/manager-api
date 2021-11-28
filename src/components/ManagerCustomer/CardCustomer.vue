<template>
    <tr class="flex w-full hover:bg-gray-100 border-b border-gray-200 py-4">
        <td class="p-4 w-1/5">{{customer.CUSTOMER_CD}}</td>
        <td class="p-4 w-1/5 flex items-center">{{customer.CUSTOMER_NM}}</td>
        <td class="p-4 w-1/5">{{customer.CUSTOMER_TYPE_NAME_VIET}}</td>
        <td class="p-4 w-1/5">{{customer.TAX_CD}}</td>
        <td class="p-4 w-1/5">{{customer.ADDRESS}}</td>
        <td class="p-4 w-1/5 text-blue-600 text-center">
            <div class="flex item-center justify-center">
                <router-link :to="{name: 'EditCustomer',params:{id:customer.CUSTOMER_CD}}" @click.prevent="setDetailsCustomer(customer)">
                    <button class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </button>
                </router-link>
                
                <button @click="btnDeleteCustomer(customer.CUSTOMER_CD)" class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
        </td>
    </tr>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props:["customer"],
    methods:{
        ...mapActions("customers",["DeleteCustomer","DetailsCustomer"]),
        btnDeleteCustomer(customerCD){
            this.DeleteCustomer(customerCD);
        },
        setDetailsCustomer(detailsCustomer){
            this.DetailsCustomer(detailsCustomer);
        }
    }
}
</script>

<style>

</style>
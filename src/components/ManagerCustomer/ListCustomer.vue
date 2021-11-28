<template>
    <div class="bg-white pb-4 px-4 rounded-md w-full">
        <div class="flex justify-between w-full pt-6 ">
            <div>
            <h4 class="text-2xl font-bold leading-tight text-gray-800 dark:text-gray-100">Danh sách khách hàng</h4>
            <ul class="flex flex-col md:flex-row items-start md:items-center text-gray-600 dark:text-gray-400 text-sm mt-3">
                <li class="flex items-center mr-4">
                    <div class="mr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-paperclip" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9 l6.5 -6.5" />
                        </svg>
                    </div>
                    <span>Danh sách khách hàng</span>
                </li>
                <li class="flex items-center mt-4 md:mt-0">
                    <div class="mr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plane-departure" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M15 12h5a2 2 0 0 1 0 4h-15l-3 -6h3l2 2h3l-2 -7h3z" transform="rotate(-15 12 12) translate(0 -1)" />
                            <line x1="3" y1="21" x2="21" y2="21" />
                        </svg>
                    </div>
                    <span v-show="timestamp">{{ timestamp }}</span>
                </li>
            </ul>
            </div>
        </div>
        <div class="w-full flex">
            <div class="w-full flex justify-start px-2 mt-2">
            <div class="w-full sm:w-64 inline-block relative">
                <button  @click="addCustomer(true)" class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 focus:outline-none mx-auto transition duration-150 ease-in-out hover:bg-green-500 bg-green-600 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm">
                    Thêm khách hàng
                </button>
            </div>
        </div>
        <div class="w-full flex justify-end px-2 mt-2">
            <div class="w-full sm:w-64 inline-block relative ">
                <input type="text" v-model="CUSTOMER_NM" class="leading-snug border border-gray-300 block w-full appearance-none bg-gray-100 text-sm text-gray-600 py-1 px-4 pl-8 rounded-lg" placeholder="Tìm kiếm tên khách hàng..." />

                <div class="pointer-events-none absolute pl-3 inset-y-0 left-0 flex items-center px-2 text-gray-300">

                    <svg class="fill-current h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999">
                    <path d="M508.874 478.708L360.142 329.976c28.21-34.827 45.191-79.103 45.191-127.309C405.333 90.917 314.416 0 202.666 0S0 90.917 0 202.667s90.917 202.667 202.667 202.667c48.206 0 92.482-16.982 127.309-45.191l148.732 148.732c4.167 4.165 10.919 4.165 15.086 0l15.081-15.082c4.165-4.166 4.165-10.92-.001-15.085zM202.667 362.667c-88.229 0-160-71.771-160-160s71.771-160 160-160 160 71.771 160 160-71.771 160-160 160z" />
                    </svg>
                </div>
            </div>
        </div>
        </div>
        <div class="overflow-x-auto mt-6">
            <table class="border-collapse w-full">
                <thead class="flex w-full">
                    <tr class="flex w-full mb-4 rounded-lg text-sm font-medium text-gray-700 text-left" style="font-size: 0.9674rem;">
                        <th class="p-4 w-1/5" style="background-color:#f8f8f8">Mã khách hàng</th>
                        <th class="p-4 w-1/5 bg-gray-200 " style="background-color:#f8f8f8">Tên khách hàng</th>
                        <th class="p-4 w-1/5" style="background-color:#f8f8f8">Loại khách hàng</th>
                        <th class="p-4 w-1/5" style="background-color:#f8f8f8">Mã thuế</th>
                        <th class="p-4 w-1/5" style="background-color:#f8f8f8">Địa chỉ</th>
                        <th class="p-4 w-1/5 text-center" style="background-color:#f8f8f8">Chức năng</th>
                    </tr>
                </thead>
                <tbody class="bg-grey-light flex flex-col text-sm font-normal text-gray-700 overflow-y-scroll" style="height: 65vh;">
                    <!-- Card Customers Start -->
                    <card-customer v-for="customer in filterCustomers" :key="customer.CUSTOMER_CD" :customer="customer" />
                    <!-- Card Customers End -->
                </tbody>
            </table>
        </div>
    </div>
    <div v-if="show" id="popup" class="z-50 fixed w-full flex justify-center inset-0">
      <div @click="addCustomer(false)" class="w-full h-full bg-gray-900 opacity-75 z-0 absolute inset-0"></div>
        <div class="mx-auto container">
            <div class="flex items-center justify-center h-full w-full">
                <div class="bg-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-4/5">
                    <div class="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
                        <p class="text-base font-semibold">Thêm mới khách hàng</p>
                        <button
                            role="button"
                            aria-label="close label"
                            @click="addCustomer(false)"
                            class="
                            focus:ring-2 focus:ring-offset-2 focus:ring-gray-600
                            focus:outline-none
                            "
                        >
                            <svg
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M21 7L7 21"
                                stroke="#A1A1AA"
                                stroke-width="1.75"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                            <path
                                d="M7 7L21 21"
                                stroke="#A1A1AA"
                                stroke-width="1.75"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                            </svg>
                        </button>
                    </div>
                    <div class="px-4 md:px-10 md:pt-12 md:pb-4 pb-7">
                        <form-modal />
                    </div>
                </div>
            </div>
        </div>
    </div>
     <!-- This example requires Tailwind CSS v2.0+ -->
    <div v-if="showDeleteCustomer" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <form-modal-delete />
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import FormModal from '../Modal/FormModal.vue'
import FormModalDelete from '../Modal/FormModalDelete.vue'
import CardCustomer from './CardCustomer.vue'
export default {
    components: { CardCustomer, FormModal, FormModalDelete },
    data() {
        return {
            CUSTOMER_NM: null,
            timestamp: '',
        }
    },
    computed:{
        ...mapState("customers",["customers","show","showDeleteCustomer","customerCD","showEditCustomer"]),
        filterCustomers: function(){
            return  this.filterCustomersByName(this.customers)
        }
    },
    mounted(){
        this.getCustomers();
        this.timestamp = this.printTimestamp();
    },
    methods:{
        ...mapActions("customers",["getCustomers","setShow","setShowEdit"]),
        addCustomer(flag) {
            if (flag) {
                this.setShow(true)
            } else {
                this.setShow(false)
            }
        },
        editCustomer(flag) {
            if (flag) {
                this.setShowEdit(true)
            } else {
                this.setShowEdit(false)
            }
        },
        filterCustomersByName: function(customers) {
            if(this.CUSTOMER_NM){
                return customers.filter((customer)=>{
					return this.CUSTOMER_NM.toLowerCase().split(' ').every(v => customer.CUSTOMER_NM.toLowerCase().includes(v))
				})
            }else{
                return customers;
            }
        },
        printTimestamp: function () {
            return new Date().toLocaleDateString();
        },
    }
}
</script>

<style>

</style>
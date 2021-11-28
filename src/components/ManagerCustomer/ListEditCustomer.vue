<template>
    <div class="bg-white pb-4 px-4 rounded-md w-full">
        <div class="flex justify-between w-full pt-6 ">
            <div>
            <h4 class="text-2xl font-bold leading-tight text-gray-800 dark:text-gray-100">Sửa thông tin khách hàng</h4>
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
                <li class="flex items-center mr-4 mt-4 md:mt-0">
                    <div class="mr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trending-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="3 17 9 11 13 15 21 7" />
                            <polyline points="14 7 21 7 21 14" />
                        </svg>
                    </div>
                    <span> Mã KH: {{customerUpdate.CustomerCD}}</span>
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
            </div>
        </div>
        <div class="overflow-x-auto mt-6">
            <form @submit.prevent="editCustomer()">
                <div class="flex flex-wrap sm:flex-no-wrap items-center justify-between w-full">
                    <div  style="height: 55vh;" class=" w-full sm:w-1/2 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800 px-2">
                        <label class="text-xl w-1/3" for="CustomerNM">Nhập bắt buộc</label>
                        <div class="flex items-center mt-2">
                            <label class="w-1/3" for="CustomerType">Loại khách hàng</label>
                            <label class="flex radio p-2 cursor-pointer">
                                <input class="my-auto transform scale-125" type="radio" value="1" v-model="customerUpdate.CustomerType" />
                                <div class="title px-2">Nội địa</div>
                            </label>
                            <label class="flex radio p-2 cursor-pointer">
                                <input class="my-auto transform scale-125" type="radio" value="2" v-model="customerUpdate.CustomerType" />
                                <div class="title px-2">Nước ngoài</div>
                            </label>
                        </div>
                        <div class="flex items-center mt-2">
                            <label class="w-1/3" for="CategoryCD">Phân loại khách hàng</label>
                            <select v-model="customerUpdate.CategoryCD" id="CategoryCD" aria-label="Select an option" class="focus:ring-2 focus:ring-gray-400 w-2/3 focus:outline-none  placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200">
                                <type-customer v-for="type in type" :key="type.FIELD_VALUE" :type="type" />
                            </select>
                        </div>
                        <div class="flex items-center mt-2">
                            <label class="w-1/3" for="CustomerNM">Tên khách hàng<span class="text-red-500">*</span></label>
                            <input v-model="customerUpdate.CustomerNM" id="CustomerNM" name="CustomerNM" placeholder="Nhập tên khách hàng" class=" focus:ring-2 focus:ring-gray-400 w-2/3 focus:outline-none  placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"/>
                        </div>
                        <div class="flex items-center mt-2">
                            <label class="w-1/3" for="TaxCD">Mã thuế<span class="text-red-500">*</span></label>
                            <input v-model="customerUpdate.TaxCD" id="TaxCD" name="TaxCD" placeholder="Nhập mã thuế" class=" focus:ring-2 focus:ring-gray-400 w-2/3 focus:outline-none  placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200" />
                        </div>
                        <div class="flex items-center mt-2">
                            <label class="w-1/3" for="Address">Địa chỉ<span class="text-red-500">*</span></label>
                            <textarea v-model="customerUpdate.Address" id="Address" name="Address" rows="12" placeholder="Nhập địa chỉ" class=" focus:ring-2 focus:ring-gray-400 w-2/3 focus:outline-none  placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200" ></textarea>
                        </div>
                    </div>
                    <div  style="height: 55vh;" class="w-full sm:w-1/2 h-80 shadow bg-white dark:bg-gray-800 px-2">
                        <label class="text-xl w-1/3" for="CustomerNM">Nhập bổ sung</label>
                        <div class="flex items-center mt-2">
                            <label class="w-1/3" for="BankCD">Mã ngân hàng</label>
                            <input v-model="customerUpdate.BankCD" id="Bank_CD" name="Bank_CD" placeholder="Mã ngân hàng" class=" focus:ring-2 focus:ring-gray-400 w-1/3 focus:outline-none  placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"/>
                            <input v-model="customerUpdate.BankNM" id="Bank_NM" name="Bank_NM" placeholder="Tên ngân hàng" class=" focus:ring-2 focus:ring-gray-400 w-1/3 focus:outline-none  placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"/>
                        </div>
                        <div class="flex items-center mt-2">
                            <label class="w-1/3" for="CustomerUserCD">Mã khách hàng</label>
                            <input v-model="customerUpdate.CustomerUserCD" id="CustomerUserCD" name="CustomerUserCD" placeholder="Nhập mã khách hàng" class=" focus:ring-2 focus:ring-gray-400 w-2/3 focus:outline-none  placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"/>
                        </div>
                        <div class="flex items-center mt-2">
                            <label class="w-1/3" for="Tel">Số điện thoại</label>
                            <input v-model="customerUpdate.Tel" id="Tel" name="Tel" placeholder="Nhập số điện thoại" class=" focus:ring-2 focus:ring-gray-400 w-2/3 focus:outline-none  placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"/>
                        </div>
                        <div class="flex items-center mt-2">
                            <label class="w-1/3" for="Email">Địa chỉ Email</label>
                            <input v-model="customerUpdate.Email" id="Email" name="Email" type="email" placeholder="Nhập địa chỉ Email" class=" focus:ring-2 focus:ring-gray-400 w-2/3 focus:outline-none  placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"/>
                        </div>
                        <div class="flex items-center mt-2">
                            <label class="w-1/3" for="Fax">Fax</label>
                            <input v-model="customerUpdate.Fax" id="Fax" name="Fax" placeholder="Nhập Fax" class=" focus:ring-2 focus:ring-gray-400 w-2/3 focus:outline-none  placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"/>
                        </div>
                        <div class="flex items-center mt-2">
                            <label class="w-1/3" for="BuyerNM">Tên người mua</label>
                            <input v-model="customerUpdate.BuyerNM" id="BuyerNM" name="BuyerNM" placeholder="Nhập tên người mua" class=" focus:ring-2 focus:ring-gray-400 w-2/3 focus:outline-none  placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"/>
                        </div>
                        <div class="flex items-center mt-2">
                            <label class="w-1/3" for="Note">Ghi chú</label>
                            <textarea v-model="customerUpdate.Note" id="Note" name="Note" rows="5" placeholder="Nhập ghi chú" class=" focus:ring-2 focus:ring-gray-400 w-2/3 focus:outline-none  placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"></textarea>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-between mt-9 px-2 py-6">
                    <router-link :to="{name:'ManagerCustomer'}">
                        <button aria-label="Back" role="button" class="focus:ring-2 focus:ring-offset-2 focus:ring-red-800 focus:outline-none px-6 py-3 bg-red-600 hover:bg-opacity-80 shadow rounded text-sm text-white">
                            Trở về
                        </button>
                    </router-link>
                    <button type="submit" aria-label="Update Customer" role="button" class="focus:ring-2 focus:ring-offset-2 focus:ring-green-800 focus:outline-none px-6 py-3 bg-green-600 hover:bg-opacity-80 shadow rounded text-sm text-white">
                        <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-white-900 pl-2" v-if="loading"></div>
                        <span v-else>Cập nhật</span> 
                    </button>
                </div>
            </form>
        </div>
        <div id="pagination" class="w-full flex justify-center border-t border-gray-100 pt-4 items-center">
            <br>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import TypeCustomer from '../ManagerCustomer/TypeCustomer.vue'
export default {
    components: { TypeCustomer },
    data() {
        return {
            customerUpdate:{
                CustomerCD: this.$store.state.customers.customer.CUSTOMER_CD,
                CategoryCD : this.$store.state.customers.customer.CATEGORY_CD,
                CustomerType : this.$store.state.customers.customer.CUSTOMER_TYPE,
                CustomerNM : this.$store.state.customers.customer.CUSTOMER_NM,
                BuyerNM : this.$store.state.customers.customer.BUYER_NM,
                CustomerUserCD : this.$store.state.customers.customer.CUSTOMER_USER_CD,
                TaxCD : this.$store.state.customers.customer.TAX_CD,
                BankCD : this.$store.state.customers.customer.BANK_CD,
                BankNM : this.$store.state.customers.customer.BANK_NM,
                Tel : this.$store.state.customers.customer.TEL,
                Fax: this.$store.state.customers.customer.FAX,
                Address : this.$store.state.customers.customer.ADDRESS,
                Email : this.$store.state.customers.customer.EMAIL,
                Note :this.$store.state.customers.customer.NOTE,
            },
             timestamp: '',
        } 
    },
    mounted(){
        this.getTypeCustomer();
        this.timestamp = this.printTimestamp();
    },
    computed:{
        ...mapState("customers",["type","loading"]),
    },
    methods:{
        ...mapActions("customers",["getTypeCustomer","UpdateCustomer"]),
        editCustomer(){
            console.log(this.customerUpdate);
            this.UpdateCustomer(this.customerUpdate);
        },
        printTimestamp: function () {
            return new Date().toLocaleDateString();
        },
    }
}
</script>

<style>

</style>
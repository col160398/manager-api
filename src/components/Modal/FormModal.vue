<template>
    <form @submit.prevent="addCustomer()">
        <div class="flex flex-wrap sm:flex-no-wrap items-center justify-between w-full">
            <div  style="height: 55vh;" class=" w-full sm:w-1/2 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800 px-2">
                <label class="text-xl w-1/3" for="CustomerNM">Nhập bắt buộc</label>
                <div class="flex items-center mt-2">
                    <label class="w-1/3" for="CustomerType">Loại khách hàng</label>
                    <label class="flex radio p-2 cursor-pointer">
                        <input class="my-auto transform scale-125" type="radio" value="1" v-model="customer.CustomerType" />
                        <div class="title px-2">Nội địa</div>
                    </label>
                    <label class="flex radio p-2 cursor-pointer">
                        <input class="my-auto transform scale-125" type="radio" value="2" v-model="customer.CustomerType" />
                        <div class="title px-2">Nước ngoài</div>
                    </label>
                </div>
                <div class="flex items-center mt-2">
                    <label class="w-1/3" for="CategoryCD">Phân loại khách hàng</label>
                    <select v-model="customer.CategoryCD" id="CategoryCD" aria-label="Select an option" class="focus:ring-2 focus:ring-gray-400 w-2/3 focus:outline-none  placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200">
                        <type-customer v-for="type in type" :key="type.FIELD_VALUE" :type="type" />
                    </select>
                </div>
                <div class="flex items-center mt-2">
                    <label class="w-1/3" for="CustomerNM">Tên khách hàng<span class="text-red-500">*</span></label>
                    <input v-model="customer.CustomerNM" id="CustomerNM" name="CustomerNM" placeholder="Nhập tên khách hàng" class=" focus:ring-2 focus:ring-gray-400 w-2/3 focus:outline-none  placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200" required/>
                </div>
                <div class="flex items-center mt-2">
                    <label class="w-1/3" for="TaxCD">Mã thuế<span class="text-red-500">*</span></label>
                    <input v-model="customer.TaxCD" id="TaxCD" name="TaxCD" placeholder="Nhập mã thuế" class=" focus:ring-2 focus:ring-gray-400 w-2/3 focus:outline-none  placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200" required/>
                </div>
                <div class="flex items-center mt-2">
                    <label class="w-1/3" for="Address">Địa chỉ<span class="text-red-500">*</span></label>
                    <textarea v-model="customer.Address" id="Address" name="Address" rows="12" placeholder="Nhập địa chỉ" class=" focus:ring-2 focus:ring-gray-400 w-2/3 focus:outline-none  placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200" required ></textarea>
                </div>
            </div>
            <div  style="height: 55vh;" class="w-full sm:w-1/2 h-80 shadow bg-white dark:bg-gray-800 px-2">
                <label class="text-xl w-1/3" for="CustomerNM">Nhập bổ sung</label>
                <div class="flex items-center mt-2">
                    <label class="w-1/3" for="BankCD">Mã ngân hàng</label>
                    <input v-model="customer.BankCD" id="Bank_CD" name="Bank_CD" placeholder="Mã ngân hàng" class=" focus:ring-2 focus:ring-gray-400 w-1/3 focus:outline-none  placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"/>
                    <input v-model="customer.BankNM" id="Bank_NM" name="Bank_NM" placeholder="Tên ngân hàng" class=" focus:ring-2 focus:ring-gray-400 w-1/3 focus:outline-none  placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"/>
                </div>
                <div class="flex items-center mt-2">
                    <label class="w-1/3" for="CustomerUserCD">Mã khách hàng</label>
                    <input v-model="customer.CustomerUserCD" id="CustomerUserCD" name="CustomerUserCD" placeholder="Nhập mã khách hàng" class=" focus:ring-2 focus:ring-gray-400 w-2/3 focus:outline-none  placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"/>
                </div>
                <div class="flex items-center mt-2">
                    <label class="w-1/3" for="Tel">Số điện thoại</label>
                    <input v-model="customer.Tel" id="Tel" name="Tel" placeholder="Nhập số điện thoại" class=" focus:ring-2 focus:ring-gray-400 w-2/3 focus:outline-none  placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"/>
                </div>
                <div class="flex items-center mt-2">
                    <label class="w-1/3" for="Email">Địa chỉ Email</label>
                    <input v-model="customer.Email" id="Email" name="Email" type="email" placeholder="Nhập địa chỉ Email" class=" focus:ring-2 focus:ring-gray-400 w-2/3 focus:outline-none  placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"/>
                </div>
                <div class="flex items-center mt-2">
                    <label class="w-1/3" for="Fax">Fax</label>
                    <input v-model="customer.Fax" id="Fax" name="Fax" placeholder="Nhập Fax" class=" focus:ring-2 focus:ring-gray-400 w-2/3 focus:outline-none  placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"/>
                </div>
                <div class="flex items-center mt-2">
                    <label class="w-1/3" for="BuyerNM">Tên người mua</label>
                    <input v-model="customer.BuyerNM" id="BuyerNM" name="BuyerNM" placeholder="Nhập tên người mua" class=" focus:ring-2 focus:ring-gray-400 w-2/3 focus:outline-none  placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"/>
                </div>
                <div class="flex items-center mt-2">
                    <label class="w-1/3" for="Note">Ghi chú</label>
                    <textarea v-model="customer.Note" id="Note" name="Note" rows="5" placeholder="Nhập ghi chú" class=" focus:ring-2 focus:ring-gray-400 w-2/3 focus:outline-none  placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"></textarea>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-between mt-9">
            <button type="submit" aria-label="add user" role="button" class="focus:ring-2 focus:ring-offset-2 focus:ring-green-800 focus:outline-none px-6 py-3 bg-green-600 hover:bg-opacity-80 shadow rounded text-sm text-white">
                <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900 pl-2" v-if="loading"></div> 
                <span v-else>Thêm</span> 
            </button>
        </div>
    </form>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import TypeCustomer from '../ManagerCustomer/TypeCustomer.vue'
// import Api from '../../apis/Api.js'
export default {
    components: { TypeCustomer },
    data() {
        return {
            customer:{
                CategoryCD : "1",
                CustomerType : "",
                CustomerNM : "",
                CustomerNM_EN : "",
                CustomerNM_KOR : "",
                BuyerNM : "",
                CustomerUserCD : "",
                TaxCD : "",
                BankCD : "",
                BankNM :"",
                OwnerNM : "",
                BusinessType: "",
                KindBusiness : "",
                Tel : "",
                Fax: "",
                Address : "",
                Email : "",
                Note :"",
            },
        }
    },
    computed:{
        ...mapState("customers",["type","loading"]),
    },
    mounted(){
        this.getTypeCustomer();
    },
    methods:{
        ...mapActions("customers",["getTypeCustomer","createCustomer"]),
        addCustomer(){
            this.createCustomer(this.customer);
        }
    }
}
</script>

<style>

</style>
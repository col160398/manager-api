import Api from '../../../apis/Api';

export const getCustomers = ({commit})=>{
    Api.get('CustomerInfo/getAllCustomer')
    .then((result) => {
        commit('setCustomers',result.data.result);
    }).catch((error) => {
        commit('errorLogin',error.response.data)
    });
}
export const getTypeCustomer = ({commit})=>{
    Api.get('CustomerInfo/getSelectTypeCustomer')
    .then((result) => {
        commit('setTypeCustomers',result.data.result);
    }).catch((error) => {
        console.log(error.response.data);
    });
}
export const setShow = ({commit},flag)=>{
    commit('isModalCreate',flag)
} 
export const createCustomer = ({commit,dispatch},customer)=>{
    commit('isLoading',true)
    Api.post('CustomerInfo/insert',{
        Lag: localStorage.getItem('Lag'),
        CustomerType : customer.CustomerType,
        CustomerNM : customer.CustomerNM,
        BuyerNM : customer.BuyerNM,
        TaxCD : customer.TaxCD,
        CustomerUserCD: customer.CustomerUserCD,
        OwnerNM : customer.OwnerNM,
        BusinessType: customer.BusinessType,
        KindBusiness : customer.KindBusiness,
        Tel : customer.Tel,
        Fax: customer.Fax,
        Address : customer.Address,
        Email : customer.Email,
        Note : customer.Note,
    })
    .then((result) => {
        dispatch('getCustomers')
        dispatch('notifications/addNotification',{
            message:`Thêm thành công. Mã khách hàng là:`+ result.data.result[0].Customer_CD
        },{ root: true })
        commit('isLoading',false)
        commit('isModalCreate',false)
    }).catch((error) => {
        console.log(error.response.data.messages);
        commit('isLoading',false)
    });
}

export const DeleteCustomer = ({commit},customerCD)=>{
    commit('CDCustomerDelete',customerCD)
    commit('isModalDelete',true)
}

export const removeCustomer = ({commit,dispatch},customerCD)=>{
    commit('isLoading',true)
    Api.post('CustomerInfo/delete', {
        Lag: localStorage.getItem('Lag'),
        CustomerCD: customerCD
    })
    .then((result) => {
        dispatch('getCustomers'),
        dispatch('notifications/addNotification',{
            message:`Xóa thành công. Mã khách hàng là:`+ result.data.result[0].Customer_CD
        },{ root: true })
        commit('isLoading',false)
        commit('isModalDelete',false)
    }).catch((error) => {
        commit('isLoading',false)
        console.log(error.response.data.messages);
    });
}

export const showDelete = ({commit})=>{
    commit('isLoading',false)
    commit('isModalDelete',false)
}

export const DetailsCustomer = ({commit},customer)=>{
    commit('detailsCustomer',customer)
}
export const UpdateCustomer = ({commit,dispatch},customerUpdate)=>{
    commit('isLoading',true)
    Api.post('CustomerInfo/update',{
        Lag: localStorage.getItem('Lag'),
        CustomerCD : customerUpdate.CustomerCD,
        CategoryCD : customerUpdate.CategoryCD,
        CustomerType : customerUpdate.CustomerType,
        CustomerNM : customerUpdate.CustomerNM,
        BuyerNM : customerUpdate.BuyerNM,
        CustomerUserCD : customerUpdate.CustomerUserCD,
        TaxCD : customerUpdate.TaxCD,
        BankCD : customerUpdate.BankCD,
        BankNM : customerUpdate.BankNM,
        Tel : customerUpdate.Tel,
        Fax : customerUpdate.Fax,
        Address : customerUpdate.Address,
        Email : customerUpdate.Email,
        Note: customerUpdate.Note
    })
    .then((result) => {
        dispatch('getCustomers')
        dispatch('notifications/addNotification',{
            message:'Cập nhật thông tin mã KH:' + result.data.result[0].Customer_CD + 'thành công',
        },{ root: true })
        commit('isLoading',false)
    }).catch((error) => {
        commit('isLoading',false)
        console.log(error.response.data.messages);
    });
}
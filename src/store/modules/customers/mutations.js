export const setCustomers = (state, customers)=>{
    state.customers = customers;
}
export const setTypeCustomers = (state, type)=>{
    state.type = type;
}
export const isLoading = (state,loading)=>{
    state.loading = loading;
}
export const isModalCreate = (state, show)=>{
    state.show = show;
} 
export const isModalDelete = (state, show)=>{
    state.showDeleteCustomer = show;
}
export const isModalEdit = (state,show)=>{
    state.showEditCustomer = show;
}
export const CDCustomerDelete = (state, CD)=>{
    state.customerCD = CD;
}
export const detailsCustomer = (state, customer)=>{
    state.customer= customer;
}
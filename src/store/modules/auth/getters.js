export const errors = (state)=>{
    return state.errors;
}
export const isNameAccount = () =>{
   return localStorage.getItem('name');
}
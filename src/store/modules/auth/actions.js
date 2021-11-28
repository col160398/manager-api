import Api from '../../../apis/Api';

export const loginAccount = ({commit},user)=>{
    commit('setLoading',true);
    Api.post('login',{
        Lag: user.Lag,
        companyID: user.companyID,
        username: user.username,
        password: user.password
    })
    .then((result) => {
        
        console.log(result.data);
        if(result.data.access_token){
            localStorage.setItem('token',result.data.access_token);
            localStorage.setItem('name',result.data.companyInfo.USERNM);
            localStorage.setItem('Lag',user.Lag);
            window.location.replace('/');
        }else{
            window.location.replace('login');
        }
    }).catch((error) => {
        commit('setLoading',false);
        commit('errorLogin',error.response.data)
    });
}

export const logout = ()=>{
    Api.post('logout')
    .then(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        localStorage.removeItem('Lag');
        window.location.replace('login');
    }).catch((err) => {
        console.log(err);
    });
}
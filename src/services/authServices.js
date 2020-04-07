// const authenticate = (data, next) => {
//     if(typeof window !== 'undefined'){
//         localStorage.setItem('Token', JSON.stringify(data))
//         next()
//     }
// }

export const isAuthenticated = () => {
    if(typeof window == 'undefined'){
        return false
    }
    if(localStorage.getItem('Token')){
        return JSON.parse(localStorage.getItem('Token'))
    }else{
        return false
    }
}

export const logout = (next) => {
    if(typeof window !== 'undefined'){
        localStorage.removeItem('jwt')
        if(next){
            next()
        }
        
    }
}
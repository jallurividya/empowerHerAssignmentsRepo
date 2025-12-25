export const isAuthenticate = ()=>{
    return localStorage.getItem("isLogged") === "true"
}
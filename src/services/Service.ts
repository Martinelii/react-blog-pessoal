import axios from "axios";

const api =axios.create({
    baseURL:'https://blog-pessoal-69my.onrender.com'
    // baseURL:'http://localhost:8080' Local!
})

export const cadastrarUsuario = async(url: string, dados: Object, setDados: Function) =>{
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const login = async(url: string, dados: Object, setDados: Function) =>{
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

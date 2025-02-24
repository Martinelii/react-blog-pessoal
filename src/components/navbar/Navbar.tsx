import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";
import ToastAlert from "../../utils/ToastAlert";

function Navbar() {

    const navigate = useNavigate();

    const { handleLogout } = useContext(AuthContext)

    function logout() {

        handleLogout()
        ToastAlert('O Usuário foi desconectado com sucesso!', 'info')
        navigate('/')
    }
    var componente: React.ReactNode;

    const { usuario} = useContext(AuthContext)
    const token = usuario.token

    if (token !== "") {
        componente = (
            <>
                <div className='flex gap-4'>
                    <Link to='/postagens' className='hover:underline'>Postagens</Link>
                    <Link to='/temas' className='hover:underline'>Temas</Link>
                    <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link>
                    <Link to='/perfil' className='hover:underline'>Perfil</Link>
                    <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
                </div>
            </>
        )
    } else {
        componente = (
            <>
            </>
        )
    }

    return(
        <>
            <div className='w-full bg-indigo-900 text-white
                flex justify-center py-4'>

                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold">Blog Pessoal</Link>

                    {componente}
                </div>
            </div>  
        </>
    )
}

export default Navbar
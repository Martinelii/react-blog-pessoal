import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-base'>Acesse nossas redes sociais</p>
                    <div className='flex gap-3'>
                        <LinkedinLogo size={42} weight='regular' className='hover:opacity-60'/>
                        <InstagramLogo size={42} weight='regular' className='hover:opacity-60'/>
                        <FacebookLogo size={42} weight='regular' className='hover:opacity-60'/>
                    </div>
                    <p className='text-thin font-thin'>
                        Blog Pessoal Generation | Copyright: {data}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-3'>
                        <LinkedinLogo size={48} weight='regular' />
                        <InstagramLogo size={48} weight='regular' />
                        <FacebookLogo size={48} weight='regular' />
                    </div>
                    <p className='text-xl font-thin'>
                        Blog Pessoal Generation | Copyright: {data}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer
import React from 'react'
import Image from 'next/image'
import apphand from '/assets/doctor.svg'
import { useRouter } from 'next/router'

export default function Doctor() {
    const router = useRouter();

    return (
        <div className="bg-gray-700 w-full py-1 mt-8 sm:mt-0">
            <div className="flex flex-row p-4 sm:p-0 flex-wrap justify-between mt-12 px-5 container mx-auto mb-12 bg-center bg-opacity-5 bg-cover bg-no-repeat">
                <div className='flex flex-col text-center sm:text-left justify-center sm:pr-10 space-y-5 w-full sm:w-3/5'>
                    <h1 className="text-5xl font-bold text-white dark:text-white sm:pr-32">
                        Se sentir
                        mieux pour trouver
                        des soins de santé
                    </h1>
                    <h3 className="text-1xl font-thin text-white dark:text-white sm:w-[60%]">
                        Nous éliminons les conjectures pour trouver les bons médecins, hôpitaux et soins pour vous et votre famille.
                    </h3>
                    <div className='space-x-4'>
                        <button onClick={() => router.push("/search")} className="mt-4 bg-transparent border-white border-2 rounded w-[250px] h-[50px] text-white">
                            Trouver un docteur
                        </button>
                    </div>
                </div>
                <div className='sm:w-2/5 hidden sm:block flex items-center mt-10 sm:mt-0'>
                    <Image src={apphand} alt="Appholding hand" className="object-contain" height={400} width={400} />
                </div>
            </div>
        </div>
    )

}

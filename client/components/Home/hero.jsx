import React from 'react'
import Image from 'next/image'
import heroimg from '/assets/himg.svg'

export default function HeroPage() {
    return (
        <header>
            <section className={`text-gray-600 body-font pb-12 bg-fieldwhite `}>
                <div className="container mx-auto flex px-5 py-12 pb-24 md:flex-row flex-col items-center">
                    <div className="  p-3 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className=" sm:text-4xl lg:text-6xl text-4xl mb-4 font-extrabold text-gray-900">Retrouver la belle vie par une bonne santé.
                        </h1>
                        <p className="mb-8 leading-relaxed">Nous éliminons les conjectures pour trouver les bons médecins, hôpitaux et soins pour vous et votre famille.</p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Image
                            style={{ maxHeight: "500px" }}
                            src={heroimg}
                            alt="Image of doctor"
                        />
                    </div>
                </div>
            </section>
        </header>
    )
}

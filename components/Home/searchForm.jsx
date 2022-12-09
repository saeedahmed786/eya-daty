import { Select } from 'antd'
import React from 'react'
import SearchChips from './searchChips'

const { Option } = Select;

export default function SearchForm() {
    return (
        <div className='flex justify-center'>
            {/* max-w-md */}
            <div className="bg-white p-6 rounded-[20px] mx-4 sm:mx-0 shadow-lg sm:w-3/4  mt-[-10%]">
                <div className='sm:px-5 mx-auto'>
                    <form>
                        <div className="block md:flex justify-around  gap-4 mb-6">
                            <div className="w-full md:w-1/4 form-group mb-4 md:mb-0">
                                <Select placeholder="Spécialité" className='w-full'>
                                    <Option>jsdhkw</Option>
                                </Select>
                            </div>
                            <div className="w-full md:w-1/4 form-group mb-4 md:mb-0">
                                <Select placeholder="Wilaya" className='w-full'>
                                    <Option>jsdhkw</Option>
                                </Select>
                            </div>
                            <div className="w-full md:w-1/4 form-group mb-4 md:mb-0">
                                <Select placeholder="Commune" className='w-full'>
                                    <Option>jsdhkw</Option>
                                </Select>
                            </div>
                            <div className="w-full md:w-1/4 form-group">
                                <button className="
                                // block
                        px-8
                        py-1.5
                        text-base 
                        font-normal
                        text-white
                        bg-siteblue bg-clip-padding
                        border border-solid border-gray-300
                        rounded-lg
                        transition
                        ease-in-out
                        h-[48px]
                        w-full
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none flex justify-center gap-2 items-center text-white">
                                    {/* <Image style={{color: "white"}} className='absolute text-white' src={SearchIcon} alt="Search" width={32} /> */}
                                    <svg width="14" height="15" viewBox="0 0 14 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.8258 0.333344C10.4058 0.333344 13.3178 3.24534 13.3178 6.82534C13.3178 8.51437 12.6696 10.0549 11.6089 11.211L13.6961 13.2938C13.8914 13.4891 13.8921 13.8051 13.6967 14.0005C13.5994 14.0991 13.4707 14.1478 13.3427 14.1478C13.2154 14.1478 13.0874 14.0991 12.9894 14.0018L10.877 11.8953C9.76584 12.7852 8.35691 13.318 6.8258 13.318C3.2458 13.318 0.33313 10.4053 0.33313 6.82534C0.33313 3.24534 3.2458 0.333344 6.8258 0.333344ZM6.8258 1.33334C3.79713 1.33334 1.33313 3.79668 1.33313 6.82534C1.33313 9.85401 3.79713 12.318 6.8258 12.318C9.8538 12.318 12.3178 9.85401 12.3178 6.82534C12.3178 3.79668 9.8538 1.33334 6.8258 1.33334Z" fill="currentColor" />
                                    </svg>

                                    <span>Chercher</span>
                                </button>
                            </div>
                        </div>
                        <div className="form-group mb-6 ">
                            <a href="components/searchform#" className='text-siteblue font-[500] flex'> Recherche Avancee <span className='px-2'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.436 1C20.063 1 22.5 3.546 22.5 7.335V16.165C22.5 19.954 20.063 22.5 16.436 22.5H7.064C3.437 22.5 1 19.954 1 16.165V7.335C1 3.546 3.437 1 7.064 1H16.436ZM16.436 2.5H7.064C4.292 2.5 2.5 4.397 2.5 7.335V16.165C2.5 19.103 4.292 21 7.064 21H16.436C19.209 21 21 19.103 21 16.165V7.335C21 4.397 19.209 2.5 16.436 2.5ZM11.75 7.3273C12.164 7.3273 12.5 7.6633 12.5 8.0773V10.99L15.4165 10.9902C15.8305 10.9902 16.1665 11.3262 16.1665 11.7402C16.1665 12.1542 15.8305 12.4902 15.4165 12.4902L12.5 12.49V15.4043C12.5 15.8183 12.164 16.1543 11.75 16.1543C11.336 16.1543 11 15.8183 11 15.4043V12.49L8.0835 12.4902C7.6685 12.4902 7.3335 12.1542 7.3335 11.7402C7.3335 11.3262 7.6685 10.9902 8.0835 10.9902L11 10.99V8.0773C11 7.6633 11.336 7.3273 11.75 7.3273Z" fill="#0094DA" />
                                </svg>
                            </span>
                            </a>

                        </div>

                        <div className='font-bold my-4'>
                            <p>
                                Historique des recherces
                            </p>
                        </div>
                        <div className="flex items-center flex-wrap gap-4 justify-between">
                            {/*flex flex-wrap justify-start space-x-3 space-y-3*/}
                            <SearchChips chiptitle="Generaliste Oran" />
                            <SearchChips chiptitle="Cardiologie Medea" />
                            <SearchChips chiptitle="Medicine Interne Alger" />
                            <SearchChips chiptitle="Pediatre Alger Borj Elkifane" />
                            <SearchChips chiptitle="Urologie Alger" />

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

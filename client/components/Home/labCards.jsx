import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ViewIcon from '../../icons/viewicon'
import StarIcon from '../../icons/staricon'
import LocationIcon from '../../icons/locationicon'
import HeartIcon from '../../icons/hearticon'
import RightIcon from '../../icons/righticon'
import checkmark from '/assets/checkmark.png'
import { useRouter } from 'next/router'
import formatStringNumbers from '../FormatNumbers'
import axios from 'axios'
import { ErrorMessage } from '../../Messages/messages'
import { isAuthenticated } from '../Auth/auth'

export default function LabCard({ clinic }) {
    const router = useRouter();
    const [favourites, setFavourites] = useState([]);

    const getFavourites = async (id) => {
        await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/clinics/favourite/${id}`, {
            headers: {
                "authorization": "Bearer " + isAuthenticated()?.token
            }
        }).then(res => {
            if (res.statusText === "OK") {
                setFavourites(res.data);
            }
            else {
                ErrorMessage(res.data.errorMessage);
            }
        })
    };

    useEffect(() => {
        getFavourites(clinic?._id)

        return () => {

        }
    }, []);

    return (
        <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="flex justify-center">
                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <a className='flex justify-center ' href="components/labcards#!">
                        <img src={clinic?.picture?.url} alt="clinic image" />

                        {/* <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/> */}
                    </a>
                    <div className="p-6">
                        <div className='flex flex-row space-x-2'>
                            <div>
                                <h5 className="text-gray-900 text-[16px] font-[700] mb-2">{clinic?.title}</h5>
                            </div>
                            <div className='py-1'>
                                <Image src={checkmark} alt="checkmark" />
                            </div>
                        </div>
                        <p className="text-[#65737E] text-base mb-4">
                            {clinic?.firstName} {clinic?.lastName}
                        </p>
                        <div className='flex flex-row '>
                            <div className=' py-3 px-2'>
                                <LocationIcon />
                            </div>
                            <div className=' p-2'>
                                <p className="text-gray-700 text-base mb-4">
                                    {clinic?.user?.city}, {clinic?.user?.state}
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-row  p-4 justify-start space-x-3'>
                            <div className='flex flex-row space-x-1 '>
                                <div className='  py-1'>
                                    <ViewIcon />
                                </div>
                                <div>{formatStringNumbers(clinic?.views?.length)}</div>
                            </div>
                            <div className='flex flex-row space-x-1'>
                                <div className='  py-1'>
                                    <HeartIcon />
                                </div>
                                <div>{formatStringNumbers(favourites.length)}</div>
                            </div>
                            <div className='flex flex-row space-x-1'>
                                <div className='  py-1'>
                                    <StarIcon />
                                </div>
                                <div>
                                    {
                                        clinic?.recommendations?.length > 0 ? clinic?.recommendations?.length * 5 : 5 / clinic?.notrecommendations?.length > 0 ? clinic?.notrecommendations?.length : 1
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <button onClick={() => router.push(`/doctor/${clinic?._id}`)} type="button" className="px-16 py-4 bg-white border-2 border-siteblue  text-siteblue font-medium text-sm leading-tight uppercase rounded-xl shadow-md hover:bg-siteblue hover:text-white hover:shadow-lg focus:bg-siteblue focus:shadow-lg focus:outline-none focus:ring-0 active:bg-siteblue active:shadow-lg transition duration-150 ease-in-out flex items-center gap-3">Voir Plus <RightIcon /> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

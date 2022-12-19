import Image from 'next/image'
import React, { useState } from 'react'
import Doc from "../../assets/doc.jpg"
import Clinic from "../../assets/clinicimage1.png"
import Check from "../../assets/Checkmark.svg"
import Trash from "../../assets/trash.svg"
import Delete from "../../assets/Button.svg"
import CloseIcon from "../../assets/closeIcon.svg"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper';
import { EnvironmentTwoTone, EyeTwoTone, HeartTwoTone, StarTwoTone } from '@ant-design/icons'
import { Modal } from 'antd'
import Link from 'next/link'
import DeleteModal from '../DeleteModal'

const SearchCard = ({ gridCol, favourite }) => {
    const [swiperObj, setSwiperObj] = useState();

    return (
        <div className='SearchCard'>
            <div className='flex flex-wrap'>
                <div style={gridCol === 12 ? { minWidth: "228px", width: "100%" } : { maxWidth: "30%", width: "30%" }}>
                    <Swiper onSwiper={(swiper) => setSwiperObj(swiper)} pagination={true} modules={[Pagination]} className="mySwiper">
                        <SwiperSlide>
                            <Image src={Doc} alt="Doctor" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={Clinic} alt="Doctor" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={Clinic} alt="Doctor" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={Clinic} alt="Doctor" />
                        </SwiperSlide>
                    </Swiper>
                    <div className='thumbImages'>
                        <div>
                            <button onClick={() => swiperObj.slideTo(0)}>
                                <Image src={Doc} alt="Doctor" />
                            </button>
                            <button onClick={() => swiperObj.slideTo(1)}>
                                <Image src={Clinic} alt="Doctor" />
                            </button>
                            <button onClick={() => swiperObj.slideTo(2)}>
                                <Image src={Clinic} alt="Doctor" />
                            </button>
                            <button onClick={() => swiperObj.slideTo(3)}>
                                <Image src={Clinic} alt="Doctor" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='inner mt-4' style={gridCol === 12 ? { paddingLeft: "0px", width: "100%" } : { paddingLeft: "15px", width: "70%" }}>
                    <div className='nameAndPic w-full flex justify-between pr-6'>
                        <div className='flex items-center gap-2'>
                            <div className='profileImg'>
                                <Image src={Doc} alt="Doctor" width={32} height={32} className="rounded-[50%]" />
                            </div>
                            <div className='w-full'>
                                <div className='flex gap-2'>
                                    <h6>Dr. Mechri Nasser</h6>
                                    <Image src={Check} alt="Checkmark" />
                                </div>
                                <p className='mt-2 text-left'>Ophtalmologie</p>
                            </div>
                        </div>
                        {
                            favourite &&
                            <div>
                                <DeleteModal deleteBtn={<Image src={Delete} alt="Delete" />} />
                            </div>
                        }
                    </div>
                    <div className='flex mt-8 gap-1'>
                        <EnvironmentTwoTone />
                        <p className='w-full text-left'>Quartier des 400 logements,  à côté du marché couvert, Beni Slimane, Médea</p>
                    </div>
                    <div className='flex gap-2 mt-8 items-end'>
                        <button className='flex gap-1 items-center'>
                            <EyeTwoTone />
                            <span>55k</span>
                        </button>
                        <button className='flex gap-1 items-center'>
                            <HeartTwoTone />
                            <span>240</span>
                        </button>
                        <button className='flex gap-1 items-center'>
                            <StarTwoTone />
                            <span>4.8</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchCard

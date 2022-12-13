import { CalendarOutlined } from '@ant-design/icons'
import Image from 'next/image'
import React from 'react'
import Clinic from "../../assets/clinicimage1.png"
import Doc from "../../assets/doc.jpg"

const SmallBlogCard = () => {
    return (
        <div className='SmallBlogCard'>
            <div className='mainImg'>
                <Image src={Clinic} alt='doc' />
            </div>
            <div className='inner'>
                <h6>Chirurgie Dentaire</h6>
                <div className='dateCon'>
                    <CalendarOutlined />
                    <span>24/12/2022</span>
                </div>
                <h2>Une hernie discale lombaire ventrale qwd qwdjh qwjfhd qwjfdh qwjdhf qwidf </h2>
            </div>
        </div>
    )
}

export default SmallBlogCard

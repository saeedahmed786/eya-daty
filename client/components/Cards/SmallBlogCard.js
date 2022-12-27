import { CalendarOutlined } from '@ant-design/icons'
import moment from 'moment'
import Image from 'next/image'
import React from 'react'
import Clinic from "../../assets/clinicimage1.png"
import Doc from "../../assets/doc.jpg"

const SmallBlogCard = ({ blog }) => {
    return (
        <div className='SmallBlogCard'>
            <div className='mainImg'>
                <img src={blog?.picture?.url} alt='doc' className='max-w-[200px] max-h-[100px]' />
            </div>
            <div className='inner'>
                <h6>{blog?.category?.name}</h6>
                <div className='dateCon'>
                    <CalendarOutlined />
                    <span>{moment(blog?.createdAt).format("DD/MM/YYYY")}</span>
                </div>
                <h2>{blog?.title}</h2>
            </div>
        </div>
    )
}

export default SmallBlogCard

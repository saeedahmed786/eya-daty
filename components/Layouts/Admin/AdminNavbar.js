import { BellOutlined } from '@ant-design/icons'
import { Badge } from 'antd'
import Image from 'next/image'
import React from 'react'
import SearchInputs from '../../Inputs/SearchInputs'
import doctor from '/assets/doc.jpg'


const AdminNavbar = () => {
    return (
        <div className='AdminNavbar bg-[white] p-2 rounded-[16px]'>
            <div className='flex justify-between items-center'>
                <div className='w-[50%]'>
                    <SearchInputs placeholder="Chercher..." />
                </div>
                <div className='flex gap-10 items-center'>
                    <Badge color='#0094DA' count={5}>
                        <BellOutlined style={{ fontSize: "21px" }} />
                    </Badge>
                    <div className='flex items-center gap-2'>
                        <div className='text-end'>
                            <h4 className='font-[500] text-[#333B42]'>Achref Maher</h4>
                            <p className='text-[12px] text-[#65737E]'>Admin</p>
                        </div>
                        <div>
                            <Badge offset={[-6, 32]} dot color='#29C773' count={5}>
                                <Image objectFit='cover' src={doctor} width={36} height={36} className="rounded-[50%]" alt="doctor" />
                            </Badge>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminNavbar

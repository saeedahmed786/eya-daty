import React, { useState } from 'react'
import ProfileLayout from '../../components/Layouts/ProfileLayout'
import Email from '../../assets/Email.svg'
import Image from 'next/image'
import { Input } from 'antd'
import { LinkOutlined } from '@ant-design/icons'
import Facebook from "../../assets/Facebook-blue.svg"
import Twitter from "../../assets/Twitter_blue.svg"
import Instagram from "../../assets/Instagram_blue.svg"
import Linkedin from "../../assets/linkedin.svg"

const Invite = () => {
    const [copied, setCopied] = useState(false);

    return (
        <ProfileLayout sidebar>
            <div className='Invite px-12'>
                <Image src={Email} alt="Email" />
                <p className='normalPara my-2'>Invite tes amis</p>
                <div className='mt-6'>
                    <label>Lien</label>
                    <div className='flex items-center gap-4'>
                        <Input value="www.eyadati.com/invite&14252258" placeholder='Prénom' />
                        <button
                            type="submit"
                            onClick={() => { navigator.clipboard.writeText('www.eyadati.com/invite&14252258'); setCopied(true); }}
                            className='btn px-12 bg-[#0094DA] flex gap-1 items-center rounded-[12px] text-white h-[48px]'>
                            <LinkOutlined style={{ fontSize: "21px" }} />
                            <span>{copied ? "Copied" : "Copier"}</span>
                        </button>
                    </div>
                    <div className='flex gap-3 mt-6 items-center justify-start iconsContainer' >
                        <Image src={Facebook} alt="Facebook" className='text-red' style={{ color: "red" }} />
                        <Image src={Twitter} alt="Twitter" />
                        <Image src={Instagram} alt="Instagram" />
                        <Image src={Linkedin} alt="Linkedin" />
                    </div>
                </div>
            </div>
        </ProfileLayout>
    )
}

export default Invite

import { DislikeOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons'
import Image from 'next/image'
import React from 'react'
import Doc from "../../assets/doc.jpg"

const CommentCard = () => {
    return (
        <div className='CommentCard'>
            <div className='flex gap-4'>
                <div className='commentImg'>
                    <Image src={Doc} alt='name' className='rounded-[50%]' />
                </div>
                <div>
                    <strong>Selma Achref</strong>
                    <p className='normalPara my-2'>Diplômé d’un doctorat en pharmacie de l’université de Reims, Paul Musset est passionné de médecine naturelle et de nutrition sportive.</p>
                    <div className='reactionCont flex gap-8'>
                        <button className='flex gap-2 items-center'>
                            <LikeOutlined />
                            <span>Like</span>
                        </button>
                        <button className='flex gap-2 items-center'>
                            <DislikeOutlined />
                            <span>Dislike</span>
                        </button>
                        <button className='flex gap-2 items-center'>
                            <MessageOutlined />
                            <span>Reply</span>
                        </button>
                    </div>
                    <div className='w-full mt-4'>
                        <textarea placeholder='Reply' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentCard

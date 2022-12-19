import React, { useState } from 'react'
import CloseIcon from "../../assets/closeIcon.svg"
import { Input, Modal } from 'antd'
import Image from 'next/image'
import Tick from "../../assets/Tick-Square.svg"

const NotesModal = ({ notes, handleUpdate, title }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [items, setItems] = useState([]);
    const [itemNote, setItemNote] = useState("");
    const [show, setShow] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const toggleItem = (item) => {
        if (items.includes(item)) {
            setItems(items.filter((i) => i !== item));
        } else {
            setItems([...items, item]);
        }
    };

    return (
        <>
            <button onClick={showModal} className='text-[#0094DA] font-[500]'>{title}</button>
            <Modal centered className='notesModal' closeIcon={false} title={false} footer={false} visible={isModalOpen} onCancel={handleCancel}>
                <div>
                    <div className='flex justify-between items-center closeIcon'>
                        <h4 className='subTitle'>{title}</h4>
                        <button onClick={handleCancel}>
                            <Image src={CloseIcon} alt="CloseIcon" />
                        </button>
                    </div>
                    <div className='mt-6'>
                        {
                            notes?.map(note => {
                                return (
                                    <a onClick={() => toggleItem(note)} key={note} className='flex border-b-[1px] py-3 border-[#C0C5CE] items-center justify-between'>
                                        <div>{note}</div>
                                        {
                                            items.includes(note) &&
                                            <div> <Image src={Tick} alt="Tick" /></div>
                                        }
                                    </a>
                                )
                            })
                        }
                    </div>
                    <div className='mt-6'>
                        <div className='text-center'>
                            <button onClick={() => setShow(!show)} className='text-[#0094DA] font-[500]'>Autre note</button>
                        </div>
                        {
                            show &&
                            <Input
                                type="text"
                                className='mt-4'
                                placeholder='Autre note'
                                value={itemNote}
                                onChange={(event) => setItemNote(event.target.value)}
                            />
                        }
                    </div>
                    <div className='mt-8'>
                        <button className='w-full bg-[#0094DA] rounded-[12px] h-[48px] text-white mb-4' onClick={() => handleUpdate(items)}>Supprimer</button> <br />
                        <button className='w-full bg-[#C0C5CE] rounded-[12px] h-[48px] text-black' onClick={handleCancel}>Annuler</button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default NotesModal

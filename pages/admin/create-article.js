import { Input } from 'antd'
import React, { useState } from 'react'
import AdminLayout from '../../components/Layouts/Admin/AdminLayout'
import { ArrowUpOutlined } from '@ant-design/icons'
import RightIcon from '../../icons/righticon'
import PlusIcon from '../../icons/plusIcon'
import SelectBoxWidthSearch from '../../components/Inputs/SelectBox'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css';
const ReactQuill = dynamic(import('react-quill'), { ssr: false })
const QuillToolbar = dynamic(import('../../components/QuillEditor'), { ssr: false })

const CreateBlog = () => {
    const [description, setDescription] = useState("");

    const Formats = [
        "header",
        // "font",
        // "size",
        "bold",
        "italic",
        "underline",
        "align",
        "strike",
        "script",
        "blockquote",
        "background",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "color",
        "code-block"
    ];


    return (
        <AdminLayout sidebar>
            <div className='Pages pt-6 max-w-[60vw]'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 justify-center items-center py-4'>
                        <span>Accueil</span> <RightIcon /> <button className='text-[#0094DA]'>Ajouter un article</button>
                    </div>
                </div>
                <h1 className='bigTitle'>Ajouter un article</h1>
                <form className='mt-10'>
                    <h4 className='subTitle'>Image de l’article</h4>
                    <div className='bg-white mt-3 border border-[#C0C5CE] rounded-[16px] h-[280px] w-[292px] flex justify-center items-center'>
                        <PlusIcon />
                    </div>
                    <div className='relative mt-3'>
                        <span className="btn btn-primary btn-file">
                            <button className='uploadBtn flex items-center justify-center gap-2 w-[292px]'>
                                <span>Ajouter un image</span>
                                <span className='arrowUp'><ArrowUpOutlined /></span>
                                <input type="file" />
                            </button>
                        </span>
                    </div>
                    <div className='mt-8'>
                        <h4 className='subTitle'>Information de l’article</h4>
                        <div className='mb-3'>
                            <label>Titre</label> <br />
                            <Input placeholder='Titre' />
                        </div>
                        <div className='mb-3'>
                            <SelectBoxWidthSearch placeholder="Catégorie" label="Catégorie" />
                        </div>
                        <div className='mb-3'>
                            <label>Contenue:</label> <br />
                            {/* <ReactQuill formats={formats} theme="snow" placeholder="Write description" /> */}
                            <QuillToolbar />
                            <ReactQuill formats={Formats}
                                modules={{
                                    toolbar: {
                                        container: "#toolbar",
                                    }, history: {
                                        delay: 500,
                                        maxStack: 100,
                                        userOnly: true
                                    }
                                }}
                                theme="snow"
                                placeholder="Blog Description"
                                value={description}
                                onChange={(data) => setDescription(data)} />
                        </div>
                        <div className='mb-3'>
                            <button className='bg-[#0094DA] rounded-[12px] text-white h-[48px] px-12 text-[16px] font-[500]'>
                                Ajouter
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </AdminLayout>
    )
}

export default CreateBlog

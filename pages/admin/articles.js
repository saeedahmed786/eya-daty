import { Table } from 'antd'
import React from 'react'
import AdminLayout from '../../components/Layouts/Admin/AdminLayout'
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons'
import AdminPagination from '../../components/Admin/Pagination'
import RightIcon from '../../icons/righticon'
import PlusIcon from '../../icons/plusIcon'
import { useRouter } from 'next/router'
import DeleteModal from '../../components/DeleteModal'

const Articles = () => {
    const router = useRouter();

    const columns = [
        {
            title: '#',
            dataIndex: 'id',
            key: 'id',
            sorter: (a, b) => a.id.length - b.id.length,
            render: (_, { id }) => (
                <>
                    <div className='text-[#0094DA] text-[12px] font-[500]'>{id}</div>
                </>
            ),
        },
        {
            title: 'Catégorie',
            dataIndex: 'category',
            key: 'category',
            sorter: (a, b) => a.category.length - b.category.length
        },
        {
            title: 'Titre',
            dataIndex: 'title',
            key: 'title',
            sorter: (a, b) => a.title.length - b.title.length,
            render: (_, { title }) => (
                <p className='textElipsisTwoLines'>
                    Une hernie discale lombaire ventrale Une hernie discale lombaire ventrale
                    Une hernie discale lombaire ventrale Une hernie discale lombaire ventrale
                    Une hernie discale lombaire ventrale Une hernie discale lombaire ventrale
                    Une hernie discale lombaire ventrale Une hernie discale lombaire ventrale
                </p>
            ),
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            sorter: (a, b) => a.date.length - b.date.length
        },
        {
            title: 'Auteur',
            dataIndex: 'author',
            key: 'author',
            sorter: (a, b) => a.author.length - b.author.length
        },
        {
            title: 'Actions',
            render: (_, { user }) => (
                <>
                    <div className='flex items-center gap-4'>
                        <EyeOutlined />
                        <EditOutlined onClick={() => router.push("/admin/update-article")} />
                        <DeleteModal deleteBtn={<DeleteOutlined style={{ verticalAlign: "middle" }} />} />
                    </div>
                </>
            ),
        },
    ];
    const data = [
        {
            id: '#53972',
            key: '1',
            title: 'Ophtalmologie',
            date: '24/05/2022',
            category: 'Chirurgie Dentaire',
            author: 'Selma Achref',
        },
        {
            id: '#53972',
            key: '2',
            title: 'Ophtalmologie',
            date: '24/05/2022',
            category: 'Chirurgie Dentaire',
            author: 'Selma Achref',
        },
        {
            id: '#53972',
            key: '3',
            title: 'Ophtalmologie',
            date: '24/05/2022',
            category: 'Chirurgie Dentaire',
            author: 'Selma Achref',
        },
    ];
    return (
        <AdminLayout sidebar>
            <div className='Pages pt-6'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 justify-center items-center py-4'>
                        <span>Accueil</span> <RightIcon /> <button className='text-[#0094DA]'>Articles</button>
                    </div>
                    <div>
                        <button className='flex items-center gap-2 bg-[#0094DA] rounded-[12px] text-white h-[48px] px-6'>
                            <PlusIcon />
                            <span className='text-[16px] font-[500]'>Ajouter un article</span>
                        </button>
                    </div>
                </div>
                <h1 className='bigTitle'>Articles</h1>
                <div className='mt-10 bg-white'>
                    <Table showSorterTooltip columns={columns} pagination={false} dataSource={data} />
                    <div className='adminPagination p-4 flex items-center justify-between my-12'>
                        <p className='text-[#65737E] text-[12px]'>Affichage de 1 à 7 sur 100 entrées</p>
                        <AdminPagination />
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default Articles

import { Table } from 'antd'
import React from 'react'
import AdminLayout from '../../components/Layouts/Admin/AdminLayout'
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons'
import AdminPagination from '../../components/Admin/Pagination'
import RightIcon from '../../icons/righticon'
import PlusIcon from '../../icons/plusIcon'
import { useRouter } from 'next/router'
import DeleteModal from '../../components/DeleteModal'

const Users = () => {
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
            title: 'Nom & Prénom',
            render: (d) => (
                <>
                    <div>
                        <h4 className='text-[#1C2126] font-[500]'>{d.name}</h4>
                        <p className='text-[#65737E] font-[400]'>{d.email}</p>
                    </div>
                </>
            ),
        },
        {
            title: 'Date de naissance',
            dataIndex: 'dob',
            key: 'dob',
            sorter: (a, b) => a.dob.length - b.dob.length
        },
        {
            title: 'Wilaya',
            dataIndex: 'wilaya',
            key: 'wilaya',
            sorter: (a, b) => a.wilaya.length - b.wilaya.length
        },
        {
            title: 'Commune',
            dataIndex: 'commune',
            key: 'commune',
            sorter: (a, b) => a.commune.length - b.commune.length
        },
        {
            title: 'Gendre',
            dataIndex: 'gender',
            key: 'gender',
            sorter: (a, b) => a.gender.length - b.gender.length
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
            name: 'Achref Maher',
            email: 'achrefmaher@gmail.com',
            dob: '24/05/2022',
            wilaya: 'Alger',
            commune: 'Bordj Elkifane',
            gender: 'Male',
        },
        {
            id: '#53972',
            key: '1',
            name: 'Nora Ahmed',
            email: 'hamzaahmed@gmail.com',
            dob: '12/02/1990',
            wilaya: 'Médea',
            commune: 'Hocine Day',
            gender: 'Female',
        },
        {
            id: '#53972',
            key: '1',
            name: 'Achref Maher',
            email: 'achrefmaher@gmail.com',
            dob: '24/05/2022',
            wilaya: 'Alger',
            commune: 'Bordj Elkifane',
            gender: 'Male',
        },
    ];
    return (
        <AdminLayout sidebar>
            <div className='Pages pt-6'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 justify-center items-center py-4'>
                        <span>Accueil</span> <RightIcon /> <button className='text-[#0094DA]'>Utilisateurs</button>
                    </div>
                </div>
                <h1 className='bigTitle'>Utilisateurs</h1>
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

export default Users

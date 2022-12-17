import React, { useState } from 'react'
import ProfileIcon from '../../assets/profile.svg';
import ProfileLayout from '../../components/Layouts/ProfileLayout'
import Image from 'next/image';
import { ArrowUpOutlined } from '@ant-design/icons';
import { Checkbox, DatePicker, Form, Input, Radio, Select } from 'antd';


const { Option } = Select;

const Profile = () => {
    const [file, setFile] = useState();
    const [gender, setGender] = useState("Male");
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <ProfileLayout sidebar>
            <div className='Profile px-10'>
                <div className='mt-0'>
                    <div className='pictureUploadContainer'>Image de profile</div>
                    <div className='flex gap-4 items-center mt-4'>
                        <Image src={ProfileIcon} width={80} alt="Profile" />
                        <div className='relative'>
                            <span className="btn btn-primary btn-file">
                                <button className='uploadBtn flex items-center gap-2'>
                                    <span>Ajouter un image</span>
                                    <span className='arrowUp'><ArrowUpOutlined /></span>
                                    <input type="file" />
                                </button>
                            </span>
                        </div>
                        <div>
                            <button className='deleteBtn'>
                                Supprimer
                            </button>
                        </div>
                    </div>
                    <Form
                        form={form}
                        name="register"
                        onFinish={onFinish}
                        scrollToFirstError
                        className='mt-10'
                    >
                        <Form.Item
                            name="name"
                            label="Nom & Prénom"
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Nom & Prénom!',
                                },
                            ]}
                        >
                            <Input placeholder='Nom & Prénom' />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label="E-mail"
                            hasFeedback
                            rules={[
                                {
                                    type: 'email',
                                    message: "Format d'e-mail incorrect",
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ]}
                        >
                            <Input placeholder='E-mail' />
                        </Form.Item>
                        <Form.Item name="radio-group" label="Gender">
                            <Radio.Group onChange={(e) => setGender(e.target.value)} value={gender}>
                                <Radio value="Male">Male</Radio>
                                <Radio value="Female">Female</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item label="Date de naissance" hasFeedback>
                            <DatePicker
                                placeholder='JJ/MM/AAAA'
                                suffixIcon={false}
                                style={{
                                    width: '100%',
                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            name="phone"
                            label="Phone"
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Phone!',
                                }
                            ]}
                        >
                            <Input placeholder='Phone' prefix={"+213"} />
                        </Form.Item>
                        <Form.Item
                            name="wilaya"
                            label="Wilaya"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select wilaya!',
                                },
                            ]}
                        >
                            <Select placeholder="Wilaya">
                                <Option value="male">Male</Option>
                                <Option value="female">Female</Option>
                                <Option value="other">Other</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="commune"
                            label="Commune"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select Commune!',
                                },
                            ]}
                        >
                            <Select placeholder="Commune">
                                <Option value="male">Male</Option>
                                <Option value="female">Female</Option>
                                <Option value="other">Other</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item className='my-5'>
                            <div className='flex gap-4'>
                                <button type="submit" className='btn px-12 bg-[#0094DA] rounded-[12px] text-white h-[56px]'>
                                    Sauvegarder
                                </button>
                                <button className='btn px-12 bg-[#C0C5CE] rounded-[12px] text-black font-[500] leading-[16px] h-[56px]'>
                                    Annuler
                                </button>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </ProfileLayout>
    )
}

export default Profile

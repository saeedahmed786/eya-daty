import { Col, Form, Input, Row } from 'antd'
import Image from 'next/image'
import React from 'react'
import RightIcon from '../icons/righticon'
import illustration from "../assets/reset.svg"
import { EyeTwoTone, EyeInvisibleTwoTone } from "@ant-design/icons"
import DownloadApp from '../components/Home/downloadApp'
import Footer from '../components/footer/footer'

const ResetPassword = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <>
            <div className='container px-5 mx-auto py-8'>
                <Row className='py-0' align="middle">
                    <Col md={12} className="pr-0 md:pr-24">
                        <div className='flex gap-2 items-center py-3'>
                            <span>Accueil</span> <RightIcon /> <a className='text-[#0094DA]' href="/reset-password">Réinitialisation du mot de passe</a>
                        </div>
                        <h1 className='text-[64px] leading-[72px] font-[700]'>Réinitialisation du mot de passe</h1>
                        <Form
                            form={form}
                            name="Reset"
                            onFinish={onFinish}
                            scrollToFirstError
                        >
                            <Form.Item
                                name="password"
                                label="Mot de passe"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input.Password placeholder='Mot de passe' iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleTwoTone />)} />
                            </Form.Item>

                            <Form.Item
                                name="confirm"
                                label="Confirm Password"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password placeholder='Répéter mot de passe' iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleTwoTone />)} />
                            </Form.Item>
                            <Form.Item className='my-5'>
                                <button type="submit" className='btn w-full bg-[#0094DA] rounded-[12px] text-white h-[56px]'>
                                    Initialiser
                                </button>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col md={12}>
                        <Image src={illustration} className="mt-4 w-full min-w-max h-full" alt="illustration" />
                    </Col>
                </Row>
            </div>
            <DownloadApp noMargin={true} />
            <Footer />
        </>
    )
}

export default ResetPassword

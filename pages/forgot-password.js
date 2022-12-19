import { Col, Form, Input, Row, Switch } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import RightIcon from '../icons/righticon'
import illustration from "../assets/forgot.svg"
import DownloadApp from '../components/Home/downloadApp'
import Footer from '../components/footer/footer'
import { useRouter } from 'next/router'
import MainLayout from '../components/Layouts/MainLayout'

const ForgotPassword = () => {
    const [form] = Form.useForm();
    const router = useRouter();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        router.push("/reset-password")
    };

    return (
        <MainLayout navbar>
            <div className='container px-5 mx-auto py-8'>
                <Row className='py-0' align="middle">
                    <Col md={12} className="pr-0 md:pr-24">
                        <div className='flex gap-2 items-center py-4'>
                            <span>Accueil</span> <RightIcon /> <Link className='text-[#0094DA]' href="/forgot-password">Oublié le mot de passe</Link>
                        </div>
                        <h1 className='text-[64px] leading-[72px] font-[700]'>Mot de passe oublié?</h1>
                        <p className='my-4'>Des instructions sur la façon de réinitialiser votre mot de passe seront envoyées à votre adresse e-mail.</p>
                        <Form
                            form={form}
                            name="ForgotPassword"
                            onFinish={onFinish}
                            scrollToFirstError
                        >
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
                            <Form.Item className='my-5'>
                                <button type="submit" className='btn w-full bg-[#0094DA] rounded-[12px] text-white h-[56px]'>
                                    Envoyer
                                </button>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col md={12}>
                        <Image src={illustration} alt="illustration" />
                    </Col>
                </Row>
            </div>
            <DownloadApp noMargin={true} />
            <Footer />
        </MainLayout>
    )
}

export default ForgotPassword

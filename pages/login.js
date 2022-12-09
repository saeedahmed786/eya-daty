import { Col, Divider, Form, Input, Row, Switch } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import RightIcon from '../icons/righticon'
import google from "../assets/google.svg"
import facebook from "../assets/facebook.svg"
import twitter from "../assets/twitter.svg"
import illustration from "../assets/illustration.svg"
import { EyeTwoTone, EyeInvisibleTwoTone } from "@ant-design/icons"
import DownloadApp from '../components/Home/downloadApp'
import Footer from '../components/footer/footer'
import { useRouter } from 'next/router'

const Login = () => {
    const [form] = Form.useForm();
    const router = useRouter();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <>
            <div className='container px-5 mx-auto py-8'>
                <div className='flex gap-2 items-center'>
                    <span>Accueil</span> <RightIcon />  <button className='text-[#0094DA] border-0' onClick={() => router.push("/signup")}>Connexion</button>
                </div>
                <Row className='py-10'>
                    <Col md={12}>
                        <h1 className='text-[64px] leading-[72px] font-[700]'>Connectez-vous à votre compte</h1>
                        <div className='flex gap-2 py-6'>
                            <div>{"Vous n'avez pas de compte ?"}</div>
                            <button className='text-[#0094DA] border-0' onClick={() => router.push("/signup")}>Créer un compte</button>
                        </div>
                        <Form
                            form={form}
                            name="Login"
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
                            <div className='flex justify-between'>
                                <div className='flex items-center gap-2'>
                                    <Switch className='bg-gray border border-[#A7ADBA] rounded-[12px]' />
                                    <span>souviens-toi de moi</span>
                                </div>
                                <div>
                                    <button className='text-[#0094DA] border-0' onClick={() => router.push("/forgot-password")}>{"j'ai oublie le mot de passe?"}</button>
                                </div>
                            </div>
                            <Form.Item className='my-5'>
                                <button type="submit" className='btn w-full bg-[#0094DA] rounded-[12px] text-white h-[56px]'>
                                    Connexion
                                </button>
                            </Form.Item>
                        </Form>
                        <Divider className='my-4' plain>Ou</Divider>
                        <div className='flex justify-center gap-4'>
                            <button className='p-4 rounded-[50%] border border-[#C0C5CE] flex items-center justify-center'>
                                <Image src={google} alt="Google" width="32px" />
                            </button>
                            <button className='p-4 rounded-[50%] border border-[#C0C5CE] flex items-center justify-center'>
                                <Image src={facebook} alt="Google" width="32px" />
                            </button>
                            <button className='p-4 rounded-[50%] border border-[#C0C5CE] flex items-center justify-center'>
                                <Image src={twitter} alt="Google" width="32px" />
                            </button>
                        </div>
                    </Col>
                    <Col md={12}>
                        <Image src={illustration} alt="illustration" />
                    </Col>
                </Row>
            </div>
            <DownloadApp noMargin={true} />
            <Footer />
        </>
    )
}

export default Login

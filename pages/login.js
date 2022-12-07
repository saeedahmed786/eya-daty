import { Col, Divider, Input, Row, Switch } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import RightIcon from '../icons/righticon'
import google from "../assets/google.svg"
import facebook from "../assets/facebook.svg"
import twitter from "../assets/twitter.svg"
import illustration from "../assets/illustration.svg"

const Login = () => {
    return (
        <div className='container px-5 mx-auto py-8'>
            <div className='flex gap-2 items-center'>
                <span>Account</span> <RightIcon /> <a className='text-[#0094DA]' href="/login">Connexion</a>
            </div>
            <Row className='py-10'>
                <Col md={12}>
                    <h1 className='text-[64px] leading-[72px] font-[700]'>Connectez-vous à votre compte</h1>
                    <div className='flex gap-2 py-6'>
                        <div>{"Vous n'avez pas de compte ?"}</div>
                        <a href='/register' className='text-[#0094DA]'>Créer un compte</a>
                    </div>
                    <form>
                        <div className='my-4'>
                            <label>E-mail</label>
                            <Input type='email' placeholder='E-mail' />
                        </div>
                        <div className='my-4'>
                            <label>Mot de passe</label>
                            <Input.Password type='password' placeholder='Mot de passe' />
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <Switch className='bg-gray border border-[#A7ADBA] rounded-[12px]' />
                                <span>souviens-toi de moi</span>
                            </div>
                            <div>
                                <a className='text-[#0094DA]' href='/reg'>{"j'ai oublie le mot de passe?"}</a>
                            </div>
                        </div>
                        <div className='my-4'>
                            <button className='btn w-full bg-[#0094DA] rounded-[12px] text-white h-[56px]'>Connexion</button>
                        </div>
                    </form>
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
    )
}

export default Login

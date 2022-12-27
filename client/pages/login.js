import { Col, Divider, Form, Input, Row, Switch } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'
import RightIcon from '../icons/righticon'
import google from "../assets/google.svg"
import facebook from "../assets/facebook.svg"
import twitter from "../assets/twitter.svg"
import illustration from "../assets/Illustration.svg"
import { EyeTwoTone, EyeInvisibleTwoTone } from "@ant-design/icons"
import DownloadApp from '../components/Home/downloadApp'
import { useRouter } from 'next/router'
import MainLayout from '../components/Layouts/MainLayout'
import { ErrorMessage, SuccessMessage } from '../Messages/messages'
import { Loading } from '../Loading/Loading'
import axios from "axios"
import { Cookies } from 'react-cookie'
import { GoogleLogin } from 'react-google-login';
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import FacebookLogin from 'react-facebook-login';


const Login = () => {
    const cookies = new Cookies;
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const onFinish = async (values) => {
        const { email, password } = values;
        setLoading(true);
        await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/login`, { email, password }).then(res => {
            setLoading(false);
            if (res.statusText === "OK") {
                cookies.set('user', res.data.user, { path: '/' });
                cookies.set('token', res.data.token, { path: '/' });

                SuccessMessage(res.data.successMessage);
                router.push('/');
                setTimeout(() => {
                    document.location.reload();
                }, 2000);
            }
            else {
                ErrorMessage(res.data.errorMessage);
            }
        })
    };


    const sendGoogleToken = (tokenId) => {
        axios
            .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/google-login`, {
                idToken: tokenId,
            })
            .then((res) => {
                if (res.statusText === "OK") {
                    cookies.set('user', res.data.user, { path: '/' });
                    cookies.set('token', res.data.token, { path: '/' });

                    SuccessMessage(res.data.successMessage);
                    router.push('/');
                    setTimeout(() => {
                        document.location.reload();
                    }, 2000);
                }
                else {
                    ErrorMessage(res.data.errorMessage);
                }
            })
            .catch((error) => {
                console.log("GOOGLE SIGNIN ERROR", error.response);
            });
    };

    const sendFacebookToken = (userID, accessToken) => {
        axios
            .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/facebook-login`, {
                userID,
                accessToken,
            })
            .then((res) => {
                if (res.statusText === "OK") {
                    cookies.set('user', res.data.user, { path: '/' });
                    cookies.set('token', res.data.token, { path: '/' });

                    SuccessMessage(res.data.successMessage);
                    router.push('/');
                    setTimeout(() => {
                        document.location.reload();
                    }, 2000);
                }
                else {
                    ErrorMessage(res.data.errorMessage);
                }
            })
            .catch((error) => {
                console.log("GOOGLE SIGNIN ERROR", error.response);
            });
    };

    const responseGoogle = (response) => {
        console.log(response)
        sendGoogleToken(response.tokenId);
    };

    const responseFacebook = (response) => {
        if (response && response.userID) {
            sendFacebookToken(response.userID, response.accessToken);
        }
    };

    console.log(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID)

    return (
        <MainLayout navbar>
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
                        {
                            loading ?
                                <Loading />
                                :
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
                                    <Form.Item className='my-5'>
                                        <div className='flex justify-between'>
                                            <div className='flex items-center gap-2'>
                                                <Switch className='bg-gray border border-[#A7ADBA] rounded-[12px]' />
                                                <span>souviens-toi de moi</span>
                                            </div>
                                            <div>
                                                <button type='button' className='text-[#0094DA] border-0' onClick={() => router.push("/forgot-password")}>{"j'ai oublie le mot de passe?"}</button>
                                            </div>
                                        </div>
                                    </Form.Item>
                                    <Form.Item className='my-5'>
                                        <button type="submit" className='btn w-full bg-[#0094DA] rounded-[12px] text-white h-[56px]'>
                                            Connexion
                                        </button>
                                    </Form.Item>
                                </Form>
                        }
                        <Divider className='my-4' plain>Ou</Divider>
                        <div className='flex justify-center gap-4'>
                            <div className='social-logins mt-4'>
                                <GoogleLogin
                                    clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
                                    buttonText="Login"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    autoLoad={false}
                                    className="w-100 text-center"
                                    cookiePolicy={"single_host_origin"}
                                />
                                <br />
                                <br />
                                <FacebookLogin
                                    appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}
                                    autoLoad={false}
                                    fields="name,email,picture"
                                    callback={responseFacebook}
                                    cssClass="my-facebook-button-class"
                                // icon={<TiSocialFacebookCircular />}
                                >kqwdjwkdq</FacebookLogin>
                                {/* <FacebookLogin
                                    appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}
                                    autoLoad={false}
                                    onClick={(res) => responseFacebook(res)}
                                    callback={(res) => responseFacebook(res)}
                                    fields
                                    render={(renderProps) => (
                                        <button
                                            onClick={renderProps}
                                            className="btn btn-primary btn-signup-login w-100"
                                            style={{ backgroundColor: "#5266fc" }}
                                        >
                                            <div className="">
                                                <i className="fab fa-facebook px-2" />
                                                <span>Sign In with Facebook</span>
                                            </div>
                                        </button>
                                    )}
                                /> */}
                                {/* <button className='p-4 rounded-[50%] border border-[#C0C5CE] flex items-center justify-center'>
                                    <Image src={google} alt="Google" width="32px" />
                                </button>
                                <button className='p-4 rounded-[50%] border border-[#C0C5CE] flex items-center justify-center'>
                                    <Image src={facebook} alt="Google" width="32px" />
                                </button>
                                <button className='p-4 rounded-[50%] border border-[#C0C5CE] flex items-center justify-center'>
                                    <Image src={twitter} alt="Google" width="32px" />
                                </button> */}
                            </div>
                        </div>
                    </Col>
                    <Col md={12}>
                        <Image src={illustration} alt="illustration" />
                    </Col>
                </Row>
            </div>
            <DownloadApp noMargin={true} />
        </MainLayout>
    )
}

export default Login

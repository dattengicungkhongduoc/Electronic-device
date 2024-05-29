import React, { useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputFormComponent from '../../Components/InputFormComponent/InputFormComponent'
import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent'
import ImageLogo from '../../assets/images/logo_login.png'
import { Image } from 'antd'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';

const SignUpPage = () => {
    const [isShowPassword] =useState(false)
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.53)', height: '100vh' }}>
            <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex' }}>

                <WrapperContainerLeft>
                    <h1 style={{ fontSize: '24px', fontWeight: '10px' }}> Xin chào</h1>
                    <p style={{ fontSize: '13px' }}>Tạo tài khoản hoặc đăng nhập : </p>
                    <InputFormComponent style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" />
                    <div style={{ position: 'relative' }}>
                        <span
                            style={{
                                zIndex: 10,
                                position: 'absolute',
                                top: '4px',
                                right: '8px'
                            }}
                        >{
                                isShowPassword ? (
                                    <EyeFilled />
                                ) : (
                                    <EyeInvisibleFilled />
                                )
                            }
                        </span>
                        <InputFormComponent style={{ marginBottom: '10px' }} placeholder="password" type={isShowPassword ? "text" : "password"} />
                    </div>

                    <div style={{ position: 'relative' }}>
                        <span
                            style={{
                                zIndex: 10,
                                position: 'absolute',
                                top: '4px',
                                right: '8px'
                            }}
                        >{
                                isShowPassword ? (
                                    <EyeFilled />
                                ) : (
                                    <EyeInvisibleFilled />
                                )
                            }
                        </span>
                        <InputFormComponent style={{ marginBottom: '10px' }} placeholder="confirm password" type={isShowPassword ? "text" : "password"} />
                    </div>

                        <ButtonComponent
                            size={40}
                            styleButton={{
                                background: 'rgb(255, 57, 69)',
                                height: '48px',
                                width: '100%',
                                border: 'none',
                                borderRadius: '4px',
                                margin: '26px 0 10px'
                            }}
                            textButton={'Đăng ký tài khoản'}
                            styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}>
                        </ButtonComponent>

                        <p style={{ fontSize: '13px' }}>Đã có tài khoản? <WrapperTextLight>Đăng nhập ngay</WrapperTextLight> </p>

                </WrapperContainerLeft>

                <WrapperContainerRight>
                    <Image src={ImageLogo} preview={false} alt="image-logo" style={{ borderRadius: '50%', width: '205px', height: '205px' }} />
                    <h4 style={{ fontSize: '13px' }}>Mua sắm tại THEGIOIDIENTU</h4>
                </WrapperContainerRight>
            </div>
        </div>
    )
}

export default SignUpPage

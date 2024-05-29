import { Col, Badge } from 'antd'
import React from 'react'
import { WrapperHeader, WrapperTextHeader, WrapperHeaderAccout, WrapperTextHeaderSmall } from './style'
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch'
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons'

const HeaderComponent = () => {
  return (
    <div >
      <WrapperHeader >
        <Col span={6}>
          <WrapperTextHeader style={{display:'flex', alignItems:'center', justifyContent:'center'}}>THEGIOIDIENTU</WrapperTextHeader>
        </Col>
        <Col span={11}>
          <ButtonInputSearch
            textButton="Tìm kiếm"
            placeholder="input search text"
            size="large"
            bordered="false"
          //onSearch={onSearch}
          />
        </Col>
        <Col span={9} style={{ display: 'flex', gap: '54px', alignItems: 'center' }}>
          <WrapperHeaderAccout>
            <UserOutlined style={{ fontSize: '30px' }} />

            <div>
              <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>

            </div>
          </WrapperHeaderAccout>
          <div>
            <Badge count={4} size="small">
              <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
            </Badge>
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent
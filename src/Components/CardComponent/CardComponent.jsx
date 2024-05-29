import React from 'react'
import { StyleNameProduct, WrapperReportText, WrapperPriceText, WrapperDiscountText, WrapperCardStyle, WrapperStyleTextSell } from './style'
import { StarFilled } from '@ant-design/icons'


const CardComponent = () => {
    return (
        <WrapperCardStyle
            hoverable
            styles={{
                header: {
                    width: '200px',
                    height: '200px'
                },
                body: {
                    padding: '10px'
                }
            }}
            style={{ width: 236 }}
            cover={<img alt="example" src="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/s/ss-s24-ultra-xam-222.png" />}
        >
            <StyleNameProduct>SamSung</StyleNameProduct>
            <WrapperReportText >
                <span style={{ marginRight: '4px' }}>
                    <span>4.96</span>
                    <StarFilled style={{ fontSize: '12px', color: 'rgb( 253, 216, 54)' }} />
                </span>
                <WrapperStyleTextSell>| Đã bán 1000+ </WrapperStyleTextSell>

            </WrapperReportText>
            <WrapperPriceText>
                <span style={{ marginRight: '8px' }}>1.000.000VND</span>
                <WrapperDiscountText>
                    -5%
                </WrapperDiscountText>
            </WrapperPriceText>
        </WrapperCardStyle>
    )
}

export default CardComponent

import React from 'react'
import { Button } from 'antd'

const ButtonComponent = ({ size, styleButton, styleTextButton, textButton, bordered, ...rests }) => {
    return (
        <Button
            size={size}
            bordered={bordered}
            {...rests}
            //icon={<SearchOutlined style={{ color: colorButton }} />}
            style={styleButton} >
            <span style={styleTextButton}>{textButton}</span>
        </Button>
    )
}

export default ButtonComponent

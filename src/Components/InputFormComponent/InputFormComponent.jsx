
import React, { useState } from 'react'
import { WrapperInputStyle} from './style'


const InputFormComponent = (props) => {
    const [valueInput] = useState('')          //, setValueInput
    const {placeholder= 'Nhập text ',...rests} = props
  return (
    <div>
      <WrapperInputStyle placeholder={placeholder} valueInput={valueInput} {...rests} /> 
      
    </div>
  )
}

export default InputFormComponent

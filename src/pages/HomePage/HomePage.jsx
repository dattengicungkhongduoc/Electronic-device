import React from "react";
import CardComponent from "../../Components/CardComponent/CardComponent";
import SliderComponent from "../../Components/SliderComponent/SliderComponent";
import TypeProduct from "../../Components/TypeProduct/TypeProduct";

import { WrapperTypeProduct, WrapperButtonMore, WrapperProducts } from "./style";
import slider1 from '../../assets/images/slider1.webp';
import slider2 from '../../assets/images/slider2.webp';
import slider3 from '../../assets/images/slider3.webp';
import slider4 from '../../assets/images/slider4.webp';
import slider5 from '../../assets/images/slider5.webp';



const HomePage = () => {
    const arr = ['TV', 'Laptop', 'Dien thoai']
    return (
        <>
            <div id="container" style={{ backgroundColor: '#efefef', padding: '0 120px', width: '100%' }} >
            <div>
                <WrapperTypeProduct>
                    {arr.map((item) => {
                        return (
                            <TypeProduct name={item} key={item} />
                        )
                    })}
                </WrapperTypeProduct>
            </div>
                <SliderComponent arrImages={[slider1, slider2, slider3, slider4, slider5]} />
                <WrapperProducts>
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                </WrapperProducts>

                <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '30px', marginBottom: '30px'}}>
                <WrapperButtonMore textButton="Xem thêm" type="outline"
                    styleButton={{
                        border: '1px solid rgb(11, 116, 229)',
                        color: 'rgb(11, 116, 229)',
                        width: '240px',
                        height: '38px',
                        borderRadius: '4px',
                    }}
                    styleTextButton={{ fontWeight: 500 }}

                />
                </div>
                
            </div>



        </>
    )
};

export default HomePage;
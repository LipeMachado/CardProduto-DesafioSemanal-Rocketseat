import { useState } from 'react';

import SofaAnimated from '../../Assets/sofaAnimated.gif'
import SofaPng from '../../Assets/sofa.png'
import { Button360 } from '../Button360'
import { ButtonClose } from '../ButtonClose'

export function CardProduct() {
    const [image, setImage] = useState("img1")

    let imagens = {
        img1: SofaPng,
        img2: SofaAnimated,
    }

    const switchImage = () => {
        setImage((state) => (state === "img1" ? "img2" : "img1"));
    }

    return (
        <>
            <div className="w-5/6 lg:h-4/5 bg-[#d9cdf7] rounded-2xl flex flex-col justify-center items-center gap-16 p-6 lg:flex-row">
                <div className="relative">
                    <button className="absolute right-0" onClick={switchImage}>
                        {image === "img1" ? <Button360 /> : <ButtonClose />}
                    </button>
                    <img className="w-full h-[160px] lg:w-[449px] lg:h-[245px]" src={imagens[image]} />
                </div>
                <div className="flex flex-col gap-4 font-poppins">
                    <span className="text-xs font-light">CÓDIGO: 42404</span>
                    <h1 className="text-2xl font-semibold">Sofá Margot II - Rosé</h1>
                    <span className="text-base font-normal">R$ 4.000</span>
                    <div>
                        <button className="py-2 px-4 border-2 border-solid border-black rounded-xl font-normal text-sm hover:bg-[#533f81] hover:text-white-10 focus:outline-none focus:ring focus:ring-[#533f81]">Adicionar à cesta</button>
                    </div>
                </div>
            </div>
        </>
    )
}
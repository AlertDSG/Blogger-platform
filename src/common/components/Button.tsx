import React, {FC} from 'react';

type ButtonType = {
    name: string
    onclickHandler: () => void
    className?: string
    classNameForArrow?: string
    img?: string
}

export const Button: FC<ButtonType> = ({onclickHandler, name, className,classNameForArrow, img}) => {
    return (
            <button className={className} onClick={onclickHandler}>
                {name}
                {img &&<img src={img} alt='arrow' className={classNameForArrow}/>}
            </button>
    );
};
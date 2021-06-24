import {ButtonHTMLAttributes} from 'react'

import '../styles/button.scss'

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement>

export default function Button(props: BtnProps) {
    return (
        <button  className="button" {...props}/>
    )
}

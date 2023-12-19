import React from 'react'
import style from './Loader.module.css'

export const Loader = () => {
    return (

        <div className={style.loader}>
            <span className={style.loaderText}>loading</span>
            <span className={style.load}></span>
        </div>

    )
}

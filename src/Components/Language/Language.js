import { changeLanguage } from 'i18next'
import React from 'react'

const Languages = [
    {code: "en", lang: "English"},
    {code: "fr", lang: "French"},
    {code: "hi", lang: "Hindi"}
]

const changeLanguage = ()=>{};

const Language = () => {
  return (
    <div className='btn-container'>
        {Languages.map((lng)=>{
            return <button key={lng.code} onClick ={()=>changeLanguage()}>{lng.lang}</button>
        })}

    </div>
  )
}

export default Language
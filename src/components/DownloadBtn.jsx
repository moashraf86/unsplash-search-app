import React from 'react'

const  DownloadBtn =  (props) => {
  return (
    <a 
    className='absolute bottom-[-50px] opacity-0 left-[50%] translate-x-[-30px] px-2 py-2 bg-slate-50 text-slate-900 rounded-md text-[12px] font-semibold z-[100]'
    href={props.href} 
    target='_blank' 
    rel="noreferrer">Download</a>
  )
}

export default DownloadBtn
import React from 'react'

const Button = ({children, type='button' }) => {
  return (
    <button type={type} className='px-5 py-3 text-xs text-white rounded-lg  bg-[#E50000]'>
        {children}
    </button>
  )
}

export default Button
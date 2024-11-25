import React from 'react'

const Button = ({children, type='button', className='px-5 py-3 text-xs text-white rounded-lg  bg-[#E50000]'}) => {
  return (
    <button type={type} className={className}>
        {children}
    </button>
  )
}

export default Button
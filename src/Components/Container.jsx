import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={ ` max-w-[1398px] mx-auto sm:px-[16px] md:px-[14px] lg:px-0 ${className}`}>
      {children}
    </div>
  )
}

export default Container

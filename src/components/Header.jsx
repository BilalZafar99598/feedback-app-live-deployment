import React from 'react'

const Header = ({text,bgColor, textColor}) => {

    const headerStyle = {backgroundColor:bgColor, color: textColor};

  return (
    <>
      <header style={headerStyle}>
        <div className="container">
            <h2>{text}</h2>
        </div>
      </header>
    </>
  )
}

export default Header

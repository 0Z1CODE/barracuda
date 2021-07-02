import React from 'react';

const SubBtn = ({text, href}) => {
  return (
    <>
      <div className="SubBtn">
        <a href={href} className="custom__link">
          {text}
        </a>
      </div>
    </>
  )
}

export default SubBtn
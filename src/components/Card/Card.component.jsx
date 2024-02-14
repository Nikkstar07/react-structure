import React from 'react'
import Playicon from '../../assets/Card/playicon.svg'

const Card = ({index}) => {
  return (
    <div className='bg-[#FAFAFA] p-5 '>
        <div className='flex gap-2 items-center'>
            <img src={Playicon} alt="" />
            <div>Play trailer {index}</div>
        </div>
    </div>
  )
}

export default Card
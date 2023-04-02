import React from 'react'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
export default function Rating({ratting, handleCLick}) {
  return (
    <>
       {
        [...Array(5)].map((_, index)=>(
            <span key={index} onClick={()=> handleCLick(index)}>
            {
                ratting > index ?
                (<AiFillStar fontSize='15px' />) :
                (<AiOutlineStar fontSize='15px' />)
            }
            </span>
        ))
        
        }
    </>
  )
}

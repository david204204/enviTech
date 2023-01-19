import { useState } from 'react';
import data from './Legends.json'

const MainButton = ({btn,id,key,onClickFunc,liftUpData,LegendId}) => {

    


    
    return(
        <>
        {/* <form onSubmit={handleSubmit}></form> */}
            <button
            id={id}
            key={key}
            onClick={()=> liftUpData(onClickFunc(data,LegendId))}
            
            >
            {btn}
            </button>
        
        
            
            
        </>
    )
}

export default MainButton;
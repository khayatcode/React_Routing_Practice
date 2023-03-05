import React from 'react'
import { useParams } from "react-router-dom";


const Word = () => {
    const {title, textClr, bgClr} = useParams()
    const styling = {
        color: textClr,
        background: bgClr
    }

    if(!isNaN(title)){
        console.log(title)
        return (
            <div className='mt-3'>
                <h1>The number is: {title}</h1>
            </div>
        )
    }else if (textClr, bgClr){
        console.log(title,textClr,bgClr)
        return (
            <div className='mt-3'>
                <h1 className='p-3' style={styling}>word is: {title}</h1>
            </div>
        )
    
    }else{
        console.log(title)
        return (
            <div className='mt-3'>
                <h1 className='p-3' >word is: {title}</h1>
            </div>
        )
    }

}
// Could also do it this way:
// return(
//     <div>
//     { isNaN(title)? 
//         <p style={
//             textClr? 
//             {color: textClr, backgroundColor: bgClr}
//             :null
//         }>
//             This is a word: {title}
//         </p>
//         :
//         <p>
//             This is a number: {title}
//         </p>
//     }

// </div>
// )
// }

export default Word
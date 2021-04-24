import React, { useEffect } from 'react'
import UseStorage from '../hooks/UseStorage'

const ProgressBar = ({file,setFile}) => {

    const {url,progress} = UseStorage(file)
    //  console.log(url,progress)

     useEffect(()=>{

        if(url){
            setFile(null)
        }

     },[url,setFile ])

return (

<div className ="progress-Bar" style= {{ height:'5px',background: 'red', width: progress + '%'}}>

  <p>Progress</p>
 
</div>

)


}

export  default ProgressBar ;
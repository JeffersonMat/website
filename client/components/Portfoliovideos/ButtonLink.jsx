import React from 'react';


function ButtonLink(props){
   
    return (
    <>
        {
            props.content.src === "" ? <></>
              
            : 
                <div className="button-fixed">
                    <a
                        className="btn waves-effect white grey-text darken-text-2 portfolio-button"
                        target="_blank"
                        href={`${props.content.src}`}
                    >
                        Visit App
              </a>
                </div>
       }
           
        </>
    )
}
    
    export default ButtonLink
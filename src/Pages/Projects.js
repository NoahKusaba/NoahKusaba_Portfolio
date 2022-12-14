import React from "react"
import data from "../PageData/Projects.json"

export default function Projects(){

    return (

        <div className="sliderImage"> 
        {data.map((slide,idx) => {
            return(

                <div className={`FlexPage ${slide.hiddenPage}`} key={idx}>
             
                    <img  alt="Projects" id={slide.imageID}/>
                    <div className="pageTitle">{slide.title}</div>
                    <ul  className="textBorder">
                    {slide.list.map((listElement,listIdx) => {
                        return(
                            <li key={slide.title.concat(listIdx)} className="bodyText">{listElement}</li>
                        )
                    })}
                    </ul>
                </div>    
            )
        })}

        </div>
 )
}


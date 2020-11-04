import React from "react"
import "./form.css"
function FormModule (props){

    const rightImageUrl = props.data.pageLayout[props.id].displayimage.localFile.childImageSharp.fluid.originalImg
  
    const color = props.data.pageLayout[props.id].color
    const background = props.data.pageLayout[props.id].backgroundImage
    console.log(props.id)
    return (
  <div className="formWrapper" style={{
    backgroundColor: "black",
    background: `url(${background})`}} > 
    
    <div class="formWrapper__col1">
        <form className="formFlex">
        <lable for="firstname"> Förnamn</lable>
        <input type="text" id="firstname" name="firstname"/> 
        <lable for="lastname"> Efternamn</lable>
        <input type="text" id="lastname" name="lastname"/>
        <lable for="emai"> E-post</lable>
        <input type="text" id="email" name="email"/>
        <lable for="phone"> Telefon</lable>
        <input type="text" id="phone" name="phone"/>
        <lable for="message"> Meddelande</lable>
        <input type="textfield" id="message" name="message"/>
        <input type="submit"/>
        </form>
    </div>
  
    <div class="formWrapper__col2">
     <img src={rightImageUrl}/>
    </div>
    </div>
    )
  }

  export default FormModule
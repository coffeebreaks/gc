import React from "react"

import { Link } from "gatsby"

import Img from "gatsby-image"
// import Layout from "../../components/layout"
import { normalizePath } from "../../utils/get-url-path"
import Header from "../../components/header"

function BlogPost({ data }) {
  const { nextPage, module, previousPage, page } = data
  const { title, content, featuredImage,  } = page

function FormModule (){

  return (
<div className="formWrapper" style={{background: `url("https://images.unsplash.com/photo-1556139943-4bdca53adf1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80")`}}> 

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
   <img src="file://c:/1/1.png"/>
  </div>
  </div>
  )
}

function Red (){
  return (<> Röd</>)
}

function Blue (){
  return (<> Blå</>)
}
const mods = {
  page_AcfModule_PageLayout_GreenComponent : FormModule,
  page_AcfModule_PageLayout_RedComponent : Red,
  page_AcfModule_PageLayout_BlueComponent : Blue,

}

function CreateMod(props) {
  let ModType = mods[props.mod]
  return (

    <div>
    <ModType/>
    </div>
  )
}


  return (
    <div>
      <Header/>
  <h1>hew</h1> 
 {page.ACF_MODULE.pageLayout.map(x => 

   <CreateMod mod={x.fieldGroupName}/>

   )}
  <p> {data.allWpPage.edges[0].node.uri} </p>
  
    </div>
  )
}

export default BlogPost

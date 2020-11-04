import React from "react"

import { Link } from "gatsby"

import Img from "gatsby-image"
// import Layout from "../../components/layout"
import { normalizePath } from "../../utils/get-url-path"
import Header from "../../components/header"
import FormModule from "../../components/customModules/form"

function BlogPost({ data }) {
  const { nextPage, module, previousPage, page } = data
  const { title, content, featuredImage,  } = page


function Red (){
  return (<> Röd</>)
}

function Blue (){
  return (<> Blå</>)
}
const mods = {
  page_AcfModule_PageLayout_Formcomponent : FormModule,
  page_AcfModule_PageLayout_RedComponent : Red,
  page_AcfModule_PageLayout_BlueComponent : Blue,

}

function CreateMod(props) {
  let ModType = mods[props.mod]
  return (

    <div>
    <ModType data={props.data} id={props.id}/>
    </div>
  )
}


  return (
    <div>
      <Header/>
  <h1>hew</h1> 
 {page.ACF_MODULE.pageLayout.map((x,i) => 

   <CreateMod mod={x.fieldGroupName} data={page.ACF_MODULE} id={i}/>

   )}
  <p> {data.allWpPage.edges[0].node.uri} </p>
  
    </div>
  )
}

export default BlogPost

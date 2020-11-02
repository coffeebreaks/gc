import React from "react"
import { Heading, Box, Grid } from "@chakra-ui/core"
import { graphql, Link, StaticQuery } from "gatsby"
import GatsbyLogo from "../assets/svg/gatsby.inline.svg"

export default () => (
  <div>
    <StaticQuery 
      query={
        graphql`
      
      query MyQuery {
  allWpPage(filter: {title: {eq: "Options"}}) {
                edges {
                  node {
                    ACF_SETTINGS {
                      pageLogo {
                        localFile {
                          childImageSharp {
                            fluid {
                              originalImg
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }

              links: allWpPage {
                edges {
                  node {
                    title
                    uri
                  }
                }
              }          

}

    `}

    render={ data=> ( 
    <div>
    
    <img src={data.allWpPage.edges[0].node.ACF_SETTINGS.pageLogo.localFile.childImageSharp.fluid.originalImg}/> 
    

    {data.links.edges.map(x=> <a href={x.node.uri}> {x.node.title}</a>)}


    </div>
    )}

    />

   
  </div>
)

import React from "react"
import { graphql } from "gatsby"
import BlogPost from "../../components/template-parts/blog-post"

export default ({ data }) => <BlogPost data={data} />

export const query = graphql`

  query page($id: String!, $nextPage: String, $previousPage: String) {
    page: wpPage(id: { eq: $id }) {
      title
      content
      ACF_MODULE {
          pageLayout {
            ... on WpPage_AcfModule_PageLayout_RedComponent {
              text
              fieldGroupName
            }
            ... on WpPage_AcfModule_PageLayout_BlueComponent {
              fieldGroupName
              text
            }
            ... on WpPage_AcfModule_PageLayout_Formcomponent {
              fieldGroupName
              text
              color

                  displayimage {
                    localFile {
                      childImageSharp {
                        fluid {
                          originalImg
                        }
                      }
                    }
                  }

                  backgroundImage {
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
      featuredImage {
        node {
          remoteFile {
            ...HeroImage
          }
        }
      }
    }

  allWpPage {
    edges {
      node {
        uri
        ACF_MODULE {
          pageLayout {
            ... on WpPage_AcfModule_PageLayout_RedComponent {
              text
              fieldGroupName
            }
            ... on WpPage_AcfModule_PageLayout_BlueComponent {
              fieldGroupName
              text
            }
            ... on WpPage_AcfModule_PageLayout_Formcomponent {
              fieldGroupName
              text
            }
          }
        }
      }
    }
  }



# settings: allWpPage(filter: {title: {eq: "Options"}}) {
#       edges {
#         node {
#           ACF_SETTINGS {
#             pageLogo {
#               localFile {
#                 childImageSharp {
#                   fluid {
#                     originalImg
#                   }
#                 }
#               }
#             }
#           }
#         }
#       }
#     }


    nextPage: wpPage(id: { eq: $nextPage }) {
      title
      uri
    }

    previousPage: wpPage(id: { eq: $previousPage }) {
      title
      uri
    }
  }
`

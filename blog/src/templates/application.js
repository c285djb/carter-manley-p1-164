import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const Application = ({ data }) => {
    const { title } = data.contentfulApplication;
    return(
        <Layout>
            <h1>{ title }</h1>
            {/* <div dangerouslySetInnerHTML={{__html: description.childMarkdownRemark.html}}></div> */}
        </Layout>
    );
}

export default Application;

export const pageQuery = graphql`
    query applicationQuery($slug: String!){
        contentfulApplication(slug: {eq: $slug}) {
            title
            slug
    		# description{
            #   childMarkdownRemark{
            #     html
            #   }
            # }
        }
    }
`
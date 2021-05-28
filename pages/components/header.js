import React, { Component } from 'react'
import {
    Header,
    Container,Segment
} from 'semantic-ui-react';
import Layout from './layout';
const Head = ()=>(
   
    <Container text>
        <link
                rel="stylesheet" 
                href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
            
        <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 50, padding: '1em 0em' }}
            vertical
           
            >
         <Header
      as='h1'
      content='Weather Report'
      inverted
      style={{
        fontSize:'4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: '.5em',
      }}
    />
    </Segment>
    
    </Container>
  
)

export default Head
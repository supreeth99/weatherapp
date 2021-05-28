import React, { Component } from "react";
import { Dropdown,Grid,Card,Container,Segment,Header,Form,Input,Button } from 'semantic-ui-react'
import Layout from './layout';

class MyComponent extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        city:"chennai",
        temp:"",
        description:"",
        temp_min:"",
        temp_max:"",
        humidity:""

      };
    }
  //   componentDidMount() {
    
  //   fetch("https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=a0a0e7eb9508b1beccefd9bd1207f35f")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         const data = result;
  //         this.setState({
  //           isLoaded: true,
  //           items: data
  //         });
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     )
  //     console.log(this.state.items);
  // }
  
    
    handleChange = (e) => {
      e.preventDefault();
      //console.log("handlechange 1st:",this.state.city);
      //console.log(this.textInput.value)
      const newCity = this.state.city;
      //console.log("newcity:",newCity)
      //console.log('submitted');
      this.setState({city:newCity})
     // console.log("after change state:",this.state.city)
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=a0a0e7eb9508b1beccefd9bd1207f35f`)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: JSON.stringify(result),
          temp: result.main.temp,
          description:JSON.stringify(result.weather[0].description),
          temp_min:result.main.temp_min,
          temp_max:result.main.temp_max,
          humidity:result.main.humidity,
       });
        //console.log((result['main'].temp))
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
    // console.log((this.state.items['main']['temp']))
   }

   renderCards() {


    const item = [
      {
        header: this.state.description,
        meta:  "",
        description:"Weather Condition",
        // style: { overflowWrap: "break-word" },
      },
      {
        header: this.state.temp-273,
        meta:"",
        description:"Current temprature",
      },
      {
        header:this.state.temp_min-273,
        meta:"",
        description:"Minimum Temperature",
      },
      {
        header:this.state.temp_max-273,
        meta:"",
        description:"Maximum Temperature",
      },
      {
        header:this.state.humidity,
        meta:"",
        description:"Humidity",
      }
   
    ];
    return <Card.Group items={item} />;
  }
  
    render() {
      // const { error, isLoaded, items } = this.state;
      // if (error) {
      //   return <div>Error: {error.message}</div>;
      // } else if (!isLoaded) {
      //   return <div>Loading...</div>;
      // } else {
        //   <div>
        //   <form onSubmit={this.handleChange}>
        //           <input id="input" ref={(input) => { this.textInput = input; }} type="text" placeholder="Enter city Here" />
        //           <input type="submit" value="Submit" />
        
        // </form>
        // <h3 style={{marginLeft:"15px", marginRight:"15px"}}>Weather Details Details</h3>
        //   <Grid stackable style={{marginLeft:"15px", marginRight:"15px"}}>
        //     <Grid.Row>
        //       <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
        //     </Grid.Row>
        //   </Grid>
        // {console.log("body:",this.state.city)} 
        // {console.log("temp:",this.state.temp)}
        // {console.log("description:",this.state.description)}
        
        // </div>  
      return (
        <div>
         <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          /> 
      <Container fluid>
      <Segment
            raised
            size="big"
            attached="top"
            inverted
            textAlign='center'
            style={{ minHeight: 120,marginLeft:"0px",marginRight:"0px", padding: '0em',minWidth:"300" }}
          > 
        <Header
          as='h1'
          content='Weather Report'
          style={{
            fontSize:'4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: '.5em',
          }}
        /> 
        </Segment>
        </Container>
        <Form onSubmit={this.handleChange} error={!!this.state.errorMessage} style={{marginTop:"15px"}}>
          <Form.Field>
            <h2><lable>Enter city name</lable></h2>
            <Input
              
              size='small'
              value={this.state.city}
              onChange={(event) =>
                this.setState({ city: event.target.value })
              }
            />
          </Form.Field>
          <Button primary OnClick>
              Submit!
           </Button>
        </Form>
        <Grid stackable style={{marginLeft:"15px", marginRight:"15px", marginTop:"10px"}}>
          <Grid.Row>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
          </Grid.Row>
        </Grid>
        </div>
        );
      }
    }
  
export default MyComponent
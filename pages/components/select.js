import React, { Component } from "react";
import { Dropdown,Form,Button } from 'semantic-ui-react'
import Layout from './layout';

class SelectForm extends Component{
state={
    city:"a"
}
// handleChange = (e,data)=>{
//    const c= data.value;
//    this.setState({
//       city: c
//    });
//    console.log(c);
//    console.log(this.state.city)
// }

handleChange = (e) => {
    e.preventDefault();
    console.log(this.state.city);
    console.log(this.textInput.value)
    const newCity = this.textInput.value;
    console.log("newcity:",newCity)
    console.log('submitted');
    this.setState({newCity})
    console.log("state:",this.state.city)
    // const { s } = this.state;
    // s=this.textInput.value
    // this.setState({ s })
    // console.log(this.state.city)
    
 }
render(){

return(
    //  <div>
    // <Form >
    //     <Form.Field>
    //      <h1>City</h1>
    //     <Dropdown
    //     placeholder='Select City'
    //     fluid
    //     selection
    //     options={cityOptions}
    //     onChange={this.handleChange}
    //     />
    //     </Form.Field>
    //     <Button primary>
    //         Submit!
    //     </Button>
    // </Form>    
    // </div>
    <form onSubmit={this.handleChange}>
                <input id="input" ref={(input) => { this.textInput = input; }} type="text" placeholder="Enter city Here" />
                <input type="submit" value="Submit" />
                {console.log("body:",this.state.city)} 
    </form>
  )
  
}
}
export default SelectForm
  
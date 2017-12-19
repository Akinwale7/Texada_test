import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createProd} from '../actions';
import { Field, reduxForm } from 'redux-form';
import {Link} from 'react-router-dom';

import SideNav from './side_nav';

class ProdNew extends Component{
 
 renderField(field){
   const {meta:{touched,error}} = field;
   const className = `form-group ${touched && error ? 'has-danger' : ''}`;
   
   return (
     <div className={className}>
     <label>{field.label}</label>
      <input 
      className="form-control"
      {...field.input}
      />
      <div className="text-help">{touched ? error : ''} </div>
     </div>
   )
 }
 
 onSubmit(values){
   //console.log(values);
  this.props.createProd(values, () => {
    this.props.history.push('/');
  });
}
  
  render(){
    const {handleSubmit} = this.props;
    return(
      <div className="container-1">
          <SideNav />
       
          <div className="main">
             <h1>Add New Product</h1>
             <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <Field 
                name="description"
                label="description"
                component={this.renderField}
              />
              
              <Field 
                name="datetime"
                label="DateTime"
                component={this.renderField}
              />
              
              <Field 
                name="longitude"
                label="Longitude"
                component={this.renderField}
              />
              
              <Field 
                name="latitude"
                label="Latitude"
                component={this.renderField}
              />
              
              <Field 
                name="elevation"
                label="Elevation"
                component={this.renderField}
              />
              <button type="submit" className="btn btn-primary">Submit</button>
             </form>
          </div>
      </div>
   
    )
  }
}

//  ProdNew = reduxForm({
//   // a unique name for the form
//   form: 'contact'
// })(ProdNew)
// 
// export default ProdNew;
function validate(values){
  const errors = {};//console.log(values)->{title:"asdf", category:"asdf",content:"asdf"}
   
    if(!values.description){
      errors.description = "Description must not be empty"
    }
    
    if(!values.longitude){
      errors.longitude = "Longitude must not be empty"
    }
    
    if(!values.latitude){
      errors.latitude = "Latitude must not be empty"
    }
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null,{createProd})(ProdNew)
);
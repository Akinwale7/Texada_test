import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { post } from 'axios';
import SideNav from './side_nav';

export const FileUpload = (props) => {
    const { handleSubmit } = props;
    const onFormSubmit = (data) => {
        let formData = new FormData();
        formData.append('name', data.name)
        formData.append('profile_pic', data.profile_pic[0])
        
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
        
        const url = 'http://localhost:5000/load/';
        post(url, formData, config)
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
    }
    return (
      <div>
        <div className="container-1">
         
             <SideNav />
           
            <div className="main">
               <h1>FileUpload</h1>
               
           <form onSubmit={handleSubmit(onFormSubmit)}>
             
            <div>
              <label>Upload file</label>
              <Field name="profile_pic" component="input" type="file"/>
            </div>
            <button type="submit">Submit</button>
          </form>
               
            </div>
      
        </div>
        
      </div>
    )
}
 
export default reduxForm({
    form: 'fileupload'
})(FileUpload)
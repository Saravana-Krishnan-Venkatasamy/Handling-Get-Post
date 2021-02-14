import React from 'react';
 import { useFormik } from 'formik';
 import axios from 'axios';
 import "./helper.css";
/*import { MoreResources, DisplayFormikState } from "./helper";*/
 
 const validate = values => {
   const errors = {};
 
   if (!values.id) {
     errors.id = 'Required';
   } else if (!/^[/\d/]+$/i.test(values.id)) {
     errors.id = 'Must be a Decimal Number';
   }
 
   if (!values.title) {
     errors.title = 'Required';
   } 
   else if (!/^[A-Za-z/\s]+$/i.test(values.title)) {

    errors.title = 'Invalid';
  }
   else if (values.title.length > 20) {
     errors.title = 'Must be 20 characters or less';
   }
 
   if (!values.body) {
     errors.body = 'Required';
   }
   else if (values.body.length > 100) {
    errors.body = 'Must be 100 characters or less';
  } 
   /*else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.body = 'Invalid email address';
   }*/
 
   return errors;
 };
 
 const FormValidationSubmission = () => {
   const formik = useFormik({
     initialValues: {
       id: '',
       title: '',
       body: '',
       isSubmitted:false
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
       // get our form data out of state
        const { id, title, body } = values;
   
       axios.post('https://jsonplaceholder.typicode.com/posts', { id, title, body})
         .then((result) => {
           //access the results here....
           console.log('posted data');
           console.log(result.data);
         });
     },
   });
   return (
     <form onSubmit={formik.handleSubmit}>
       <label htmlFor="firstName">ID</label>
       <input
         id="firstName"
         name="id"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.id}
       />
       {formik.touched.id && formik.errors.id ? (
         <div>{formik.errors.id}</div>
       ) : null}
 
       <label htmlFor="lastName">Title</label>
       <input
         id="lastName"
         name="title"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.title}
       />
       {formik.touched.title && formik.errors.title ? (
         <div>{formik.errors.title}</div>
       ) : null}
 
       <label htmlFor="email">Body</label>
       <input
         id="email"
         name="body"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.body}
       />
       {formik.touched.body && formik.errors.body ? (
         <div>{formik.errors.body}</div>
       ) : null}
 
       <button type="submit">Submit</button>
     </form>
   );
 };

 export default FormValidationSubmission;

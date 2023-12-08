import images from '../../assets/images';
import styled from './FeedBackForm.module.css'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import api from '../../API/levstake.js'
const FeedbackForm = () => {

  const DisplayingErrorMessagesSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string() .min(5, 'Too Short!').required('Required')
  });

    return (
      <Formik
       initialValues={{
         name: '',
         email: '',
         message:''
       }}
       validationSchema={DisplayingErrorMessagesSchema}
       onSubmit={(values,{resetForm}) => {
  
         api.postFeedback(values)
       resetForm()
       }}
     >
        {({ errors, touched }) => (
      <Form className={styled.form}>
          <div className={styled.inputBox} >
          <label className={styled.inputLabel} htmlFor="name">Name </label>
        <Field className={styled.mainInput} name="name" id="name" placeholder="Enter name" />  
        {touched.name && errors.name && <div className={styled.error}>{errors.name}</div>}
          </div>
          <div className={styled.inputBox} >
          <label className={styled.inputLabel} htmlFor="email">Email </label>
        <Field className={styled.mainInput} name="email" id="email" placeholder="Enter email" /> 
        {touched.email && errors.email && <div className={styled.error}>{errors.email}</div>} 
          </div>
          <div className={styled.inputBox} >
          <label className={styled.inputLabel} htmlFor="message">Your message </label>
        <Field style={{resize:'none'}} rows='4' className={styled.mainInput} name="message" id="message" placeholder="Type here..." />  
        {touched.message && errors.message && <div className={styled.error}>{errors.message}</div>}
          </div>

    <button className={styled.formBtn} type="submit">Send <img src={images.arrowForm} alt="arrow" /></button>
      </Form>
       )}
      </Formik>
    );
}

export default FeedbackForm;

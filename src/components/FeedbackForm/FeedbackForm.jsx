import images from '../../assets/images';
import styled from './FeedBackForm.module.css'

const FeedbackForm = () => {
    return (
      <form className={styled.form}>
          <div className={styled.inputBox} >
          <label className={styled.inputLabel} htmlFor="name">Name </label>
        <input className={styled.mainInput} name="name" id="name" placeholder="Enter name" />  
          </div>
          <div className={styled.inputBox} >
          <label className={styled.inputLabel} htmlFor="email">Email </label>
        <input className={styled.mainInput} name="email" id="email" placeholder="Enter email" />  
          </div>
          <div className={styled.inputBox} >
          <label className={styled.inputLabel} htmlFor="message">Your message </label>
        <textarea style={{resize:'none'}} rows='4' className={styled.mainInput} name="message" id="message" placeholder="Type here..." />  
          </div>

    <button className={styled.formBtn} type="submit">Send <img src={images.arrowForm} alt="arrow" /></button>
      </form>
    );
}

export default FeedbackForm;

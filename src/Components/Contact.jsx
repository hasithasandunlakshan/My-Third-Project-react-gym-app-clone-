import React from 'react';
import "./Contact.css"

export default function Contact() {
  return (
    <div className='con'>
      <h3 className='head'>Contact Form</h3>
      
      <input type="text" id="fname" name="firstname" placeholder="Your name.." />

    
      <input type="text" id="lname" name="lastname" placeholder="Your last name.." />


      <select id="country" name="country">
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
      </select>

     
      <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '200px' }}></textarea>

      <input type="submit" value="Submit" />
    </div>
  );
}

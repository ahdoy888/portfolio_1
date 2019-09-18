import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <>
      <section id="contact">
			  <div className="wrap">
			    <h2>Get in Touch</h2>
				  <form action="https://formspree.io/jhk888@yahoo.com" className="contact" method="POST">
					<input type="text" name="name" placeholder="Full Name" class="col-third" />
					<input type="email" name="_replyto" placeholder="Email" className="col-third" />
					<input type="text" placeholder="Subject" className="col-third" />
					<textarea name="name" id="" cols="30" rows="10" placeholder="Message"></textarea>
					<button type="submit" value="Send">Submit</button>
				  </form>
			  </div>
		  </section>
    </>
  )
}

export default Contact;




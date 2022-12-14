import React, { useState } from 'react';

const Contact = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [userPhone, setUserPhone] = useState();
  const [email, setEmail] = useState();
  const [userMsg, setUserMsg] = useState();

  return (
    <section className='contact-section'>
      <h1>Contact & Infos</h1>
      <hr />
      <div className='contact-section--infos'>
        <h2>Shop Infos :</h2>
        <p>📞 06 45 03 16 52</p>
        <p>🏠 1 Rue du Prêche, 46800 Montcuq</p>
        <p>🕰 Tuesday through Sunday, 11 a.m. to 11 p.m.</p>
        <div className='contact-section--map'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2853.6185003276487!2d1.2080284510136101!3d44.33834401577153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ab80976fd9b0dd%3A0xb33eeb238647aaff!2sMairie!5e0!3m2!1sfr!2sfr!4v1654776443056!5m2!1sfr!2sfr'
            width={500}
            height={320}
            loading='lazy'
            allowFullScreen=''
            style={{
              border: '1px solid grey',
              boxShadow: '2px 2px 16px 2px rgba(0, 0, 0, 0.4)',
            }}
          ></iframe>
        </div>
      </div>
      <div className='contact-section--form-div'>
        <h2>Contact Us :</h2>
        <form className='form'>
          <label htmlFor='firstName'>First name :</label>
          <br></br>
          <input
            type='text'
            id='firstName'
            value={firstName}
            placeholder='John'
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <br />
          <label htmlFor='lastName'>Last name :</label>
          <br></br>
          <input
            type='text'
            id='lastName'
            value={lastName}
            placeholder='Doe'
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <br />
          <label htmlFor='userPhone'>Phone number :</label>
          <br></br>
          <input
            type='phone'
            id='userPhone'
            value={userPhone}
            placeholder='+33'
            onChange={(e) => {
              setUserPhone(e.target.value);
            }}
          />
          <br />
          <label htmlFor='email'>Email address :</label>
          <br></br>
          <input
            type='email'
            id='email'
            value={email}
            placeholder='johndoe@disconico.com'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <label htmlFor='userMsg'>Your message :</label>
          <br></br>
          <textarea
            id='userMsg'
            value={userMsg}
            placeholder='...'
            onChange={(e) => {
              setUserMsg(e.target.value);
            }}
            rows={5}
          />
          <br />

          <div className='form-button'>
            <button className='submit-button' type='button'>
              Send your message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import SectionTitle from '../../components/SectionTitle'

const RSVP = (props) => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        address: '',
        meal: '',
        attend: '',
        guest: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                address: '',
                meal: '',
                attend: '',
                guest: ''
            })
        } else {
            validator.showMessages();
        }
    };

    return (
        <section className={`wpo-contact-section ${props.pt}`} id="RSVP">
            <div className="container">
                <div className="wpo-contact-section-wrapper">
                    <div className="wpo-contact-form-area">
                        <SectionTitle MainTitle={'Are you attending?'} />

                        <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
                            <div className="form-field">
                                <input
                                    value={forms.name}
                                    type="text"
                                    name="name"
                                    onBlur={(e) => changeHandler(e)}
                                    onChange={(e) => changeHandler(e)}
                                    className="form-control"
                                    placeholder="Your Name" />
                                {validator.message('name', forms.name, 'required|alpha_space')}
                            </div>
                            <div className="form-field">
                                <input
                                    value={forms.email}
                                    type="email"
                                    name="email"
                                    onBlur={(e) => changeHandler(e)}
                                    onChange={(e) => changeHandler(e)}
                                    className="form-control"
                                    placeholder="Your Email" />
                                {validator.message('email', forms.email, 'required|email')}
                            </div>
                            <div className="radio-buttons">
                                <p>
                                    <input type="radio" id="attend" name="radio-group" defaultChecked />
                                    <label htmlFor="attend">Yes, I will be there</label>
                                </p>
                                <p>
                                    <input type="radio" id="not" name="radio-group" />
                                    <label htmlFor="not">Sorry, I can’t come</label>
                                </p>
                            </div>
                            <div className="form-field">
                                <select
                                    onBlur={(e) => changeHandler(e)}
                                    onChange={(e) => changeHandler(e)}
                                    value={forms.guest}
                                    type="text"
                                    className="form-control"
                                    name="guest">
                                    <option>Number Of Guests</option>
                                    <option>01</option>
                                    <option>02</option>
                                </select>
                                {validator.message('guest', forms.guest, 'required')}
                            </div>
                            <div className="form-field">
                                <input
                                    value={forms.attend}
                                    type="text"
                                    name="attend"
                                    onBlur={(e) => changeHandler(e)}
                                    onChange={(e) => changeHandler(e)}
                                    className="form-control"
                                    placeholder="What Will You Be Attending" />
                                {validator.message('attend', forms.attend, 'required')}
                            </div>
                            <div className="submit-area">
                                <button type="submit" className="theme-btn">Submit Now</button>
                            </div>
                        </form >
                    </div>
                </div>
            </div>
        </section>
    )
}
export default RSVP;

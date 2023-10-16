import AllTitleBox from '../Common/AllTitleBox';

const ContactsPage = () => {

    function onSendMessage(ev) {
        ev.preventDefault();
        const formData = new FormData(ev.target)
        const { name, message, email, subject } = Object.fromEntries(formData);
        
    }
    return (
        <>
            <AllTitleBox title="CONTACT US" />

            <div className="contact-box-main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                            <div className="contact-info-left">
                                <h2>CONTACT INFO</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                                    urna diam, maximus ut ullamcorper quis, placerat id eros. Duis
                                    semper justo sed condimentum rutrum. Nunc tristique purus turpis.
                                    Maecenas vulputate.
                                </p>
                                <ul>
                                    <li>
                                        <p>
                                            <i className="fas fa-map-marker-alt" />
                                            Address: Michael I. Days 3756 <br />
                                            Preston Street Wichita,
                                            <br /> KS 67213
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <i className="fas fa-phone-square" />
                                            Phone: <a href="tel:+1-888705770">+1-888 705 770</a>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <i className="fas fa-envelope" />
                                            Email:
                                            <a href="mailto:contactinfo@gmail.com">contactinfo@gmail.com</a>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-12">
                            <div className="contact-form-right">
                                <h2>GET IN TOUCH</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio
                                    justo, ultrices ac nisl sed, lobortis porta elit. Fusce in metus ac
                                    ex venenatis ultricies at cursus mauris.
                                </p>

                                <form id="contactForm" onSubmit={onSendMessage}>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Your Name"
                                                    required={true}
                                                    data-error="Please enter your name"
                                                />
                                                <div className="help-block with-errors" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    placeholder="Your Email"
                                                    id="email"
                                                    className="form-control"
                                                    name="email"
                                                    required={true}
                                                    data-error="Please enter your email"
                                                />
                                                <div className="help-block with-errors" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="subject"
                                                    name="subject"
                                                    placeholder="Subject"
                                                    required={true}
                                                    data-error="Please enter your Subject"
                                                />
                                                <div className="help-block with-errors" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea
                                                    className="form-control"
                                                    id="message"
                                                    placeholder="Your Message"
                                                    rows={4}
                                                    data-error="Write your message"
                                                    required={true}
                                                    name="message"
                                                />
                                                <div className="help-block with-errors" />
                                            </div>
                                            <div className="submit-button text-center">
                                                <button className="btn hvr-hover" type="submit">
                                                    Send Message
                                                </button>
                                                <div id="msgSubmit" className="h3 text-center hidden" />
                                                <div className="clearfix" />
                                            </div>
                                        </div>
                                    </div>
                                </form>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactsPage;
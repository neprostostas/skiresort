import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4 pb-2 textCourse">
                            Course work on the topic "Ski resort"
                            <br />
                            Performed by a student of the group KN-202, Dorozhynsky Nazar
                        </p>
                        <p className="lead mb-4">
                            We, at the Ski Company, want you to return from your ski holiday, having created magical mountain memories, feeling like you had good value for money and wanting to travel with us again.

                            From planning to piste, we put together ski holidays to world renowned as well as hidden gem ski resorts so that you get a skiing holiday to remember.

                            In each ski resort, we have experienced support staff, equipped with resort ready knowledge. They are on hand throughout your ski holiday, ensuring that your safety and wellbeing is our priority, and to give you that extra peace of mind.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

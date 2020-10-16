import React, { useEffect } from 'react';
import { useState } from 'react';
import './ClientFeedback.css';

const ClientFeedback = () => {
    const [feedbacks, setFeedback] = useState([])
    useEffect(() => {
        fetch('https://protected-stream-26581.herokuapp.com/feedback')
            .then(response => response.json())
            .then(data => setFeedback(data))
    }, [])
    return (
        <div>
            <h3 className="text-black m-auto pt-5 pb-5" style={{ textAlign: 'center' }}>Client <span style={{ color: '#7AB259' }}>Feedback</span></h3>
            <div className="d-flex justify-content-center mt-5 pt-5 mb-5">
                <section className="row w-75">
                    {
                        feedbacks.map(feedback => <div className="col-md-4 feedback  " key={feedback._id}>
                            <div className="feedback-area">
                                <div className="d-flex justify-content-center name-area ">
                                    <img src={feedback.image} className="img-fluid d-flex justify-content-center service-image mr-2 " alt="" />
                                    <h4>{feedback.name} <br /> <span className="profession">{feedback.profession}</span> </h4>
                                </div>

                                <p className="comment-area">{feedback.comment}</p>
                            </div>

                        </div>)
                    }
                </section>
            </div>
        </div>
    );
};

export default ClientFeedback;

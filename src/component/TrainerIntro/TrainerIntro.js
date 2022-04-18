import React from 'react';
import trainer from '../../images/Trainer/trainer-1.jpg'

const TrainerIntro = () => {
    return (
        <div>
            <div class="card my-5 py-5 " style={{border:'none'}} >
                <div class="row g-0">
                    <div class="col-md-6 ps-5">
                        <img src={trainer} class="img-fluid rounded-start" alt="..." />
                    </div>

                    <div class="col-md-6 d-flex align-items-center">

                        <div class="card-body  mx-5">
                            <h2>Hi, I’m <strong>JK</strong></h2>

                            <h3>  Certified Fitness Trainer and Personal Coach</h3>
                            <p>I care deeply about my clients, and there’s nothing of more value to me than helping somebody go through an experience that makes them happy, confident, and strong. I realize how being overweight affects many aspects of your life, and I want to be there for you and help you discover the benefits and joys of training that helped me become the person I am today. I’m here to be your personal guide on every step of the fitness journey.</p>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default TrainerIntro;
import React from 'react';
import persion from '../../images/persion/persion.png'

const About = () => {
    return (
        <div>
            {/* 
            <div className='container  bg-primary '>
                <div className='row'>
                    <div className='col col-lg-6 d-flex justify-content-center align-items-center'>
                        <div className=''>
                            <h2>Hi <br /> I'm Nasir Ahmed</h2>
                            <div>
                                <h3>In next couple of years I want to be expart in web developer.  </h3>
                                <p>To fullfill my goal I learn & practice regularly. </p>
                            </div>
                        </div>
                    </div>
                    <div className='col col-lg-6 float-right'>
                        <div>

                            <img className='img-fluid' src={persion} alt='' />
                        </div>
                    </div>
                </div>

                <div className=''>

                </div>
            </div>

 */}

            <div class="card mb-3 vh-100" >
                <div class="row g-0">
                    
                    <div class="col-md-8 d-flex align-items-center">
                        <div>
                            <div class="card-body px-5 mx-5">
                                <h2>Hi <br/> I'm Nasir Ahmed</h2>
                                
                                <h3>In next couple of years I want to be an expart web developer.  </h3>
                                <p>To fullfill my goal. I devided my goal into small part. Next goal is Join into SCIC batch. And learn profesional level work. So, I learn & practice regularly and complete my daily task.  </p>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <img src={persion} class="img-fluid rounded-start" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
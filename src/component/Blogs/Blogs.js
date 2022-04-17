import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='text-center'>Blogs</h1>

            <div  >
                <h2>1. Difference between authorization and authentication?</h2>
                <p>Authorization determines what resources a user can access.It workes through settings maintained by security teams. User cannot change aouthorization data<br /> On the other hand authentication verify who the user is. Through passwords, biometrics, one-time pins, or apps. User can partially change data</p>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Authentication</th>

                            <th scope="col">Authorization</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Authentication verifies who the user is.</td>

                            <td>Authorization determines what resources a user can access.</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>works through passwords, one-time pins, biometric information,<br /> and other information provided or entered by the user.</td>

                            <td>It works through settings that are implemented and maintained by <br /> the organization.</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>In authentication data movees throug ID tokens</td>

                            <td>In authorization data movees throug ID tokens</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='my-5'>
                <h2>2. Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p>Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.
                    As a Google Cloud service, it also gives you access to other Google products and features, like Google Drive and Sheets. For instance, you can import dummy data from Google Sheets and use it temporarily to serve your app.
                </p>
                <p><strong>Other Authenticator:</strong></p>
                <p>
                    <ul>
                        <li>Auth0</li>
                        <li>Okta</li>
                        <li>Passport</li>
                        <li>Keycloak</li>
                    </ul>
                </p>
            </div>
            <div>
                <h2>3. What other services does firebase provide other than authentication</h2>
                <p>Firebase services provid other than authentication are <br/>
                <ul className='d-flex justify-content-between'>
                    <li>Hosting</li>
                    <li>Google Analytics</li>
                    <li>Cloud Storage</li>
                    <li>cloud Firestore</li>
                    <li>cloud Functions</li>
                    <li>Dynamic Links</li>
                    
                </ul> 
                </p>
            </div>
        </div>
    );
};

export default Blogs;
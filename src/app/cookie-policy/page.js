"use client"

import "./../components/css/policy.scss";

const CookiePolicy = () => {
    return (
        <div className="cookieContainer">
            <div className="cookieBox">
                <div className="alignment">
                <h2 className="heading">Cookie policy</h2>
                <div className="subHeading">
                    {/* <h5>A climate for economic renewal</h5> */}
                </div>
                <div className="paragraph">
                    <h6>Who we are</h6>
                    <p>
                        Our website address is: <a className="linkStyle" href="http://osira-network.stackstaging.com" target="_blank">www.osira.io</a><br></br>
                        The appearance of the terms ‘we’ and ‘us’ on this page refer to Osira.
                        Use of the terms ‘you’ and ‘your’ on this page refer to visitors to the Osira website.
                    </p>
                </div>
                <div className="paragraph">
                    <h6>Comments</h6>
                    <p>We collect data, including the visitor’s IP address and browser user agent string, when visitors leave comments on the Osira website. This is to aid spam detection.
                        The Gravatar service may be provided via an anonymised string (also called a hash) generated from your email address to check it is a working address. The Gravatar service Privacy Policy is available here: <a className="linkStyle" href="https://automattic.com/privacy/" target="_blank">https://automattic.com/privacy/</a>. Following approval, your profile picture will become visible with your comment.
                    </p>
                    
                </div>
                <div className="paragraph">
                    <h6>Media</h6>
                    <p>Regarding Media, uploading images with location data is, surely, an important part of the project funding verification project.
                    Consequently, the statement on uploading images without location data is not appropriate – or, at least not appropriate in its current form.
                    </p>
                </div>
                <div className="paragraph">
                    <h6>Cookies</h6>
                    <p> We use cookies to manage and store different types of data to enable a seamless user experience when interacting with the Osira website.</p>
                       <p> During the login process, several cookies containing your login data and screen display choices are saved onto your browser app. Login cookies expire after two days and screen option cookies expire after a year. If you select ‘Remember Me’, cookies containing your login data will be saved for two weeks unless you log out of your account, in which case they are deleted.</p>
                        <p>Visitors who leave a comment on the Osira website have the option to save their name, email address and website URL. This data is stored for one year.</p>
                        <p>Additional cookies are also saved if you publish or edit a post on the Osira website. These cookies expire after one day and contain only the post’s ID and no user data.
                    </p>
                </div>
                <div className="paragraph">
                    <h6>Embedded content from other websites</h6>

                    <p> Articles on the Osira website may include embedded content, such as images, videos and text. Your computer interacts in exactly the same way with content embedded from other websites as it does with the Osira website, as if the visitor had visited those other sites.
                    </p>
                    <p>
                    Those other websites may also collect data about you, use cookies, embed additonal third-party tracking and monitor your interaction with the embedded content. This may include tracking your interaction with the embedded content if you have an account and are logged into the other website.
                    </p>
                </div>
                <div className="paragraph">
                    <h6>
                    Sharing and retaining your data
                    </h6>
                    <p>If you leave a comment on the Osira website, the comment and its metadata are retained indefinitely. This is so we can automatically recognise and approve any follow-up comments instead of holding them in a moderated queue.
                    </p>
                    <p>We also store the personal information of registered users’ provided for their user profiles. All users can see, edit or delete their personal information – other than their username – at any time. Website administrators can also see and edit that information. </p>
                    <p>Visitor comments may be checked through an automated spam detection service.</p>
                    <p>Users who request a password reset will be sent a reset email that contains their IP address.</p>
                </div>
                <div className="paragraph">
                    <h6>
                    Your rights over your data
                    </h6>
                    <p> All registered users can request an experted file containing all the personal data we hold about you, including any data you have provided us. You can request that we erase any personal data we hold about you, except any data we are obliged to retain for admininstrative, legal or security purposes.
                    </p>
                    
                </div>
                </div>
            </div>
        </div>

    );
};

export default CookiePolicy;
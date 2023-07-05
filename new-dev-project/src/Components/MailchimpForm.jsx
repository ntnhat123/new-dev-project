import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Newsletter from "./Newsletter";

const MailchimpForm = () => {
    const postUrl = `${process.env.REAC_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`

    return (
        <div>
            <>
                <MailchimpSubscribe url={postUrl} 
                render = {({subscribe, status, message}) => (
                    <div>
                        <Newsletter onValidated={formData=>subscribe(formData)} subscribe={subscribe} status={status} message={message}/>

                    </div>
                )}
                />


            </>

        </div>
    )
}
export default MailchimpForm;
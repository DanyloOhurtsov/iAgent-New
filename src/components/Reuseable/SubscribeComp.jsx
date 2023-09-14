import React, { useState } from "react";
import { allStyles } from "../../styles/allStyles";

export const SubscribeComp = ({ value: { dataNew, options } }) => {
    // DATA and STYLES
    const styles = allStyles.reuseableStyles.subscribeCompStyles;
    const data = dataNew.components.subscribeCompData;

    // EMAIL
    const [emailInputValue, setEmailInputValue] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);
    const sendEmail = () => {
        if (validateEmail(emailInputValue)) {
            console.log(emailInputValue);
            setIsEmailValid(true);
        } else {
            console.log("Not validate Email");
            setIsEmailValid(false);
        }
    };
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    const isEmailEmpty = emailInputValue === "";

    return (
        <div
            className={styles.subsribeComp}
            style={{ background: options.background }}
        >
            <p className={styles.titleInputsCard}>{data.title}</p>
            <div className={styles.inputSection}>
                <p
                    className={`${styles.labelInput} ${
                        !isEmailValid ? styles.wrongEmailLabel : ""
                    }`}
                >
                    Email
                </p>
                <input
                    type="email"
                    value={emailInputValue}
                    className={!isEmailValid ? styles.wrongEmail : ""}
                    onChange={(event) => setEmailInputValue(event.target.value)}
                />
            </div>
            <button disabled={isEmailEmpty} onClick={() => sendEmail()}>
                {data.button}
            </button>
        </div>
    );
};

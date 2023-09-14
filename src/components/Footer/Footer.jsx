import React from "react";
import { allStyles } from "../../styles/allStyles";

export const Footer = ({ value }) => {
    const {
        dataNew,
        language,
        setLanguage,
        isOpenLang,
        setIsOpenLang,
    } = value;
    const { buttons, contact } = dataNew.components.footerCompData.content;
    const styles = allStyles.footerStyles;

    const toggleChangeSelector = () => {
        setIsOpenLang({
            ...isOpenLang,
            footer: !isOpenLang.footer,
        });
    };
    const changeLanguage = (event) => {
        setLanguage(event.target.value);
        toggleChangeSelector();
    };

    return (
        <div className={styles.footerComp}>
            <div className={styles.insideFooter}>
                <div className={styles.leftContentFooter}>
                    {buttons.map((item) => (
                        <div className={styles.itemFooter} key={item.id}>
                            <h4 className={styles.tiltleItemFooter}>
                                {item.title}
                            </h4>
                            <div className={styles.buttonsItem}>
                                {item.content.map((button) => (
                                    <button
                                        className={styles.button}
                                        key={button.id}
                                    >
                                        {button.title}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className={styles.itemFooter}>
                        <h4 className={styles.tiltleItemFooter}>
                            {contact.title}
                        </h4>
                        <div className={styles.buttonsItem}>
                            {contact.content.map((item) => (
                                <a href={item.link} key={item.id}>
                                    {item.title}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.selectorLangFooter}>
                    <button
                        className={styles.topSelector}
                        onClick={toggleChangeSelector}
                    >
                        {language}
                        <span>
                            <i className="fa-solid fa-chevron-down"></i>
                        </span>
                    </button>
                    {isOpenLang.footer && (
                        <div className={styles.boxVariants}>
                            <div className={styles.left}>
                                <button
                                    className={styles.variant}
                                    value={"English"}
                                    onClick={(event) => changeLanguage(event)}
                                >
                                    Eng
                                </button>
                                <button
                                    className={styles.variant}
                                    value={"Spanish"}
                                    onClick={(event) => changeLanguage(event)}
                                >
                                    Spa
                                </button>
                                <button
                                    className={styles.variant}
                                    value={"Russian"}
                                    onClick={(event) => changeLanguage(event)}
                                >
                                    Rus
                                </button>
                            </div>
                            <button
                                className={styles.arrowButton}
                                onClick={toggleChangeSelector}
                            >
                                <i className="fa-solid fa-chevron-up"></i>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

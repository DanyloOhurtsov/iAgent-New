import React from "react";
import { allStyles } from "../../styles/allStyles";
import { allImages } from "../../images/allImages";
import { Link } from "react-router-dom";

export const Header = ({
    value: {
        language,
        setLanguage,
        dataNew,
        setHist,
        hist,

        isOpenLang,
        setIsOpenLang,
    },
}) => {
    const data = dataNew.components.headerCompData.content;
    const logoHeader1 = allImages.logoHeader1;
    const styles = allStyles.headerStyles;

    const togglePage = (name) => {
        setHist(name);
    };

    const toggleChangeSelector = () => {
        setIsOpenLang({
            ...isOpenLang,
            header: !isOpenLang.header,
        });
    };
    const changeLanguage = (event) => {
        setLanguage(event.target.value);
        toggleChangeSelector();
    };
    return (
        <div className={styles.headerComp}>
            <div className={styles.insideHeader}>
                <Link
                    to={"/"}
                    className={styles.logoHeader}
                    onClick={() => setHist("")}
                >
                    <img src={logoHeader1} alt="" />
                </Link>
                <nav className={styles.navigationHeader}>
                    {data.navigationTop.map((item) => (
                        <Link
                            to={`/${item.class}`}
                            className={`${styles.buttonHeader}`}
                            key={item.id}
                            name={item.class}
                            onClick={(event) => togglePage(event.target.name)}
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>
                <div className={styles.optionsHeader}>
                    <div className={styles.selectorLangHeader}>
                        <button
                            className={styles.topSelector}
                            onClick={toggleChangeSelector}
                        >
                            {language}
                            <span>
                                <i className="fa-solid fa-chevron-down"></i>
                            </span>
                        </button>
                        {isOpenLang.header && (
                            <div className={styles.boxVariants}>
                                <div className={styles.left}>
                                    <button
                                        className={styles.variant}
                                        value={"English"}
                                        onClick={(event) =>
                                            changeLanguage(event)
                                        }
                                    >
                                        Eng
                                    </button>
                                    <button
                                        className={styles.variant}
                                        value={"Spanish"}
                                        onClick={(event) =>
                                            changeLanguage(event)
                                        }
                                    >
                                        Spa
                                    </button>
                                    <button
                                        className={styles.variant}
                                        value={"Russian"}
                                        onClick={(event) =>
                                            changeLanguage(event)
                                        }
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
                    <button className={styles.loginButtonHeader}>
                        <i className="fa-regular fa-user"></i>
                    </button>
                </div>
            </div>
            <hr />
            <div className={styles.bottomHeader}>
                {data.navigationBottom.map((item) => (
                    <Link
                        key={item.id}
                        className={`${styles.buttonBottomHeader} ${
                            hist === item.class ? styles[item.class] : ""
                        }`}
                        to={`/${item.class}`}
                        name={item.class}
                        onClick={(event) => togglePage(event.target.name)}
                    >
                        {item.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

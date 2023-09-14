import React, { useState } from "react";
import { allStyles } from "../styles/allStyles";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { newDataBase } from "../data/newDataBase";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./AllPages/HomePage/HomePage";
import { NewsPage } from "./AllPages/NewsPage/NewsPage";
import { ArticlePage } from "./Reuseable/ArticlePage";

export const Main = () => {
    const styles = allStyles.mainPage;

    const { eng, spa, rus } = newDataBase;

    const [hist, setHist] = useState("");
    const [currentItem, setCurrentItem] = useState({});

    const [language, setLanguage] = useState("English");
    const [isOpenLang, setIsOpenLang] = useState({
        footer: false,
        header: false,
    });

    const dataNew = {
        English: eng,
        Spanish: spa,
        Russian: rus,
    }[language];

    return (
        <div className={styles.mainComp}>
            <Header
                value={{
                    dataNew,
                    language,
                    setLanguage,
                    isOpenLang,
                    setIsOpenLang,
                    setHist,
                    hist,
                }}
            />
            <Routes>
                <Route
                    path="/"
                    element={
                        <HomePage
                            value={{
                                dataNew,
                                setCurrentItem,
                            }}
                        />
                    }
                />
                <Route
                    path="/news"
                    element={
                        <NewsPage
                            value={{
                                dataNew,
                                setCurrentItem,
                            }}
                        />
                    }
                />
                <Route
                    path={`/articles/:article`}
                    element={<ArticlePage value={{ currentItem, hist }} />}
                />
            </Routes>
            <Footer
                value={{
                    dataNew,
                    language,
                    setLanguage,
                    isOpenLang,
                    setIsOpenLang,
                    setHist,
                }}
            />
        </div>
    );
};

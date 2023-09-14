import React from "react";
import { HomePage } from "./HomePage/HomePage";
import { NewsPage } from "./NewsPage/NewsPage";
import { ArticlePage } from "../Reuseable/ArticlePage";

export const AllPages = ({
    value: {
        currentPage,
        dataNew,
        setCurrentPage,
        setCurrentItem,
        currentItem,
    },
}) => {
    return (
        <div className="allpagesComp">
            {currentPage === "home" && (
                <HomePage value={{ dataNew, setCurrentItem, setCurrentPage }} />
            )}
            {currentPage === "news" && (
                <NewsPage value={{ dataNew, setCurrentItem, setCurrentPage }} />
            )}
            {currentPage === "articlePage" && (
                <ArticlePage value={{ dataNew, setCurrentPage, currentItem }} />
            )}
        </div>
    );
};

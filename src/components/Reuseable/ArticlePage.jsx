import React from "react";
import { allStyles } from "../../styles/allStyles";
import { Title2Comp } from "./Title2Comp";
import { Link } from "react-router-dom";

export const ArticlePage = ({
    value: { dataNew, setCurrentPage, currentItem, hist },
}) => {
    console.log(hist);
    const styles = allStyles.reuseableStyles.articlePageStyles;
    return (
        <div className={styles.articlePage}>
            <Link to={`/${hist ? hist : ''}`}>
                <i className="fa-solid fa-arrow-left"></i>
            </Link>
            <Title2Comp value={{ title: "SomeValue", color: "#f4f4f4" }} />
        </div>
    );
};

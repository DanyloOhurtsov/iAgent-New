import React from "react";
import { allStyles } from "../../styles/allStyles";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const styles = allStyles.reuseableStyles.paginationStyles;
    const handlePrevClick = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };
    const handleNextClick = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className={styles.paginationComp}>
            <button onClick={handlePrevClick}>
                <i className="fa-solid fa-arrow-left"></i>
            </button>
            <p>
                {currentPage} / {totalPages}
            </p>
            <button onClick={handleNextClick}>
                <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    );
};

import React from "react";
import { allStyles } from "../../styles/allStyles";

export const NothingfoundComp = ({ value: { setSearchQuery } }) => {
    const styles = allStyles.reuseableStyles.nothingfoundCompStyles;

    return (
        <div className={styles.noResultsFound}>
            <p>Oops, nothing found</p>
            <button onClick={() => setSearchQuery("")}>Ok, reset search</button>
        </div>
    );
};

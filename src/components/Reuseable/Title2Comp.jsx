import React from "react";
import { allStyles } from "../../styles/allStyles";

export const Title2Comp = ({ value: { title, color } }) => {
    const styles = allStyles.reuseableStyles.title2CompStyles;
    
    return (
        <div className={styles.title2} style={{ backgroundColor: color }}>
            <h2>{title}</h2>
        </div>
    );
};

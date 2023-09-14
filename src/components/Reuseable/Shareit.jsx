import React from "react";
import { allStyles } from "../../styles/allStyles";
import { allImages } from "../../images/allImages";

export const Shareit = ({ value: { color, dataNew } }) => {
    const data = dataNew.components.shareItCompData;
    const styles = allStyles.reuseableStyles.shareitCompStyles;
    const image = allImages.articleImages.focusImg;

    return (
        <div className={styles.topRowShareit}>
            <div className="imageTopRowFocusHome">
                <img src={image} alt="" />
            </div>
            <div
                className={styles.shareCardShareit}
                style={{ backgroundColor: color }}
            >
                <p className={styles.titleInputsCard}>{data.title}</p>
                <button>{data.button}</button>
            </div>
        </div>
    );
};

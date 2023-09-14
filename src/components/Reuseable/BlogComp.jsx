import React from "react";
import { allStyles } from "../../styles/allStyles";

export const BlogComp = ({ value: { options, data } }) => {
    const styles = allStyles.reuseableStyles.blogCompStyles;

    return (
        <div
            className={styles.blogComp}
            style={{ backgroundColor: options.background }}
        >
            <h3 className={styles.blogTitleAside}>{data.title}</h3>
            <div className={styles.blogContentAside}>
                {data.content.slice(0, 6).map((item) => (
                    <div className={styles.blogItem} key={item.id}>
                        <div className={styles.textContentBlogItem}>
                            <p className={styles.titleBlogItem}>{item.title}</p>
                            <p className={styles.descBlogItem}>
                                {item.text && item.text}
                                <br /> {item.dateNumber}
                            </p>
                        </div>
                        <div className={styles.imageContentBlogItem}>
                            <img src={item.image} alt={item.title} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

import React from "react";
import { allStyles } from "../../../styles/allStyles";
import { Card } from "../../Reuseable/Card";
import { Title2Comp } from "../../Reuseable/Title2Comp";
import { Shareit } from "../../Reuseable/Shareit";

export const FocusHome = ({
    value: { dataNew, setCurrentItem },
}) => {
    // FOCUS DATA
    const data = dataNew.pages.homePageData.content.focus;
    const articles = data.content.articles.slice(0, 3);
    // STYLES
    const styles = allStyles.allPagesStyles.homePageStyles.focusHome;
    const options = data.options;

    return (
        <div className={styles.focusHomeComp}>
            <Title2Comp
                value={{
                    title: data.text.title,
                    color: options.styles.background,
                }}
            />
            <div className={styles.contentFocusHome}>
                <Shareit
                    value={{
                        dataNew,
                        color: data.options.forShareIt.background,
                    }}
                />
                <div className={styles.cardsFocusHome}>
                    {articles.map((item) => (
                        <Card
                            value={{
                                item,
                                options: options.forCard,
                                setCurrentItem,
                            }}
                            key={item.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

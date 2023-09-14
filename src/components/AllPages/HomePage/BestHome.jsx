import React from "react";
import { allStyles } from "../../../styles/allStyles";
import { Card } from "../../Reuseable/Card";
import { Title2Comp } from "../../Reuseable/Title2Comp";

export const BestHome = ({
    value: { dataNew, setCurrentItem },
}) => {
    // DATA and STYLES
    const data = dataNew.pages.homePageData.content.best;
    const options = data.options;
    const styles = allStyles.allPagesStyles.homePageStyles.bestHome;

    return (
        <div className={styles.bestHomeComp}>
            <Title2Comp
                value={{
                    title: data.text.title,
                    color: options.styles.background,
                }}
            />
            <h3 className={styles.subtitleBest}>{data.text.subTitle}</h3>
            <div className={styles.contentBestHome}>
                {data.content.slice(0, 5).map((item) => (
                    <Card
                        key={item.id}
                        value={{
                            item,
                            options: options.forCard,
                            setCurrentItem,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

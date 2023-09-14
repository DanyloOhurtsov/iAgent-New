import React from "react";
import { allStyles } from "../../../styles/allStyles";
import { Card } from "../../Reuseable/Card";
import { Title2Comp } from "../../Reuseable/Title2Comp";
import { SubscribeComp } from "../../Reuseable/SubscribeComp";
import { BlogComp } from "../../Reuseable/BlogComp";

export const NewsHome = ({
    value: { dataNew, setCurrentItem },
}) => {
    // DATA and STYLES
    const data = dataNew.pages.homePageData.content.news;
    const options = data.options;
    const styles = allStyles.allPagesStyles.homePageStyles.newsHome;

    return (
        <div className={styles.newsComp}>
            <Title2Comp
                value={{
                    title: data.text.title,
                    color: options.styles.background,
                }}
            />
            <div className={styles.insideNews}>
                <div className={styles.cardNewsHome}>
                    {data.content.articles.slice(0, 6).map((item) => (
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
                <div className={styles.asideNewsHome}>
                    <BlogComp
                        value={{
                            options: options.forBlog,
                            data: data.content.blog,
                        }}
                    />
                    <SubscribeComp
                        value={{ dataNew, options: options.forSubscribe }}
                    />
                </div>
            </div>
        </div>
    );
};

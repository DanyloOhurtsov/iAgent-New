import React from "react";
import { allStyles } from "../../../styles/allStyles";
import { NewsComp } from "../../Reuseable/NewsComp.jsx";
import { CommentsComp } from "../../Reuseable/CommentsComp.jsx";
import { VideosComp } from "../../Reuseable/VideosComp";
import { BestOfComp } from "../../Reuseable/BestOfComp";

export const NewsPage = ({
    value: { dataNew, setCurrentItem },
}) => {
    // DATA and STYLES
    const styles = allStyles.allPagesStyles.newsPageStyles.newsPage;
    const data = dataNew.pages.newsPageData.content;

    return (
        <div className={styles.newsPageComp}>
            <NewsComp
                value={{
                    dataNew,
                    data: data.news,
                    options: data.news.options,
                    setCurrentItem,
                }}
            />
            <VideosComp
                value={{
                    dataNew,
                    dataVideo: data.videos,
                    options: data.videos.options,
                }}
            />
            <BestOfComp
                value={{
                    dataNew,
                    data: data.best,
                    options: data.best.options,
                    setCurrentItem,
                }}
            />
            <CommentsComp
                value={{
                    data: data.comments,
                    options: data.comments.options,
                }}
            />
        </div>
    );
};

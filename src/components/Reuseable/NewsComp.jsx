import React, { useEffect, useState } from "react";
import { allStyles } from "../../styles/allStyles";
import { Pagination } from "./Pagination";
import { Card } from "./Card";
import { SearchNews } from "./SearchNews";
import { NothingfoundComp } from "./NothingfoundComp";
import { SubscribeComp } from "./SubscribeComp";

export const NewsComp = ({
    value: { dataNew, data, options, setCurrentItem },
}) => {
    // DATA and STYLES
    const styles = allStyles.reuseableStyles.newsCompStyles;
    const color = options.styles.background;

    // SORTING
    const [activeFilter, setActiveFilter] = useState("hot");

    // SEARCH
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchInputChange = (searchValue) => {
        setSearchQuery(searchValue);
        setCurrentPageCarousel(1);
    };
    const filteredContent = searchQuery
        ? data.content.filter((item) =>
              item.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : data.content;

    // PAGINATION
    const [currentPageCarousel, setCurrentPageCarousel] = useState(1);
    const [itemsPerPage] = useState(8);
    const [totalPages, setTotalPages] = useState(
        Math.ceil(data.content.length / itemsPerPage)
    );

    useEffect(() => {
        setTotalPages(Math.ceil(filteredContent.length / itemsPerPage));
    }, [filteredContent, itemsPerPage]);

    const startIndex = (currentPageCarousel - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // SORTING
    let sortedContent = [...filteredContent];
    if (activeFilter === "hot") {
        sortedContent.sort((a, b) => b.viewed - a.viewed);
    } else if (activeFilter === "new") {
        sortedContent.sort((a, b) => b.dateForSort - a.dateForSort);
    } else if (activeFilter === "most comment") {
        sortedContent.sort(
            (a, b) => b.dataComments.length - a.dataComments.length
        );
    }

    const paginatedContent = sortedContent.slice(startIndex, endIndex);

    const onPageChange = (pageNumber) => {
        setCurrentPageCarousel(pageNumber);
    };

    return (
        <div className={styles.newsComp}>
            <div
                className={styles.titleNews}
                style={{ backgroundColor: color }}
            >
                <h2 className={styles.title2}>{data.text.title}</h2>
            </div>
            <div className={styles.contentNews}>
                <SearchNews
                    value={{
                        searchQuery,
                        handleSearchInputChange,
                        styles,
                        activeFilter,
                        setActiveFilter,
                        dataNew,
                    }}
                />
                <div className={styles.articlesContentNews}>
                    <div className={styles.firstRowArticles}>
                        {paginatedContent.length > 0 ? (
                            paginatedContent.slice(0, 2).map((item) => (
                                <Card
                                    value={{
                                        item,
                                        options: options.forCard,
                                        setCurrentItem,
                                    }}
                                    key={item.id}
                                />
                            ))
                        ) : (
                            <NothingfoundComp value={{ setSearchQuery }} />
                        )}
                        <SubscribeComp
                            value={{ dataNew, options: options.forSubscribe }}
                        />
                    </div>
                    <div className={styles.secondRowArticles}>
                        {paginatedContent.slice(2, 8).map((item) => (
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
                <Pagination
                    currentPage={currentPageCarousel}
                    totalPages={totalPages}
                    onPageChange={onPageChange}
                    styles={styles}
                />
            </div>
        </div>
    );
};

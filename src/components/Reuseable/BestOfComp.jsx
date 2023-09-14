import React, { useEffect, useState } from "react";
import { Title2Comp } from "./Title2Comp";
import { allStyles } from "../../styles/allStyles";
import { Card } from "./Card";

export const BestOfComp = ({
    value: { dataNew, data, options, setCurrentItem },
}) => {
    // DATA and STYLES
    const color = options.styles.background;
    const styles = allStyles.reuseableStyles.bestOfCompStyles;
    const dataButtons = dataNew.components.bestofCompData;

    // SORTING
    const [sortType, setSortType] = useState("week");
    useEffect(() => {
        const today = new Date();

        function filterBySortingType(item) {
            const date = new Date(item.dateForSort);
            const timeDifference = today - date;
            const millisecondsInDay = 24 * 60 * 60 * 1000;
            const millisecondsInWeek = 7 * millisecondsInDay;
            const millisecondsInMonth = 30 * millisecondsInDay;
            const millisecondsInYear = 365 * millisecondsInDay;

            switch (sortType) {
                case "week":
                    return timeDifference <= millisecondsInWeek;
                case "month":
                    return timeDifference <= millisecondsInMonth;
                case "year":
                    return timeDifference <= millisecondsInYear;
                default:
                    return false;
            }
        }

        const filteredData = data.content.filter(filterBySortingType);

        const sortedData = filteredData.sort((a, b) => {
            const dateA = new Date(a.viewed);
            const dateB = new Date(b.viewed);

            return dateB - dateA;
        });
        setSortedData(sortedData);
    }, [sortType, data.content]);

    const toggleType = (event) => {
        setSortType(event.target.name);
        setActiveButton(event.target.name);
    };
    const [sortedData, setSortedData] = useState({});

    // CAROUSEL
    const [currentPageCarousel, setCurrentPageCarousel] = useState(1);
    const itemsPerPage = 3;
    const [totalPages, setTotalPages] = useState(
        Math.ceil(sortedData.length / itemsPerPage)
    );

    useEffect(() => {
        setTotalPages(Math.ceil(sortedData.length / itemsPerPage));
    }, [sortedData, itemsPerPage]);

    const startIndex = (currentPageCarousel - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const sliceData = (sortedData) => {
        let data = [];
        if (sortedData.length > 0) {
            data = sortedData.slice(startIndex, endIndex);
        } else {
            data = sortedData;
        }
        return data;
    };
    const paginatedContent = sliceData(sortedData);

    const onPageChange = (pageNumber) => {
        setCurrentPageCarousel(pageNumber);
    };
    const handlePrevClick = () => {
        if (currentPageCarousel > 1) {
            onPageChange(currentPageCarousel - 1);
        }
    };
    const handleNextClick = () => {
        if (currentPageCarousel < totalPages) {
            onPageChange(currentPageCarousel + 1);
        }
    };

    const [activeButton, setActiveButton] = useState("week");
    const isPreviousDisabled = currentPageCarousel === 1;
    const isNextDisabled = currentPageCarousel === totalPages;

    return (
        <div className={styles.bestOfComp}>
            <Title2Comp value={{ title: data.text.title, color }} />
            <div className={styles.controlBestOf}>
                <div className={styles.buttonsType}>
                    {dataButtons.buttons.map((item) => (
                        <button
                            key={item.id}
                            name={item.name}
                            className={`${
                                activeButton === item.name ? styles.active : ""
                            }`}
                            onClick={(event) => toggleType(event)}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>
                <div className={styles.buttonCarousel}>
                    <button
                        onClick={handlePrevClick}
                        disabled={isPreviousDisabled}
                    >
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <button onClick={handleNextClick} disabled={isNextDisabled}>
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
            <div className={styles.articlesList}>
                {sortedData.length > 0 ? (
                    paginatedContent.map((item) => (
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
                    <div className={styles.noResultsFound}>
                        <p>Oops, nothing found</p>
                    </div>
                )}
            </div>
        </div>
    );
};

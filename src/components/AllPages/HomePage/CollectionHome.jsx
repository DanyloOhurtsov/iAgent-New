import React, { useState } from "react";
import { allStyles } from "../../../styles/allStyles";
import { Card } from "../../Reuseable/Card";
import { Title2Comp } from "../../Reuseable/Title2Comp";

export const CollectionHome = ({ value: { dataNew, setCurrentItem } }) => {
    // DATA and STYLES
    const data = dataNew.pages.homePageData.content.collection;
    const options = data.options;
    const styles = allStyles.allPagesStyles.homePageStyles.collectionHome;

    // SLIDER options
    let dataForCollectionSlider = [];
    const maxItemsToShow = 12;
    const visibleItems = 3;

    const [activeButton, setActiveButton] = useState("Compra");
    const [currentIndex, setCurrentIndex] = useState(0);

    const updateActiveButton = (buttonName) => {
        setActiveButton(buttonName);
        setCurrentIndex(0);
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const nextSlide = () => {
        if (currentIndex < dataForCollectionSlider.length - visibleItems) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const isPreviousDisabled = currentIndex === 0;
    const isNextDisabled =
        currentIndex === dataForCollectionSlider.length - visibleItems;

    if (activeButton === "Compra") {
        dataForCollectionSlider = data.content.buy.content.slice(
            0,
            maxItemsToShow
        );
    } else if (activeButton === "Alquiler") {
        dataForCollectionSlider = data.content.rent.content.slice(
            0,
            maxItemsToShow
        );
    }

    return (
        <div className={styles.collectionCompHome}>
            <Title2Comp
                value={{
                    title: data.text.title,
                    color: options.styles.background,
                }}
            />
            <div className={styles.controlCollectionHome}>
                <div className={styles.buttonsControlCollectionHome}>
                    {data.text.carousel.button.map((item) => (
                        <button
                            key={item.id}
                            className={`${styles.buttonToggleNews} ${
                                activeButton === item.name ? styles.active : ""
                            }`}
                            onClick={() => updateActiveButton(item.name)}
                        >
                            {item.text}
                        </button>
                    ))}
                </div>
                <div className={styles.sliderControlCollectionHome}>
                    <button
                        className={styles.prevButton}
                        onClick={prevSlide}
                        disabled={isPreviousDisabled}
                    >
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <button
                        className={styles.nextButton}
                        onClick={nextSlide}
                        disabled={isNextDisabled}
                    >
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
            <div className={styles.sliderCollectionHome}>
                <div className={styles.sliderWrapper}>
                    {dataForCollectionSlider
                        .slice(currentIndex, currentIndex + visibleItems)
                        .map((item) => (
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

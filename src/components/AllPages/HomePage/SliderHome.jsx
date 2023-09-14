import React, { useState } from "react";
import { allStyles } from "../../../styles/allStyles";

export const SliderHome = ({ value: { dataNew } }) => {
    const data = dataNew.pages.homePageData.content.slider.content
    const styles = allStyles.allPagesStyles.homePageStyles.sliderHome;
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
    };

    return (
        <div className={styles.sliderComp}>
            {data.map((slide, index) => (
                <div
                    key={index}
                    className={`${styles.slide} ${
                        index === currentSlide ? styles.active : ""
                    }`}
                    style={{ backgroundColor: slide.background }}
                >
                    <div className={styles.slideImage}>
                        <img src={slide.image} alt={`Slide ${index}`} />
                    </div>
                    <div className={styles.slideText}>
                        <div className={styles.insideText}>
                            <p className={styles.titleSlide}>{slide.title}</p>
                            <p className={styles.descSlide}>{slide.desc}</p>
                        </div>
                    </div>
                </div>
            ))}
            <button className={styles.nextButton} onClick={nextSlide}>
                <i className="fa-solid fa-chevron-right"></i>
            </button>
        </div>
    );
};

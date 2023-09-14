import React, { useEffect, useState } from "react";
import { allStyles } from "../../styles/allStyles";

export const VideosComp = ({
    value: { dataNew, dataVideo, options },
}) => {
    const styles = allStyles.reuseableStyles.videoCompStyles;
    const text = dataNew.components.videoCompData;
    const data = dataVideo;
    const color = options.styles.background;

    const [selectedVideo, setSelectedVideo] = useState(data.content[0]);

    const handleVideoClick = (video) => {
        setSelectedVideo(video);
    };

    // PAGINATION
    const [currentPageCarousel, setCurrentPageCarousel] = useState(1);
    const [itemsPerPage] = useState(4);
    const [totalPages, setTotalPages] = useState(
        Math.ceil(data.content.length / itemsPerPage)
    );

    useEffect(() => {
        setTotalPages(Math.ceil(data.content.length / itemsPerPage));
    }, [data.content, itemsPerPage]);

    const startIndex = (currentPageCarousel - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const paginatedContent = data.content.slice(startIndex, endIndex);

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

    return (
        <div className={styles.videosComp}>
            <div className={styles.selectedVideo}>
                <iframe
                    className={styles.videoBlock}
                    src={selectedVideo.video}
                    title={selectedVideo.title}
                    autoPlay={false}
                ></iframe>
                <div className={styles.dateSection}>
                    <p>{selectedVideo.dateNumber}</p>
                    <p>
                        <i className="fa-regular fa-eye"></i>
                        {selectedVideo.viewed}
                    </p>
                </div>
                <p className={styles.titleSelectedVideo}>
                    {selectedVideo.title}
                </p>
                <p className={styles.descSelectedVideo}>{selectedVideo.desc}</p>
            </div>
            <div
                className={styles.paginationVideo}
                style={{ backgroundColor: color }}
            >
                <div className={styles.carouselOptions}>
                    <button onClick={handlePrevClick}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <p className={styles.titleCarousel}>{text.title}</p>
                    <button onClick={handleNextClick}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
                <div className={styles.listThubnailVideos}>
                    {paginatedContent.map((item) => (
                        <div
                            className={styles.videoThumbnail}
                            key={item.id}
                            onClick={() => handleVideoClick(item)}
                        >
                            <div className={styles.textThumbnail}>
                                <p className={styles.thumbnailTitle}>
                                    {item.title}
                                </p>
                                <p className={styles.thumbnailDate}>
                                    {item.dateNumber}
                                </p>
                            </div>
                            <div className={styles.imageThumbnail}>
                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                    className={styles.thumbnailImage}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

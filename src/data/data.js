import { allImages } from "../images/allImages";

const peopleList = [
    "John Smith",
    "Jane Johnson",
    "Michael Brown",
    "Emily Williams",
    "William Jones",
    "Olivia Miller",
    "James Davis",
    "Sophia García",
    "Benjamin Rodriguez",
    "Ava Martínez",
    "Alexander Hernández",
    "Isabella López",
    "Henry González",
    "Mia Perez",
    "Daniel Wilson",
    "Charlotte Anderson",
    "Joseph Taylor",
    "Amelia Moore",
    "David Jackson",
    "Ella White",
];
const numberOfArticles = 1000;

function getOrder(i) {
    return i + 1;
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomDate() {
    const startDate = new Date(2022, 0, 1).getTime();
    const endDate = new Date().getTime();
    const randomTimestamp = getRandomInt(startDate, endDate);
    return new Date(randomTimestamp).toLocaleDateString("ru-RU");
}

function convertToJavaScriptDate(dateString) {
    const dateParts = dateString.split(".");
    const jsDate = new Date(
        parseInt(dateParts[2]),
        parseInt(dateParts[1]) - 1,
        parseInt(dateParts[0])
    );
    return jsDate;
}

function generateRandomComent(id) {
    const randomPersonIndex = Math.floor(Math.random() * peopleList.length);
    const randomPerson = peopleList[randomPersonIndex];

    const comment = {
        id,
        personPhoto: "https://xsgames.co/randomusers/avatar.php?g=female",
        personName: randomPerson,
        date: generateRandomDate(),
        likes: getRandomInt(0, 100),
        comments: getRandomInt(0, 100),
        text: "With nature-inspired architecture, amenities uniquely focused on well-being, and refined interiors influenced by Vastu Shastra,rchitecture, amenities uniquely focused on well-being, and refined interiors influenced by Vastu Shastra",
    };
    return comment;
}

function generateRandomArticle(id) {
    const viewed = getRandomInt(0, 100);
    const comments = getRandomInt(0, 100);

    const dateNumber = generateRandomDate();
    const dateForSort = convertToJavaScriptDate(dateNumber);

    const dataComments = Array.from({ length: comments }, (_, id) =>
        generateRandomComent(id, peopleList)
    );
    const rateNumber = getOrder(id);

    const article = {
        id,
        image: allImages.articleImages.img1Article,
        title: `${id + 1} Eywa: New Take on Dubai’s Luxury Real Estate`,
        dateNumber,
        desc: "With nature-inspired architecture, amenities uniquely focused on well-being, and refined interiors influenced by Vastu Shastra, this complex is set to",
        viewed,
        text: "propestar marketing",
        link: "",
        dataComments,
        dateForSort,
        rateNumber,
    };

    return article;
}

export const dataArticles = Array.from({ length: numberOfArticles }, (_, id) =>
    generateRandomArticle(id)
);

export const dataArticlesRent = dataArticles.map((article) => ({
    ...article,
    image: allImages.articleImages.img2Article,
}));

// VIDEO
function generateRandomVideo(id) {
    const viewed = getRandomInt(0, 100);

    const dateNumber = generateRandomDate();

    const video = {
        id,
        video: allImages.videoTest,
        title: `${id + 1} Eywa: New Take on Dubai’s Luxury Real Estate`,
        dateNumber,
        thumbnail: allImages.previewVideo,
        desc: "With nature-inspired architecture, amenities uniquely focused on well-being, and refined interiors influenced by Vastu Shastra,With nature-inspired architecture, amenities uniquely focused on well-being, and refined interiors influenced by Vastu Shastra,",
        viewed,
        active: false,
    };

    return video;
}
export const dataVideo = Array.from({ length: numberOfArticles }, (_, id) =>
    generateRandomVideo(id)
);

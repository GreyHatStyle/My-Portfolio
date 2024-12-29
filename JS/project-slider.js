// Project data
const projects = [
    {
        image: "Images/Projects/pf1.png",
        heading: "01",
        title: "Practical File Generator",
        description: "This project is designed to minimize the process of making practical files by college students, by doing most of manual work automatically. It follows Graphic Era Hill University's Format of making Practical files.",
        lang: "Python, PyQt6, python-docx",
        github: "https://github.com/GreyHatStyle/Practical-File-Automator-GEHU/tree/main"
    },
    {
        image: "Images/Projects/spam-ham.png",
        heading: "02",
        title: "Spam Ham Detection",
        description: "The model used in project was trained in SMS Spam collection Dataset with 5572 messages, the Front of Website was developed using HTML, CSS and Javascript with the help for Flask for connection.",
        lang: "JavaScript, HTML, CSS, Flask, Tensorflow 2.0, Scikit-learn",
        github: "https://github.com/GreyHatStyle/Spam-Ham-Detection"
    },
    {
        image: "Images/Projects/banana.png",
        heading: "03",
        title: "Banana Ripeness Classifier",
        description: "Takes image of banana as input, and predicts its ripeness classification: Unripe, Fresh, Ripe, Overripe, Rotten. Trained using Convolution Nerual Network, front-end comming soon...",
        lang: "Python, HTML, CSS, Tensorflow 2.0, VGG-16",
        github: "https://github.com/GreyHatStyle/Banana-Ripeness-Classification"
    }
];

// Initial index
let currentIndex = 0;

// Update content function
function updateContent(index) {
    const project = projects[index];
    const projectImage = document.querySelector("#projects .image img");
    const projectHeading = document.querySelector("#projects .content .heading");
    const projectTitle = document.querySelector("#projects .content h1");
    const projectDescription = document.querySelector("#projects .content p:not(.lang)");
    const projectLang = document.querySelector("#projects .content .lang");
    const projectGithub = document.querySelector("#projects .buttons a");

    projectImage.src = project.image;
    projectHeading.textContent = project.heading;
    projectTitle.textContent = project.title;
    projectDescription.textContent = project.description;
    projectLang.textContent = project.lang;
    projectGithub.href = project.github;
}

// Functions for next and previous
function nextProject() {
    currentIndex = (currentIndex + 1) % projects.length;
    updateContent(currentIndex);
}

function prevProject() {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    updateContent(currentIndex);
}

// Initialize with the first project
updateContent(currentIndex);

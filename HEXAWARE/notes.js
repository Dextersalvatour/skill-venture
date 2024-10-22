// JavaScript to handle navigation and show Notes page
document.getElementById('notes').addEventListener('click', function () {
    document.getElementById('notes-page').style.display = 'block';
});

// You can dynamically change the progress like this if needed:
const progressBars = document.querySelectorAll('.progress-bar progress');
progressBars.forEach((progress, index) => {
    const progressValue = Math.floor(Math.random() * 100); // Random value for testing
    progress.value = progressValue;
    progress.nextElementSibling.innerText = `${progressValue}%`;
});

// JavaScript for dynamically adding videos (if needed)
document.addEventListener("DOMContentLoaded", function () {
    const videoList = [
        @REM { title: "Introduction to HTML", path: "path_to_your_video/video1.mp4" },
        @REM { title: "JavaScript Basics", path: "path_to_your_video/video2.mp4" },
        @REM { title: "Data Science Overview", path: "path_to_your_video/video3.mp4" }
        // Add more videos here
    ];

    const videoContainer = document.querySelector(".video-list");

    videoList.forEach(video => {
        const videoItem = document.createElement("div");
        videoItem.classList.add("video-item");
        
        videoItem.innerHTML = `
            <h3>${video.title}</h3>
            <video controls>
                <source src="${video.path}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
        
        videoContainer.appendChild(videoItem);
    });
});

@REM // Scroll buttons functionality
@REM document.getElementById('scroll-left').addEventListener('click', function () {
@REM     document.getElementById('notes-list').scrollBy({
@REM         left: -250,
@REM         behavior: 'smooth'
@REM     });
@REM });

@REM document.getElementById('scroll-right').addEventListener('click', function () {
@REM     document.getElementById('notes-list').scrollBy({
@REM         left: 250,
@REM         behavior: 'smooth'
@REM     });
@REM });

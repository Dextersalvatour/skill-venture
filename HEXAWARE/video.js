document.addEventListener("DOMContentLoaded", function () {
    const videoList = [
        @REM { title: "Data Science Overview", path: "datascience.mp4" },
        @REM { title: "Cyber Security Overview", path: "cybersecurity.mp4" },
        @REM { title: "Java Fullstack Overview", path: "java.mp4" },
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

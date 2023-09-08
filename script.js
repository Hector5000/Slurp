// hamburger
// to change navigations to hamburger icon

document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector(".nav-list").classList.toggle("active");
});


// filter element
// this helps to filter the images in item

const filterButtons = document.querySelectorAll(".filter-button");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");

        galleryItems.forEach(item => {
            if (category === "all" || item.getAttribute("data-category") === category) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});


// counter
// this helps to make the conter work

const counters = document.querySelectorAll('.counter');
const targetCounts = [9750, 2800, 5700, 1600]; // Change these to the desired final counts
const animationDuration = 2000; // Change this to the desired animation duration in milliseconds

const increment = targetCounts.map(count => Math.ceil(count / (animationDuration / 100)));
let currentCounts = [0, 0, 0, 0];

function updateCount(index) {
    currentCounts[index] += increment[index];
    if (currentCounts[index] >= targetCounts[index]) {
        currentCounts[index] = targetCounts[index];
        clearInterval(countIntervals[index]);
    }
    counters[index].textContent = currentCounts[index];
}

const countIntervals = targetCounts.map((_, index) => {
    updateCount(index); // Start the counting animation
    return setInterval(() => updateCount(index), 100);
});

// to Create an intersection observer for the conter
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounting(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe each counter element
counters.forEach(counter => {
    observer.observe(counter);
});

// Function to start counting
function startCounting(counterElement) {
    const index = Array.from(counters).indexOf(counterElement);
    let currentCount = 0;
    const increment = Math.ceil(targetCounts[index] / (animationDuration / 100));

    const interval = setInterval(() => {
        currentCount += increment;
        if (currentCount >= targetCounts[index]) {
            currentCount = targetCounts[index];
            clearInterval(interval);
        }
        counterElement.textContent = currentCount;
    }, 100);
}

// Get references to the pop-up and buttons
const imagePopup = document.getElementById('imagePopup');
const showPopupButton = document.getElementById('showPopup');
const closePopupButton = document.getElementById('closePopup');

// Show the pop-up when the "Show Pop-up" button is clicked
showPopupButton.addEventListener('click', () => {
    imagePopup.style.display = 'block';
});

// Close the pop-up when the close button is clicked
closePopupButton.addEventListener('click', () => {
    imagePopup.style.display = 'none';
});


// video blog
// 
const videos = document.querySelectorAll('.video');
  
videos.forEach((video) => {
    video.addEventListener('click', () => {
        // Remove active class from all videos
        videos.forEach((v) => {
            v.classList.remove('active');
        });

        // Add active class to the clicked video
        video.classList.add('active');
    });
});
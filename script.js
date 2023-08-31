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


// others order
// to bring out the space to write other orders

const itemSelect = document.getElementById("item");
const customItemInput = document.querySelector(".custom-item-input");

itemSelect.addEventListener("change", function () {
    if (itemSelect.value === "other") {
        customItemInput.style.display = "block";
    } else {
        customItemInput.style.display = "none";
    }
});




// pop up fuction
// this makes the pop up in the index to show

document.addEventListener("DOMContentLoaded", function() {
    const popupOverlay = document.getElementById('popupOverlay');
    popupOverlay.style.display = 'flex';
});

function closePopup() {
    const popupOverlay = document.getElementById('popupOverlay');
    popupOverlay.style.display = 'none';
}




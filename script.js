// ===============================
// CHENNAI EXPLORER - MAIN SCRIPT
// ===============================

// Get elements
const placesContainer = document.getElementById("placesContainer");
const placeModal = document.getElementById("placeModal");

const modalImage = document.getElementById("modalImage");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalAddress = document.getElementById("modalAddress");
const modalHistory = document.getElementById("modalHistory");
const modalFeature = document.getElementById("modalFeature");
const modalThings = document.getElementById("modalThings");
const modalMap = document.getElementById("modalMap");


// ===============================
// DISPLAY PLACES
// ===============================

function displayPlaces(placeList) {

    if (!placesContainer) {
        return;
    }

    placesContainer.innerHTML = "";

    if (placeList.length === 0) {

        placesContainer.innerHTML = `
            <div class="no-results">
                <h3>No places found</h3>
                <p>Try another search or category.</p>
            </div>
        `;

        return;
    }

    placeList.forEach((place, index) => {

        const card = document.createElement("div");

        card.className = "place-card";

        card.innerHTML = `
            <div class="place-image-wrapper">
                <img 
                    src="${place.image}" 
                    alt="${place.name}"
                    class="place-image"
                    onerror="this.style.display='none'; this.parentElement.classList.add('image-error');"
                >

                <span class="place-letter">
                    ${place.letter}
                </span>
            </div>

            <div class="place-info">

                <span class="place-category">
                    ${place.category}
                </span>

                <h3>
                    ${place.name}
                </h3>

                <p class="place-address">
                    📍 ${place.address}
                </p>

                <button 
                    class="view-button"
                    onclick="openPlace(${index})"
                >
                    View Details →
                </button>

            </div>
        `;

        placesContainer.appendChild(card);
    });
}


// ===============================
// OPEN PLACE MODAL
// ===============================

function openPlace(index) {

    const place = places[index];

    if (!placeModal || !place) {
        return;
    }

    modalImage.src = place.image;
    modalImage.alt = place.name;

    modalCategory.textContent = place.category;
    modalTitle.textContent = place.name;
    modalAddress.textContent = "📍 " + place.address;
    modalHistory.textContent = place.history;
    modalFeature.textContent = place.feature;
    modalThings.textContent = place.things;

    modalMap.href = place.map;

    placeModal.classList.add("active");

    document.body.style.overflow = "hidden";
}


// ===============================
// CLOSE MODAL
// ===============================

function closeModal() {

    if (!placeModal) {
        return;
    }

    placeModal.classList.remove("active");

    document.body.style.overflow = "auto";
}


// Close modal when clicking outside
if (placeModal) {

    placeModal.addEventListener("click", function(event) {

        if (event.target === placeModal) {
            closeModal();
        }

    });
}


// Close modal with Escape key
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeModal();
    }

});


// ===============================
// SEARCH PLACES
// ===============================

function searchPlaces() {

    const searchInput = document.getElementById("searchInput");

    if (!searchInput) {
        return;
    }

    const searchText = searchInput.value.toLowerCase().trim();

    const filteredPlaces = places.filter(place => {

        return (
            place.name.toLowerCase().includes(searchText) ||
            place.category.toLowerCase().includes(searchText) ||
            place.address.toLowerCase().includes(searchText)
        );

    });

    displayPlaces(filteredPlaces);
}


// Search when pressing Enter
const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function(event) {

        if (event.key === "Enter") {
            searchPlaces();
        }

    });

}


// ===============================
// CATEGORY FILTER
// ===============================

function filterCategory(category, button) {

    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    }

    if (category === "All") {

        displayPlaces(places);

    } else {

        const filteredPlaces = places.filter(place => {

            return place.category === category;

        });

        displayPlaces(filteredPlaces);
    }
}


// ===============================
// ALPHABET FILTER
// ===============================

function filterLetter(letter, button) {

    const alphabetButtons = document.querySelectorAll(".alphabet button");

    alphabetButtons.forEach(btn => {
        btn.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    }

    const filteredPlaces = places.filter(place => {

        return place.letter === letter;

    });

    displayPlaces(filteredPlaces);
}


// ===============================
// MOBILE MENU
// ===============================

function toggleMenu() {

    const navMenu = document.getElementById("navMenu");

    if (!navMenu) {
        return;
    }

    navMenu.classList.toggle("show");
}


// Close mobile menu after clicking a link
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", function() {

        const navMenu = document.getElementById("navMenu");

        if (navMenu) {
            navMenu.classList.remove("show");
        }

    });

});


// ===============================
// INITIAL DISPLAY
// ===============================

displayPlaces(places);

/* =====================================================
   CHENNAI EXPLORER
   WEBSITE FUNCTIONS
===================================================== */


/* =====================================================
   VARIABLES
===================================================== */

const grid =
    document.getElementById("placesGrid");


let currentPlaces = places;



/* =====================================================
   DISPLAY PLACES
===================================================== */

function displayPlaces(placeList) {

    grid.innerHTML = "";


    /* No results */

    if (placeList.length === 0) {

        grid.innerHTML = `

            <div class="no-results">

                <h2>
                    😔 No places found
                </h2>

                <p>
                    Try another search or category.
                </p>

            </div>

        `;

        return;
    }



    /* Create cards */

    placeList.forEach(
        (place, index) => {


            const card =
                document.createElement("div");


            card.className =
                "place-card";


            card.innerHTML = `

                <img
                    src="${place.image}"
                    alt="${place.name}"
                    loading="lazy"
                >


                <div class="card-body">


                    <div class="card-category">

                        ${place.category}

                    </div>


                    <h3>

                        ${place.name}

                    </h3>


                    <p class="card-address">

                        📍 ${place.address}

                    </p>


                    <button

                        class="card-button"

                        onclick="openPlace(${index})"

                    >

                        Explore →

                    </button>


                </div>

            `;


            grid.appendChild(card);

        }
    );

}



/* =====================================================
   OPEN PLACE DETAILS
===================================================== */

function openPlace(index) {


    const place =
        currentPlaces[index];


    document.getElementById(
        "modalImage"
    ).src = place.image;


    document.getElementById(
        "modalImage"
    ).alt = place.name;


    document.getElementById(
        "modalCategory"
    ).textContent =
        place.category;


    document.getElementById(
        "modalName"
    ).textContent =
        place.name;


    document.getElementById(
        "modalAddress"
    ).textContent =
        "📍 " + place.address;


    document.getElementById(
        "modalHistory"
    ).textContent =
        place.history;


    document.getElementById(
        "modalUnique"
    ).textContent =
        place.unique;


    document.getElementById(
        "modalThings"
    ).textContent =
        place.things;


    document.getElementById(
        "mapLink"
    ).href =
        place.map;


    document.getElementById(
        "placeModal"
    ).style.display =
        "block";


    document.body.style.overflow =
        "hidden";

}



/* =====================================================
   CLOSE MODAL
===================================================== */

function closeModal() {


    document.getElementById(
        "placeModal"
    ).style.display =
        "none";


    document.body.style.overflow =
        "auto";

}



/* =====================================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
===================================================== */

window.onclick =
    function(event) {


        const modal =
            document.getElementById(
                "placeModal"
            );


        if (
            event.target === modal
        ) {

            closeModal();

        }

    };



/* =====================================================
   SEARCH PLACES
===================================================== */

function searchPlaces() {


    const search =
        document
            .getElementById(
                "searchInput"
            )
            .value
            .toLowerCase()
            .trim();


    const results =
        places.filter(
            (place) => {


                return (

                    place.name
                        .toLowerCase()
                        .includes(search)


                    ||

                    place.category
                        .toLowerCase()
                        .includes(search)


                    ||

                    place.area
                        .toLowerCase()
                        .includes(search)


                    ||

                    place.address
                        .toLowerCase()
                        .includes(search)


                    ||

                    place.history
                        .toLowerCase()
                        .includes(search)

                );

            }
        );


    currentPlaces =
        results;


    displayPlaces(
        results
    );

}



/* =====================================================
   CATEGORY FILTER
===================================================== */

function filterCategory(
    category
) {


    document.getElementById(
        "searchInput"
    ).value = "";


    let results;


    if (
        category === "All"
    ) {

        results =
            places;

    }

    else {

        results =
            places.filter(
                (place) =>
                    place.category === category
            );

    }


    currentPlaces =
        results;


    displayPlaces(
        results
    );


    document.getElementById(
        "places"
    ).scrollIntoView({
        behavior: "smooth"
    });

}



/* =====================================================
   A-Z FILTER
===================================================== */

function filterLetter(
    letter
) {


    document.getElementById(
        "searchInput"
    ).value = "";


    let results;


    if (
        letter === "All"
    ) {

        results =
            places;

    }

    else {

        results =
            places.filter(
                (place) =>
                    place.letter === letter
            );

    }


    currentPlaces =
        results;


    displayPlaces(
        results
    );


    document.getElementById(
        "places"
    ).scrollIntoView({
        behavior: "smooth"
    });

}



/* =====================================================
   MOBILE MENU
===================================================== */

function toggleMenu() {


    const nav =
        document.getElementById(
            "mainNav"
        );


    if (
        nav.style.display === "flex"
    ) {

        nav.style.display =
            "none";

    }

    else {

        nav.style.display =
            "flex";


        nav.style.flexDirection =
            "column";


        nav.style.position =
            "absolute";


        nav.style.top =
            "75px";


        nav.style.right =
            "0";


        nav.style.background =
            "white";


        nav.style.padding =
            "20px";


        nav.style.width =
            "220px";


        nav.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.15)";

    }

}



/* =====================================================
   ESCAPE KEY CLOSES MODAL
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closeModal();

        }

    }
);



/* =====================================================
   INITIAL WEBSITE LOAD
===================================================== */

displayPlaces(
    places
);
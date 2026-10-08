const places = [

    {
        name: "Anna Centenary Library",
        letter: "A",
        category: "Education",
        image: "anna-library.jpg",
        address: "Kotturpuram, Chennai, Tamil Nadu",
        history: "Anna Centenary Library is one of the major public libraries in Chennai. It was established as a modern knowledge and learning centre and provides access to a large collection of books and educational resources.",
        feature: "One of the largest libraries in Asia, known for its modern architecture and extensive collection of books and learning resources.",
        things: "Read books, study, use the reading areas, explore educational resources and spend time in a peaceful learning environment.",
        map: "https://www.google.com/maps/search/?api=1&query=Anna+Centenary+Library+Chennai"
    },

    {
        name: "Besant Nagar Beach",
        letter: "B",
        category: "Beach",
        image: "besant-nagar-beach.jpg",
        address: "Besant Nagar, Chennai, Tamil Nadu",
        history: "Besant Nagar Beach is a popular coastal destination in South Chennai. It is a well-known place for residents and visitors to relax and enjoy the sea.",
        feature: "A popular coastal destination with a pleasant atmosphere and promenade.",
        things: "Enjoy the beach, walk along the shore, watch the sunset, take photographs and explore nearby food outlets.",
        map: "https://www.google.com/maps/search/?api=1&query=Besant+Nagar+Beach+Chennai"
    },

    {
        name: "Chetpet Eco Park",
        letter: "C",
        category: "Nature",
        image: "chetpet-eco-park.jpg",
        address: "Chetpet, Chennai, Tamil Nadu",
        history: "Chetpet Eco Park is an urban ecological recreation space created to provide a green environment within Chennai.",
        feature: "An urban eco-park featuring greenery and recreational spaces in the middle of Chennai.",
        things: "Enjoy nature, go for walks, spend time outdoors, take photographs and explore the park environment.",
        map: "https://www.google.com/maps/search/?api=1&query=Chetpet+Eco+Park+Chennai"
    },

    {
        name: "Dakshinachitra",
        letter: "D",
        category: "Culture",
        image: "dakshinachitra.jpg",
        address: "Muttukadu, East Coast Road, Chennai, Tamil Nadu",
        history: "Dakshinachitra is a living heritage museum that presents traditional architecture, lifestyles, crafts and cultural practices from different parts of South India.",
        feature: "Traditional houses and cultural exhibits representing the heritage of South India.",
        things: "Explore traditional houses, observe handicrafts, learn about South Indian culture and attend cultural activities.",
        map: "https://www.google.com/maps/search/?api=1&query=Dakshinachitra+Chennai"
    },

    {
        name: "Elliot's Beach",
        letter: "E",
        category: "Beach",
        image: "elliots-beach.jpg",
        address: "Besant Nagar, Chennai, Tamil Nadu",
        history: "Elliot's Beach is a popular beach in Besant Nagar and is traditionally associated with the southern end of Chennai's coastal stretch.",
        feature: "Known for its comparatively peaceful atmosphere and the Karl Schmidt Memorial.",
        things: "Walk along the beach, enjoy the sea view, watch the sunset and take photographs.",
        map: "https://www.google.com/maps/search/?api=1&query=Elliots+Beach+Chennai"
    },

    {
        name: "Fort St. George",
        letter: "F",
        category: "History",
        image: "fort-st-george.jpg",
        address: "Rajaji Salai, Chennai, Tamil Nadu",
        history: "Fort St. George was established by the English East India Company in the 17th century and became an important centre of British administration.",
        feature: "An important historic fort complex associated with the colonial history of Chennai.",
        things: "Explore the historic complex, visit the museum and learn about Chennai's colonial history.",
        map: "https://www.google.com/maps/search/?api=1&query=Fort+St+George+Chennai"
    },

    {
        name: "Government Museum",
        letter: "G",
        category: "Museum",
        image: "government-museum.jpg",
        address: "Egmore, Chennai, Tamil Nadu",
        history: "The Government Museum in Chennai was established in the 19th century and houses collections covering archaeology, anthropology, art and natural history.",
        feature: "Famous for its archaeological and art collections, including important South Indian bronzes.",
        things: "Explore galleries, view historical artefacts and learn about Indian art and archaeology.",
        map: "https://www.google.com/maps/search/?api=1&query=Government+Museum+Egmore+Chennai"
    },

    {
        name: "Guindy National Park",
        letter: "G",
        category: "Nature",
        image: "guindy-national-park.jpg",
        address: "Guindy, Chennai, Tamil Nadu",
        history: "Guindy National Park is a protected green area within Chennai and preserves natural habitat inside the metropolitan city.",
        feature: "One of the few national parks located within a major Indian city.",
        things: "Observe wildlife, explore nature trails, enjoy greenery and learn about local biodiversity.",
        map: "https://www.google.com/maps/search/?api=1&query=Guindy+National+Park+Chennai"
    },

    {
        name: "Kapaleeshwarar Temple",
        letter: "K",
        category: "Temple",
        image: "kapaleeshwarar-temple.jpg",
        address: "Mylapore, Chennai, Tamil Nadu",
        history: "Kapaleeshwarar Temple is an important historic Hindu temple in Mylapore dedicated to Lord Shiva.",
        feature: "Known for its traditional Dravidian architecture and richly decorated gopuram.",
        things: "Visit the temple, observe the architecture and explore Mylapore.",
        map: "https://www.google.com/maps/search/?api=1&query=Kapaleeshwarar+Temple+Chennai"
    },

    {
        name: "Marina Beach",
        letter: "M",
        category: "Beach",
        image: "marina-beach.jpg",
        address: "Marina Beach, Chennai, Tamil Nadu",
        history: "Marina Beach is one of Chennai's most famous landmarks and forms a major part of the city's coastal identity.",
        feature: "One of the longest urban beaches in the world and a major landmark of Chennai.",
        things: "Walk along the beach, watch the sunrise, enjoy local snacks and take photographs.",
        map: "https://www.google.com/maps/search/?api=1&query=Marina+Beach+Chennai"
    },

    {
        name: "San Thome Basilica",
        letter: "S",
        category: "Church",
        image: "san-thome-basilica.jpg",
        address: "Santhome, Chennai, Tamil Nadu",
        history: "San Thome Basilica is a historic Christian church in Chennai and is traditionally associated with the tomb of Saint Thomas the Apostle.",
        feature: "An important basilica associated with the traditional burial site of Saint Thomas.",
        things: "Visit the basilica, observe the architecture and explore the historic surroundings.",
        map: "https://www.google.com/maps/search/?api=1&query=San+Thome+Basilica+Chennai"
    },

    {
        name: "Semmozhi Poonga",
        letter: "S",
        category: "Nature",
        image: "semmozhi-poonga.jpg",
        address: "Teynampet, Chennai, Tamil Nadu",
        history: "Semmozhi Poonga is a botanical garden in Chennai developed as a green recreational space.",
        feature: "A botanical garden with a wide variety of plants and landscaped green spaces.",
        things: "Walk through the garden, observe plants, relax in the greenery and take photographs.",
        map: "https://www.google.com/maps/search/?api=1&query=Semmozhi+Poonga+Chennai"
    },

    {
        name: "T. Nagar",
        letter: "T",
        category: "Shopping",
        image: "t-nagar.jpg",
        address: "T. Nagar, Chennai, Tamil Nadu",
        history: "Thyagaraya Nagar, commonly known as T. Nagar, developed into one of Chennai's major commercial and shopping districts.",
        feature: "One of Chennai's most famous shopping destinations.",
        things: "Shop for clothing, jewellery and accessories and experience Chennai's retail culture.",
        map: "https://www.google.com/maps/search/?api=1&query=T+Nagar+Chennai"
    },

    {
        name: "Valluvar Kottam",
        letter: "V",
        category: "History",
        image: "valluvar-kottam.jpg",
        address: "Nungambakkam, Chennai, Tamil Nadu",
        history: "Valluvar Kottam is a cultural monument dedicated to the Tamil poet and philosopher Thiruvalluvar and his famous work, the Thirukkural.",
        feature: "A large monument inspired by the traditional temple chariot and dedicated to Thiruvalluvar.",
        things: "Explore the monument, view the Thirukkural inscriptions and learn about Tamil literature and culture.",
        map: "https://www.google.com/maps/search/?api=1&query=Valluvar+Kottam+Chennai"
    }

];

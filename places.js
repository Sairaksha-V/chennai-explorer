const places = [

    {
        name: "Anna Centenary Library",
        letter: "A",
        category: "Education",
        image: "images/anna-library.jpg",
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
        image: "images/besant-nagar-beach.jpg",
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
        image: "images/chetpet-eco-park.jpg",
        address: "Chetpet, Chennai, Tamil Nadu",
        history: "Chetpet Eco Park is an urban ecological recreation space created to provide a green environment within Chennai. It combines recreational facilities with nature-oriented activities.",
        feature: "An urban eco-park featuring greenery and recreational spaces in the middle of Chennai.",
        things: "Enjoy nature, go for walks, spend time outdoors, take photographs and explore the park environment.",
        map: "https://www.google.com/maps/search/?api=1&query=Chetpet+Eco+Park+Chennai"
    },

    {
        name: "Dakshinachitra",
        letter: "D",
        category: "Culture",
        image: "images/dakshinachitra.jpg",
        address: "Muttukadu, East Coast Road, Chennai, Tamil Nadu",
        history: "Dakshinachitra is a living heritage museum that presents traditional architecture, lifestyles, crafts and cultural practices from different parts of South India.",
        feature: "Traditional houses and cultural exhibits representing the heritage of South India.",
        things: "Explore traditional houses, observe handicrafts, learn about South Indian culture, attend cultural activities and take photographs.",
        map: "https://www.google.com/maps/search/?api=1&query=Dakshinachitra+Chennai"
    },

    {
        name: "Elliot's Beach",
        letter: "E",
        category: "Beach",
        image: "images/elliots-beach.jpg",
        address: "Besant Nagar, Chennai, Tamil Nadu",
        history: "Elliot's Beach is a popular beach in Besant Nagar and is traditionally associated with the southern end of Chennai's coastal stretch.",
        feature: "Known for its comparatively peaceful atmosphere and the Karl Schmidt Memorial located near the beach.",
        things: "Walk along the beach, enjoy the sea view, watch the sunset, relax and visit nearby landmarks.",
        map: "https://www.google.com/maps/search/?api=1&query=Elliots+Beach+Chennai"
    },

    {
        name: "Fort St. George",
        letter: "F",
        category: "History",
        image: "images/fort-st-george.jpg",
        address: "Rajaji Salai, Chennai, Tamil Nadu",
        history: "Fort St. George was established by the English East India Company in the 17th century. It became an important centre of British administration and played a significant role in the history of Chennai.",
        feature: "An important historic fort complex associated with the colonial history of Chennai.",
        things: "Explore the historic complex, visit the museum and St. Mary's Church, and learn about Chennai's colonial history.",
        map: "https://www.google.com/maps/search/?api=1&query=Fort+St+George+Chennai"
    },

    {
        name: "Government Museum",
        letter: "G",
        category: "Museum",
        image: "images/government-museum.jpg",
        address: "Egmore, Chennai, Tamil Nadu",
        history: "The Government Museum in Chennai was established in the 19th century and houses collections covering archaeology, anthropology, art and natural history.",
        feature: "Famous for its archaeological and art collections, including important South Indian bronzes.",
        things: "Explore galleries, view historical artefacts, study sculptures and learn about Indian art and archaeology.",
        map: "https://www.google.com/maps/search/?api=1&query=Government+Museum+Egmore+Chennai"
    },

    {
        name: "Guindy National Park",
        letter: "G",
        category: "Nature",
        image: "images/guindy-national-park.jpg",
        address: "Guindy, Chennai, Tamil Nadu",
        history: "Guindy National Park is a protected green area within Chennai and is notable for preserving natural habitat inside a major metropolitan city.",
        feature: "One of the few national parks located within a major Indian city.",
        things: "Observe wildlife, explore nature trails, enjoy greenery and learn about local biodiversity.",
        map: "https://www.google.com/maps/search/?api=1&query=Guindy+National+Park+Chennai"
    },

    {
        name: "Kapaleeshwarar Temple",
        letter: "K",
        category: "Temple",
        image: "images/kapaleeshwarar-temple.jpg",
        address: "Mylapore, Chennai, Tamil Nadu",
        history: "Kapaleeshwarar Temple is an important historic Hindu temple in Mylapore dedicated to Lord Shiva. The temple is strongly associated with the cultural and religious heritage of Chennai.",
        feature: "Known for its traditional Dravidian architecture and richly decorated gopuram.",
        things: "Visit the temple, observe the architecture, explore Mylapore and experience the surrounding cultural atmosphere.",
        map: "https://www.google.com/maps/search/?api=1&query=Kapaleeshwarar+Temple+Chennai"
    },

    {
        name: "Marina Beach",
        letter: "M",
        category: "Beach",
        image: "images/marina-beach.jpg",
        address: "Marina Beach, Chennai, Tamil Nadu",
        history: "Marina Beach is one of Chennai's most famous landmarks and forms a major part of the city's coastal identity.",
        feature: "One of the longest urban beaches in the world and a major landmark of Chennai.",
        things: "Walk along the beach, watch the sunrise, enjoy local snacks, take photographs and visit nearby landmarks.",
        map: "https://www.google.com/maps/search/?api=1&query=Marina+Beach+Chennai"
    },

    {
        name: "San Thome Basilica",
        letter: "S",
        category: "Church",
        image: "images/san-thome-basilica.jpg",
        address: "Santhome, Chennai, Tamil Nadu",
        history: "San Thome Basilica is a historic Christian church in Chennai and is traditionally associated with the tomb of Saint Thomas the Apostle.",
        feature: "One of the important basilicas traditionally associated with the burial site of an apostle.",
        things: "Visit the basilica, observe the architecture, explore the museum and experience the historic surroundings.",
        map: "https://www.google.com/maps/search/?api=1&query=San+Thome+Basilica+Chennai"
    },

    {
        name: "Semmozhi Poonga",
        letter: "S",
        category: "Nature",
        image: "images/semmozhi-poonga.jpg",
        address: "Teynampet, Chennai, Tamil Nadu",
        history: "Semmozhi Poonga is a botanical garden in Chennai developed as a green recreational space in the heart of the city.",
        feature: "A botanical garden with a wide variety of plants and landscaped green spaces.",
        things: "Walk through the garden, observe plants, relax in the greenery and take photographs.",
        map: "https://www.google.com/maps/search/?api=1&query=Semmozhi+Poonga+Chennai"
    },

    {
        name: "T. Nagar",
        letter: "T",
        category: "Shopping",
        image: "images/t-nagar.jpg",
        address: "T. Nagar, Chennai, Tamil Nadu",
        history: "Thyagaraya Nagar, commonly known as T. Nagar, developed into one of Chennai's major commercial and shopping districts.",
        feature: "One of Chennai's most famous shopping destinations, particularly known for jewellery, clothing and traditional products.",
        things: "Shop for clothing, jewellery and accessories, explore commercial streets and experience Chennai's busy retail culture.",
        map: "https://www.google.com/maps/search/?api=1&query=T+Nagar+Chennai"
    },

    {
        name: "Valluvar Kottam",
        letter: "V",
        category: "History",
        image: "images/valluvar-kottam.jpg",
        address: "Nungambakkam, Chennai, Tamil Nadu",
        history: "Valluvar Kottam is a cultural monument dedicated to the Tamil poet and philosopher Thiruvalluvar and his famous work, the Thirukkural.",
        feature: "A large monument inspired by the traditional temple chariot and dedicated to Thiruvalluvar.",
        things: "Explore the monument, view the Thirukkural inscriptions and learn about Tamil literature and culture.",
        map: "https://www.google.com/maps/search/?api=1&query=Valluvar+Kottam+Chennai"
    }

];

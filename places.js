const places = [
    {
        name: "Anna Centenary Library",
        letter: "A",
        category: "Education",
        image: "anna-library.jpg",
        address: "Kotturpuram, Chennai",
        history: "Anna Centenary Library is one of the largest libraries in Asia and was established in 2010. It is named after former Tamil Nadu Chief Minister C. N. Annadurai.",
        feature: "A modern library with a large collection of books, digital resources and comfortable reading spaces.",
        things: "Reading, studying, exploring books, using digital resources and attending educational events.",
        map: "https://www.google.com/maps/search/?api=1&query=Anna+Centenary+Library+Chennai"
    },

    {
        name: "Besant Nagar Beach",
        letter: "B",
        category: "Beach",
        image: "besant-nagar-beach.jpg",
        address: "Besant Nagar, Chennai",
        history: "Besant Nagar Beach, popularly known as Elliot's Beach area, is one of the popular coastal destinations in Chennai.",
        feature: "A peaceful beach known for its relaxed atmosphere and beautiful coastline.",
        things: "Walking, relaxing, photography, enjoying the sea view and spending time with friends and family.",
        map: "https://www.google.com/maps/search/?api=1&query=Besant+Nagar+Beach+Chennai"
    },

    {
        name: "Chetpet Eco Park",
        letter: "C",
        category: "Nature",
        image: "chetpet-eco-park.jpg",
        address: "Chetpet, Chennai",
        history: "Chetpet Eco Park was developed as an urban ecological recreation space in Chennai.",
        feature: "An eco-friendly recreational area with greenery, water features and walking spaces.",
        things: "Walking, boating, photography, relaxing and enjoying nature.",
        map: "https://www.google.com/maps/search/?api=1&query=Chetpet+Eco+Park+Chennai"
    },

    {
        name: "DakshinaChitra",
        letter: "D",
        category: "Culture",
        image: "dakshinachitra.jpg",
        address: "Muttukadu, East Coast Road, Chennai",
        history: "DakshinaChitra is a heritage museum that showcases the traditional lifestyles, architecture, crafts and performing arts of South India.",
        feature: "Traditional houses, handicrafts, cultural exhibitions and demonstrations.",
        things: "Exploring heritage buildings, learning about traditional culture, shopping for handicrafts and photography.",
        map: "https://www.google.com/maps/search/?api=1&query=DakshinaChitra+Chennai"
    },

    {
        name: "Elliot's Beach",
        letter: "E",
        category: "Beach",
        image: "elliots-beach.jpg",
        address: "Besant Nagar, Chennai",
        history: "Elliot's Beach is located in Besant Nagar and is one of the quieter beaches in Chennai.",
        feature: "A calm coastal destination with a long shoreline and relaxing environment.",
        things: "Walking, relaxing, photography, enjoying the sunset and spending time with family.",
        map: "https://www.google.com/maps/search/?api=1&query=Elliots+Beach+Chennai"
    },

    {
        name: "Fort St. George",
        letter: "F",
        category: "History",
        image: "fort-st-george.jpg",
        address: "Rajaji Salai, Chennai",
        history: "Fort St. George was established by the British East India Company in 1640 and became an important centre of British administration in South India.",
        feature: "A historic fort complex containing important colonial-era buildings and museums.",
        things: "Exploring history, visiting museums, photography and learning about colonial Chennai.",
        map: "https://www.google.com/maps/search/?api=1&query=Fort+St+George+Chennai"
    },

    {
        name: "Government Museum",
        letter: "G",
        category: "Museum",
        image: "government-museum.jpg",
        address: "Egmore, Chennai",
        history: "The Government Museum in Chennai was established in 1851 and is one of the oldest museums in India.",
        feature: "Large collections covering archaeology, art, anthropology, natural history and bronze sculptures.",
        things: "Exploring galleries, learning about history and culture, viewing sculptures and photography.",
        map: "https://www.google.com/maps/search/?api=1&query=Government+Museum+Egmore+Chennai"
    },

    {
        name: "Guindy National Park",
        letter: "G",
        category: "Nature",
        image: "guindy-national-park.jpg",
        address: "Guindy, Chennai",
        history: "Guindy National Park is an important protected green area located within Chennai city.",
        feature: "A natural habitat for blackbucks, spotted deer, birds and other wildlife.",
        things: "Nature walks, wildlife observation, bird watching and photography.",
        map: "https://www.google.com/maps/search/?api=1&query=Guindy+National+Park+Chennai"
    },

    {
        name: "Kapaleeshwarar Temple",
        letter: "K",
        category: "Temple",
        image: "kapaleeshwarar-temple.jpg",
        address: "Mylapore, Chennai",
        history: "Kapaleeshwarar Temple is a historic Hindu temple dedicated to Lord Shiva and is an important cultural landmark of Chennai.",
        feature: "Traditional Dravidian architecture with a colourful and detailed gopuram.",
        things: "Temple visit, exploring architecture, photography from permitted areas and experiencing local culture.",
        map: "https://www.google.com/maps/search/?api=1&query=Kapaleeshwarar+Temple+Chennai"
    },

    {
        name: "Marina Beach",
        letter: "M",
        category: "Beach",
        image: "marina-beach.jpg",
        address: "Marina Beach Road, Chennai",
        history: "Marina Beach is one of the longest urban beaches in India and is one of Chennai's most famous landmarks.",
        feature: "A long coastline, open promenade, food stalls and vibrant public atmosphere.",
        things: "Walking, photography, enjoying the sea view, eating local snacks and watching the sunrise.",
        map: "https://www.google.com/maps/search/?api=1&query=Marina+Beach+Chennai"
    },

    {
        name: "San Thome Basilica",
        letter: "S",
        category: "Church",
        image: "san-thome-basilica.jpg",
        address: "Santhome, Chennai",
        history: "San Thome Basilica is a historic Roman Catholic church built over the traditional tomb of Saint Thomas the Apostle.",
        feature: "Neo-Gothic architecture and religious historical significance.",
        things: "Visiting the basilica, exploring architecture, prayer and learning about its history.",
        map: "https://www.google.com/maps/search/?api=1&query=San+Thome+Basilica+Chennai"
    },

    {
        name: "Semmozhi Poonga",
        letter: "S",
        category: "Nature",
        image: "semmozhi-poonga.jpg",
        address: "Cathedral Road, Chennai",
        history: "Semmozhi Poonga is a botanical garden located in the heart of Chennai.",
        feature: "A green urban space with a variety of plants, trees and landscaped gardens.",
        things: "Walking, relaxing, photography, learning about plants and enjoying greenery.",
        map: "https://www.google.com/maps/search/?api=1&query=Semmozhi+Poonga+Chennai"
    },

    {
        name: "T. Nagar",
        letter: "T",
        category: "Shopping",
        image: "t-nagar.jpg",
        address: "T. Nagar, Chennai",
        history: "T. Nagar is one of Chennai's busiest commercial and shopping districts and is especially known for jewellery, textiles and traditional clothing.",
        feature: "A major shopping destination with numerous stores, markets and commercial establishments.",
        things: "Shopping, exploring local markets, buying traditional clothes and jewellery and enjoying local food.",
        map: "https://www.google.com/maps/search/?api=1&query=T+Nagar+Chennai"
    },

    {
        name: "Valluvar Kottam",
        letter: "V",
        category: "History",
        image: "valluvar-kottam.jpg",
        address: "Nungambakkam, Chennai",
        history: "Valluvar Kottam is a monument dedicated to the Tamil poet and philosopher Thiruvalluvar.",
        feature: "A large stone chariot structure and inscriptions featuring verses from the Thirukkural.",
        things: "Exploring Tamil heritage, viewing the architecture, learning about Thiruvalluvar and photography.",
        map: "https://www.google.com/maps/search/?api=1&query=Valluvar+Kottam+Chennai"
    }
];

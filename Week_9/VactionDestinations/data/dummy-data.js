import Country from "../models/country";
import Vacation from "../models/vaction";

export const COUNTRY = [
  new Country("c1", "USA", "#f44336"), // Red
  new Country("c2", "France", "#2196f3"), // Blue
  new Country("c3", "Australia", "#4caf50"), // Green
  new Country("c4", "Japan", "#ff9800"), // Orange
  new Country("c5", "Tanzania", "#9c27b0"), // Purple
  new Country("c6", "Peru", "#ffeb3b"), // Yellow
  new Country("c7", "Italy", "#03a9f4"), // Light Blue
  new Country("c8", "Egypt", "#8bc34a"), // Light Green
  new Country("c9", "Ecuador", "#ff5722"), // Deep Orange
  new Country("c10", "India", "#673ab7"), // Deep Purple
  new Country("c11", "China", "#e91e63"), // Pink
  new Country("c12", "Brazil", "#00bcd4"), // Cyan
];

export const VACATION = [
  new Vacation(
    "v1",
    "c1",
    "Grand Canyon Adventure",
    120,
    1919,
    4.9,
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/56/16/03/grand-canyon-adventures.jpg?w=1200&h=900&s=1",
    "Explore the breathtaking vistas of the Grand Canyon on this unforgettable adventure."
  ),
  new Vacation(
    "v2",
    "c1",
    "Yellowstone Exploration",
    150,
    1872,
    4.8,
    "https://s3.amazonaws.com/cms.ipressroom.com/175/files/202211/63a4bb26b3aed35361409876_Yellowstone+Magma/Yellowstone+Magma_hero.jpg",
    "Discover the natural wonders and wildlife of Yellowstone, America's first national park."
  ),
  new Vacation(
    "v3",
    "c2",
    "Eiffel Tower Visit",
    110,
    1889,
    4.7,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/800px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg",
    "Experience the iconic Eiffel Tower with breathtaking views over Paris."
  ),
  new Vacation(
    "v4",
    "c2",
    "Louvre Museum Tour",
    130,
    1793,
    4.8,
    "https://media.architecturaldigest.com/photos/5900cc370638dd3b70018b33/16:9/w_2560%2Cc_limit/Secrets%2520of%2520Louvre%25201.jpg",
    "Explore the world-renowned Louvre to see the Mona Lisa and thousands of other artworks."
  ),
  new Vacation(
    "v5",
    "c3",
    "Great Barrier Reef Dive",
    200,
    1981,
    4.9,
    "https://queensland.com/content/dam/teq/consumer/global/images/destinations/tropical-north-queensland/blog-images/2021_TNQ_CalyspoReefCruises_AgincourtReef_DivingSnorkelling_AndrewWatson_146895.jpg",
    "Dive into the vibrant underwater world of the Great Barrier Reef."
  ),
  new Vacation(
    "v6",
    "c3",
    "Sydney Opera House Experience",
    180,
    1973,
    4.8,
    "https://upload.wikimedia.org/wikipedia/commons/a/a0/Sydney_Australia._%2821339175489%29.jpg",
    "Visit the architectural masterpiece of the Sydney Opera House on a stunning harbor."
  ),
  new Vacation(
    "v7",
    "c4",
    "Mount Fuji Hike",
    100,
    1950,
    4.7,
    "https://picjumbo.com/wp-content/uploads/beautiful-mount-fuji-free-photo-2210x1473.jpg",
    "Experience the serene beauty of Mount Fuji with a guided hike to its summit."
  ),
  new Vacation(
    "v8",
    "c4",
    "Tokyo Skytree Adventure",
    120,
    2012,
    4.6,
    "https://www.gotokyo.org/en/destinations/eastern-tokyo/skytree-and-around/images/xmain_g10027.jpg.pagespeed.ic.rRFDNnqsNC.jpg",
    "Get a bird's-eye view of Tokyo from the Skytree, one of the tallest structures in the world."
  ),
  new Vacation(
    "v9",
    "c5",
    "Safari in Serengeti",
    300,
    1951,
    4.9,
    "https://www.nationalgeographic.com/content/dam/expeditions/destinations/africa/journeys/Tanzania-Safari-Experience/tanzania-safari-experience-lead-lion-cubs.jpg",
    "Embark on a safari adventure in the Serengeti, home to a diverse range of wildlife."
  ),
  new Vacation(
    "v10",
    "c5",
    "Kilimanjaro Climbing",
    250,
    1889,
    4.8,
    "https://explorerspassage.com/wp-content/uploads/2022/11/climbing-mount-kilimanjaro-scaled.jpg",
    "Challenge yourself with a climb to the summit of Mount Kilimanjaro, Africa's highest peak."
  ),
  new Vacation(
    "v11",
    "c6",
    "Machu Picchu Trek",
    400,
    1911,
    4.9,
    "https://amanda-wanders.com/wp-content/uploads/2022/05/Machu-Picchu-Hike.jpg",
    "Discover the ancient Incan city of Machu Picchu through a scenic trek."
  ),
  new Vacation(
    "v12",
    "c6",
    "Amazon Rainforest Expedition",
    350,
    1542,
    4.8,
    "https://earthwatch.org/sites/default/files/styles/expedition_slider/public/2020/03/12/Bodmer%20Carousel%205%20%20credit%20Kimberlyn%20Pinedo.jpg?itok=50gjZpUZ",
    "Explore the biodiversity of the Amazon Rainforest in an unforgettable expedition."
  ),
  new Vacation(
    "v13",
    "c7",
    "Colosseum Tour",
    90,
    80,
    4.7,
    "https://www.thecolosseum.org/wp-content/uploads/2017/09/colosseum-inside-optimized-1-970x647.jpg",
    "Step back in time with a tour of the Colosseum, the iconic symbol of ancient Roman power and engineering."
  ),
  new Vacation(
    "v14",
    "c7",
    "Venice Gondola Ride",
    150,
    697,
    4.8,
    "https://www.tripsavvy.com/thmb/mfCW-Tfs6dye9A9teSFCvgTNNjA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/italy--venice--elevated-view-of-canal-in-city-543346423-59812f179abed50010eeb207.jpg",
    "Experience the romantic charm of Venice with a gondola ride through its scenic waterways."
  ),
  new Vacation(
    "v15",
    "c8",
    "Pyramids of Giza Exploration",
    180,
    2580,
    4.9,
    "https://discovery.sndimg.com/content/dam/images/discovery/fullset/2022/10/Curiosity%20pyramids%20of%20giza%20GettyImages-1085205362.jpg.rend.hgtvcom.1280.720.suffix/1665772906478.jpeg",
    "Explore the mysteries of the Pyramids of Giza, one of the Seven Wonders of the Ancient World."
  ),
  new Vacation(
    "v16",
    "c8",
    "Nile River Cruise",
    220,
    4000,
    4.8,
    "https://imageio.forbes.com/specials-images/imageserve/64eed8a7b0e47ddfc4d8ae1f/The-Oberoi-Zahra--Luxury-Nile-Cruiser-copy/960x0.jpg?format=jpg&width=960",
    "Sail down the Nile in luxury, witnessing ancient monuments and timeless landscapes."
  ),
  new Vacation(
    "v17",
    "c9",
    "Galapagos Islands Adventure",
    500,
    1535,
    4.9,
    "https://mtsobek.imgix.net/2022/01/galapagos-web.png?auto=compress&fm=png&ixlib=php-3.3.1",
    "Encounter unique wildlife and pristine nature on a once-in-a-lifetime trip to the Galapagos Islands."
  ),
  new Vacation(
    "v18",
    "c9",
    "Quito Colonial Town Visit",
    150,
    1534,
    4.7,
    "https://www.intrepidtravel.com/adventures/wp-content/uploads/2017/03/Quito-e1489704477560-1170x658.jpg",
    "Discover the rich history and vibrant culture of Quito's well-preserved colonial center."
  ),
  new Vacation(
    "v19",
    "c10",
    "Taj Mahal Visit",
    130,
    1648,
    4.9,
    "https://www.fodors.com/wp-content/uploads/2018/01/Taj-Mahal-FAQ-hero-1.jpg",
    "Witness the stunning beauty of the Taj Mahal, a masterpiece of Mughal architecture."
  ),
  new Vacation(
    "v20",
    "c10",
    "Jaipur Exploration",
    120,
    1727,
    4.8,
    "https://www.travelandleisure.com/thmb/P67PtX_g34q6mojlfa5405HdLuw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-city-palace-TODOJAIPUR1023-767324cae1a9491696d6a53a96ffc085.jpg",
    "Explore the rich cultural heritage and majestic forts of Jaipur, the Pink City."
  ),
  new Vacation(
    "v21",
    "c11",
    "Great Wall of China Hike",
    110,
    700,
    4.9,
    "https://cdn.kimkim.com/files/a/content_articles/featured_photos/3ea0649c902810b7b55cc9fcefd41f7a84012b8c/big-5713a3f8d0074c9b5a07cf215e0fbc97.jpg",
    "Hike along the Great Wall of China for an unforgettable experience of China's ancient history."
  ),
  new Vacation(
    "v22",
    "c11",
    "Shanghai City Tour",
    140,
    1290,
    4.7,
    "https://www.chinadiscovery.com/assets/images/shanghai/huangpu-river-cruise-512.jpg",
    "Experience the dazzling modernity of Shanghai, from its skyscrapers to its historical districts."
  ),
  new Vacation(
    "v23",
    "c12",
    "Christ the Redeemer Visit",
    150,
    1931,
    4.9,
    "https://www.fodors.com/wp-content/uploads/2022/07/1-Avoiding-Crowds-shutterstock_1888737391.jpg",
    "Visit the iconic Christ the Redeemer statue for panoramic views of Rio de Janeiro."
  ),
  new Vacation(
    "v24",
    "c12",
    "Amazon River Cruise",
    300,
    1500,
    4.8,
    "https://www.aquaexpeditions.com/wp-content/uploads/2014/04/New-8-2016-Aria-Amazon-Cruise-1-Low-Resolution.jpg",
    "Embark on an adventurous cruise along the Amazon River, exploring the heart of the rainforest."
  ),
];

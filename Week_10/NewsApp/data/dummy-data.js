
import News from "../models/News";

// Dummy data for the news articles
export const NEWSARTICLES = [
  // Article link https://www.cnn.com/2024/03/19/world/t-coronae-borealis-nova-new-star-scn/index.html
  new News(
    "n1",
    "USA",
    "Explosive star event will create once-in-a-lifetime sight in the sky.",
    "March 19, 2024",
    "Ashley Strickland",
    "CNN",
    "Astronomers are expecting a “new star” to appear in the night sky anytime between now and September, and it promises to be a once-in-a-lifetime celestial sight, according to NASA." +
      " The expected brightening event, known as a nova, will occur in the Milky Way’s Corona Borealis, or Northern Crown constellation, which is located between the Boötes and Hercules constellations." +
      " While a supernova is the explosive death of a massive star, a nova refers to the sudden, brief explosion from a collapsed star known as a white dwarf.",
    "https://cdn.mos.cms.futurecdn.net/FgEPNCSUYiSNtpmPoKR975.jpg"
  ),
  // Article link https://www.usatoday.com/story/money/food/2024/03/19/dairy-queen-free-cone-day/73031698007/
  new News(
    "n2",
    "USA",
    "Dairy Queen's free cone day is back: How to get free ice cream to kick off spring",
    "March 19, 2024",
    "Anthony Robledo and Natalie Neysa Alund",
    "USA TODAY",
    "There's no better way to celebrate warmer weather than with ice cream." +
      " Dairy Queen brought back its free ice cream cone deal on Tuesday to celebrate the first day of spring. The ice cream and burger chain announced the annual tradition earlier this month." +
      " Don't snooze as this deal only lasts for one day. Here's how to get yourself the perfect frozen treat.",
    "https://pbs.twimg.com/media/GJDDRanXEAA2RNE?format=jpg&name=small"
  ),

  // Article link https://www.usnews.com/news/healthiest-communities/articles/2024-03-14/measles-outbreaks-major-threat-or-more-of-the-same
  new News(
    "n3",
    "USA",
    "Measles Outbreaks: Major Threat or More of the Same?",
    "March, 14, 2024",
    "Steven Ross Johnson",
    "U.S News",
    "News headlines and stories this year have ticked off the list of locations where people have faced potential exposure to measles, with new ones regularly emerging: a public school in Florida. A day care in Philadelphia. An airport in Denver. A migrant shelter in Chicago.\n" +
      " Taken together, the country's total caseload may not appear overwhelming: 45 measles cases had been reported across 17 states as of March 7, according to the Centers for Disease Control and Prevention. That put the U.S. on pace for around 245 cases by the end of the year, easily its highest total in the past five years but still a far cry from the nearly 1,300 seen in 2019, which marked the largest number of cases reported in the U.S. in roughly three decades.\n" +
      " Yet the threat posed by measles is insidious. The highly contagious disease can infect up to 90% of people in proximity to someone who has it if they are not immune.\n" +
      "Combine that contagiousness with vaccine skepticism and lagging vaccination rates, and experts say there's real cause for concern.",
    "https://www.nfid.org/wp-content/uploads/2023/03/Measles.jpeg"
  ),

  // Article link https://www.washingtonpost.com/travel/2024/03/19/why-does-travel-home-feel-longer/
  new News(
    "n4",
    "USA",
    "Why travel feels longer on the way home",
    "March, 19, 2024",
    "Natalie B. Compton",
    "The Washington Post",
    "The vacation is over. You’ve soaked up sun in the Caribbean, and now you must embark on the slog back to reality. On the way there, you were jazzed and distracted (did I pack enough underwear? Did we turn off the heater?); the travel day went by in a scramble.\n" +
      " Going home is another story. The same three-hour journey seems to drag on between layovers, traffic and rest stop food. The Biscoff has lost its novelty; the in-flight movies fall flat. As the minutes drip, you start to wonder “How did we ever do this?” and “Why god, why?” You swear to never to leave the house again.\n" +
      ' When they say “it’s the journey, not the destination,” it’s the trip there we romanticize, not necessarily the trip home.',
    "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/GUEE2GUDMVA3BOEOA5RDJGUHQI.jpg&w=860"
  ),

  // Article link https://www.washingtonpost.com/home/2024/03/18/pandemic-covid-bidet-sales/
  new News(
    "n5",
    "USA",
    "They panic-bought bidets during the pandemic. It changed their lives.",
    "March 18, 2024",
    "Rachel Kurzius",
    "The Washington Post",
    "While the toilet paper shortages that hit the United States during pandemic lockdowns in the spring of 2020 ultimately eased up, they’ve had a lasting impact on one industry: the bidet business.\n" +
    " Bidets — which clean you up with a stream of water, reducing the need for tissue — certainly weren’t the only items that people waited months for during that strange time. People highly rated this as changing their life.",
    "https://i5.walmartimages.com/seo/Realhomelove-Toilet-Seat-Bidet-Self-Cleaning-Dual-Nozzle-Hot-Cold-Water-Spray-Non-Electric-Mechanical-Attachment-Rear-Female-Washing-Sanitizing_d56fe9d8-d308-4b03-9ab8-914af2f2b76d.3d6716a3488894a5c6a5625ee183cc3d.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
  ),
  // From now on out these are fake articles for my own amusement
  // World News
new News(
  "n6",
  "World",
  "International Space Station to Host First Art Gallery in Space",
  "March 22, 2024",
  "Mila Kunis",
  "Global Space News",
  "In an unprecedented event, the International Space Station will soon host the first ever art gallery in space. This initiative aims to inspire unity and peace among nations, showcasing works from artists all around the globe. The gallery will be digitally displayed on screens inside the ISS, accessible for astronauts to view and share with earthlings through live streams.",
  "https://www.nasa.gov/wp-content/uploads/2023/02/International-Space-Station-in-2021.jpg"
),
new News(
  "n7",
  "World",
  "Global Leaders Agree to New Environmental Pact: The Green Sky Agreement",
  "March 24, 2024",
  "Jorge Ramos",
  "World News Daily",
  "In a historic move, leaders from 150 countries have signed the Green Sky Agreement, committing to reduce carbon emissions from air travel by 50% by 2030. This landmark decision came after intense negotiations at the Global Environmental Summit in Sweden, marking a significant step towards combating climate change.",
  "https://jackson.yale.edu/wp-content/uploads/2023/03/CA024373-MRGWF-JAX-NEWS-1600x1067_v2-800x533.jpg"
),
new News(
  "n8",
  "World",
  "The World's Oldest Library Unveils Rare Ancient Manuscripts",
  "March 27, 2024",
  "Ahmed Zewail",
  "Historical Times",
  "The prestigious Alexandria Library in Egypt, known as the world’s oldest library, has unveiled a collection of rare manuscripts dating back to the 4th century BC. These texts offer invaluable insights into ancient civilizations and promise to rewrite parts of history as we know it.",
  "https://i.insider.com/5720d775dd0895167d8b468c?width=1000&format=jpeg"
),
new News(
  "n9",
  "World",
  "Global Chess Championship Ends in Stalemate: A First in History",
  "March 29, 2024",
  "Sofia Polgar",
  "Chess World",
  "The Global Chess Championship ended in an unprecedented stalemate, marking the first time in its illustrious history that the tournament concluded without a clear winner. The final match, which lasted over 11 hours, ended in a deadlock between reigning champion Magnus Carlsen and challenger Hikaru Nakamura, captivating chess enthusiasts worldwide.",
  "https://a.espncdn.com/photo/2023/0523/r1177126_1296x729_16-9.jpg"
),
new News(
  "n10",
  "World",
  "International Culinary Festival Introduces Digital Taste Technology",
  "April 1, 2024",
  "Gordon Ramsay",
  "Culinary Innovations",
  "The International Culinary Festival is set to introduce a groundbreaking digital taste technology, allowing attendees to experience flavors from around the world without leaving their homes. Developed by culinary scientists, this technology transmits taste sensations through a special device, promising a new era of culinary exploration.",
  "https://u100s.s3.amazonaws.com/articles_images/i2/1486334255202/image.jpg"
),

// Village News (Minecraft)
new News(
  "n11",
  "Village",
  "Local Villager Invents Wheel, Sparks Transportation Revolution",
  "March 22, 2024",
  "Villager Steve",
  "Village Times",
  "In a groundbreaking development, a local villager named Steve has invented the wheel, causing a stir among the population. This simple yet revolutionary invention is expected to drastically improve transportation of goods and villagers, with several cart prototypes already being tested around the village.",
  "https://cdnb.artstation.com/p/assets/images/images/026/929/095/4k/andy-chin-andy-chin-minecraft-villager-1.jpg?1590110738"
),
new News(
  "n12",
  "Village",
  "Iron Golem Wins Villager's Heart: A Love Story",
  "March 25, 2024",
  "Villager Jane",
  "Village Love Stories",
  "In an unlikely turn of events, an Iron Golem has won the heart of a local villager, marking the first recorded instance of a cross-species relationship in the village. The couple has been seen holding hands (or hand to vine) and taking long walks around the wheat fields. The village is buzzing with excitement and curiosity about this unique love story.",
  "https://media.forgecdn.net/attachments/377/235/2019-06-04-21-15-34-1559679279.png"
),
new News(
  "n13",
  "Village",
  "Zombie Siege Turns Into Dance Party",
  "March 28, 2024",
  "DJ Zombie",
  "Village Entertainment Weekly",
  "What started as a terrifying zombie siege on a small village turned into an epic dance party last night. Villagers and zombies alike dropped their weapons in favor of busting moves to the groovy tunes spun by none other than DJ Zombie. The event has been hailed as a monumental step towards zombie-villager relations and has sparked interest in annual peace parties.",
  "https://i.pinimg.com/originals/f8/95/3d/f8953d8b42ff5239fa1b850f703d6c5a.gif"
  ),
  new News(
  "n14",
  "Village",
  "Emerald Economy Booms: Villagers Now Wealthier Than Ever",
  "April 2, 2024",
  "Economist Villager",
  "Village Financial News",
  "The village's economy is booming, thanks to a recent surge in emerald mining. Villagers are now enjoying an unprecedented level of wealth, leading to an increase in luxury block purchases and high-end potion brewing. Economic experts predict this golden age of prosperity will lead to a new era of village expansion and innovation.",
  "https://i.imgflip.com/36jzha.png"
  ),
  new News(
  "n15",
  "Village",
  "Villager Inventor Creates Automated Crop Harvester",
  "April 5, 2024",
  "Inventor Villager",
  "Village Innovations",
  "A local villager inventor has unveiled his latest creation: an automated crop harvester. This revolutionary device is powered by redstone and promises to change the way villagers approach farming forever. With the ability to harvest and replant crops autonomously, villagers can now focus on other important tasks, such as crafting and defending against the nightly mobs.",
  "https://i.makeagif.com/media/11-15-2017/2eyjrb.gif"
  ),
];


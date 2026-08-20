export interface Destination {
  slug: string;
  name: string;
  chinese: string;
  region: string;
  tagline: string;
  description: string;
  overview: string;
  highlights: string[];
  bestTime: string;
  minDays: string;
  bestFor: string;
  notFor: string;
  experienceNote: string;
  namedFoods: { name: string; price: string; why: string }[];
  localWarnings: { title: string; detail: string }[];
  climate: string;
  transport: {
    howToGet: string;
    byTrain: string;
    byFlight: string;
  };
  accommodation: { type: string; priceRange: string; detail: string }[];
  dayPlans: { label: string; steps: string[] }[];
  image: string;
}

// Images use stable placeholder URLs. Replace with real Hubei photography before launch:
// Yellow Crane Tower, Wudang Palace, Shennongjia forest, Three Gorges Dam, Enshi Canyon, etc.
export const destinations: Destination[] = [
  {
    slug: "wuhan",
    name: "Wuhan",
    chinese: "武汉",
    region: "Capital · eastern Hubei",
    tagline: "Yellow Crane Tower, East Lake and the breakfast that starts every day",
    description:
      "Wuhan is Hubei's capital and the natural gateway: a river city where the Yangtze meets the Han, home to the Yellow Crane Tower, China's largest urban lake and the breakfast culture of hot dry noodles.",
    overview:
      "Wuhan (武汉) is the 'thoroughfare of nine provinces' — China's great crossroads, where the Yangtze and the Han rivers meet and a dozen high-speed rail lines converge. It is the entry point to all of Hubei and a destination in its own right. The Yellow Crane Tower (黄鹤楼) on Snake Hill is the city's emblem: first built by the Wu kingdom around 223 AD as a military watchtower, immortalized in poems by Cui Hao and Li Bai, and rebuilt in 1985 in concrete. Its upper floors look straight down the Yangtze and across the Wuhan Yangtze River Bridge, China's first combined road-and-rail crossing, completed in 1957. East Lake (东湖), at 33 square kilometers, is the largest urban lake in China — six times the size of Hangzhou's West Lake — ringed by cycling paths, plum and cherry gardens, and the quiet Moshan hills. The Hubei Provincial Museum holds the bronze chime bells from the 2,400-year-old tomb of Marquis Yi of Zeng and the Sword of Goujian, two of China's most important archaeological objects, plus a daily chime-bell performance. Wuhan's real soul is its breakfast: the city eats hot dry noodles, doupi and fried dough before 9 AM, standing at stalls or perched on plastic stools, in a ritual called guozao (过早). The old Hankou concession district along the riverfront, a legacy of 19th-century treaty-port days, adds European arcades and the city's best evening walks. Wuhan also made modern history: the 1911 Wuchang Uprising that ended China's imperial era began here, a fact the city's memorials quietly underline.",
    highlights: [
      "Yellow Crane Tower over the Yangtze",
      "East Lake and Moshan by bike",
      "Hubei Provincial Museum (chime bells, Sword of Goujian)",
      "Yangtze River Bridge (1957)",
      "Hankou riverfront and guozao breakfast streets",
    ],
    bestTime: "April to May, September to November",
    minDays: "2 to 3 days",
    bestFor: "First-time visitors, history and museum lovers, food travelers, city-break travelers",
    notFor: "Travelers seeking mountain wilderness; Wuhan is a big, humid metropolis and a furnace in July and August",
    experienceNote:
      "We started our first Wuhan morning on Hubu Lane at 6:30 AM, a bowl of hot dry noodles in one hand and a cup of soupy rice wine in the other, watching the city wake up around us. The Yellow Crane Tower is a concrete rebuild and, honestly, more impressive from the outside than inside, but the view down the Yangtze from its upper floor is the postcard Hubei deserves — go at sunset when the bridge lights come on. The provincial museum was the surprise: standing in front of the 2,400-year-old chime bells while the daily performance played them was the single most transportive hour we spent in the province, and the Sword of Goujian, still sharp-edged after two and a half millennia, is worth the queue. East Lake was the antidote to the city's density — we rented a bike and spent an afternoon on the lakeside paths, stopping at a plum garden and a dock where old men fished in silence. Wuhan rewards you for eating early, walking the riverfront after dark, and accepting that the tower is a viewpoint with a story rather than an ancient monument.",
    namedFoods: [
      { name: "Hot dry noodles (热干面)", price: "CNY 6-10", why: "Wuhan's signature breakfast: alkaline noodles tossed in sesame paste, soy and chili, topped with pickled radish. Eat it fast, while the sauce coats every strand." },
      { name: "Doupi (豆皮)", price: "CNY 8-15", why: "A pan-fried square of sticky rice, egg and bean skin with minced pork and bamboo shoot. The other half of a proper Wuhan breakfast." },
      { name: "Wuchang fish (武昌鱼)", price: "CNY 60-120", why: "A freshwater bream from the Yangtze, steamed with ginger and scallion. Famous since the Three Kingdoms, and the dish to order for a sit-down dinner." },
    ],
    localWarnings: [
      { title: "Avoid July and August", detail: "Wuhan is one of China's 'three furnaces'. Highs of 36-40°C with humidity make sightseeing miserable. Spring and autumn are the sweet spots." },
      { title: "The tower is a rebuild", detail: "Yellow Crane Tower was rebuilt in 1985 in concrete. Go for the view and the history, not for an ancient structure. Sunrise and sunset are the best light." },
    ],
    climate: "Subtropical monsoon, 3-10°C in winter and 28-40°C in summer; hot, humid summers, mild springs and autumns",
    transport: {
      howToGet: "Wuhan is the transport hub of central China — the usual entry point for all of Hubei.",
      byTrain: "High-speed rail from Beijing (4.5h), Shanghai (4h), Guangzhou (3.5h) and Chengdu (6h). Wuhan has three main stations; check which one your train uses.",
      byFlight: "Wuhan Tianhe Airport (WUH), 25km from the city, with direct international flights and a metro line into town.",
    },
    accommodation: [
      { type: "Hankou riverside hotels", priceRange: "CNY 300-700", detail: "International chains and boutique stays along the historic Hankou riverfront, near the best breakfast streets." },
      { type: "Wuchang / university district", priceRange: "CNY 200-500", detail: "Younger, cheaper and close to East Lake and the museum. Good for metro access to everything." },
    ],
    dayPlans: [
      { label: "Day 1", steps: ["Morning: guozao breakfast on Hubu Lane, then the Yellow Crane Tower", "Afternoon: Hubei Provincial Museum (chime-bell performance)", "Evening: Hankou riverfront and Jianghan Road"] },
      { label: "Day 2", steps: ["Morning: East Lake and Moshan by bike", "Afternoon: Yangtze River Bridge walk", "Evening: doupi and hot dry noodles on a back street"] },
    ],
    image: "/images/wuhan-yangtze.webp",
  },
  {
    slug: "wudang-mountains",
    name: "Wudang Mountains",
    chinese: "武当山",
    region: "Shiyan · northwest Hubei",
    tagline: "The Taoist mountain where tai chi was born",
    description:
      "Wudang is the cradle of Taoist martial arts: a UNESCO-listed complex of Ming-dynasty palaces and temples strung across misty peaks, still home to practicing monks and tai chi schools.",
    overview:
      "The Wudang Mountains (武当山), near Shiyan in northwest Hubei, are the spiritual counterweight to Shaolin: where Shaolin is Buddhist and external, Wudang is Taoist and internal — the birthplace of tai chi and Wudang kung fu. The mountain has been a Taoist center since the Tang dynasty, but its crown is the Ming-era campaign ordered by the Yongle Emperor, who in the early 15th century sent a reported 300,000 workers to raise a complex of palaces, temples, shrines and bridges across the slopes, all dedicated to the god Zhenwu. The Golden Hall (金顶) at the summit of Tianzhu Peak (1,612m) is the centerpiece: a gilded bronze hall assembled in Beijing and carried here piece by piece, which has stood for six centuries. The Purple Cloud Palace (紫霄宫) is the grandest surviving temple, with its layered eaves and incense courtyards, while Nanyan Palace (南岩宫) is built directly into a cliff face, its Dragon-Head Incense Burner jutting out over the void. Beyond the monuments, Wudang is a working mountain: monks in dark robes, morning tai chi practice in the courtyards, and long stone stairways that test the legs. The cable car (round trip about CNY 150) saves the steepest section, but the summit still demands a real climb, and the mist that rolls through the peaks is half the atmosphere.",
    highlights: [
      "Golden Hall (Jinding) at Tianzhu Peak",
      "Purple Cloud Palace (Zixiao)",
      "Nanyan Palace built into the cliff",
      "Tai chi and Wudang kung fu",
      "Prince Slope (Taizipo) and its nine-bend wall",
    ],
    bestTime: "April to June, September to November",
    minDays: "1 to 2 days (overnight to catch sunrise)",
    bestFor: "Taoism and martial-arts fans, hikers, culture seekers, anyone who wants Shaolin's quieter sibling",
    notFor: "Travelers who dislike steep stairs; reaching the summit means climbing thousands of steps or a long cable-car-plus-hike",
    experienceNote:
      "We took the cable car up and still had a serious climb to the Golden Hall, arriving as fog rolled through the peaks below — the gilded hall glowing dimly in the mist felt like walking into a Ming scroll painting. In the Purple Cloud Palace courtyard a monk moved through a tai chi form so slowly it looked like the mountain was breathing with him, and a small group of students followed, not a performance for tourists but a daily routine. The honest advice: Wudang is a climb, not a drive-through. The flashy kung-fu stage shows near the base are skippable; the real thing is the morning practice and the silence of the high temples. Go early, stay the night near the summit area if you can, and bring grippy shoes for the uneven, often-slick stone steps.",
    namedFoods: [
      { name: "Taoist vegetarian dishes (道教斋菜)", price: "CNY 30-60", why: "Mountain temples serve simple vegetable and tofu dishes with rice. Eat at a temple guesthouse for the authentic, unseasoned version." },
      { name: "Wudang tea (武当道茶)", price: "CNY 30-80", why: "Green tea grown on the mountain slopes, sold at tea houses near the temples. Light and fragrant; buy loose, not in souvenir tins." },
    ],
    localWarnings: [
      { title: "The stairs are relentless", detail: "Expect 3-4 hours of climbing if you skip parts of the cable car. Bring grippy shoes and water; the steps are uneven and can be slick in rain." },
      { title: "Beware the 'kung fu school' pitch", detail: "Touts around the base offer short kung-fu courses of variable quality. If you want to learn, research schools in advance and check reviews." },
    ],
    climate: "Cooler mountain air, 8-24°C; crisp in autumn, occasional snow in winter. Summer is the wettest and foggiest",
    transport: {
      howToGet: "Wudang sits in the Shiyan region of northwest Hubei, reachable by rail or a flight into Shiyan.",
      byTrain: "Wudangshan station on the Wuhan-Shiyan high-speed line: about 3 hours from Wuhan (CNY 150-200), then a short shuttle to the scenic area.",
      byFlight: "Shiyan Wudangshan Airport has limited flights; most travelers arrive by rail from Wuhan or Xi'an.",
    },
    accommodation: [
      { type: "Base-town hotels", priceRange: "CNY 150-400", detail: "Practical stays in the valley town below the scenic area, close to the cable car and the bus hub." },
      { type: "Mountain guesthouses", priceRange: "CNY 200-500", detail: "Temple lodges and simple inns on the slopes, the way to catch sunrise and avoid the day-trip crowds." },
    ],
    dayPlans: [
      { label: "Overnight", steps: ["Day 1: cable car up, Golden Hall, Nanyan Palace", "Overnight on the mountain", "Day 2: Purple Cloud Palace, Prince Slope, tai chi at dawn"] },
    ],
    image: "/images/wudang-palace.webp",
  },
  {
    slug: "shennongjia",
    name: "Shennongjia",
    chinese: "神农架",
    region: "Shennongjia Forest District · western Hubei",
    tagline: "A primeval forest of golden monkeys and 'wild man' legend",
    description:
      "Shennongjia is the one place in China that holds three UNESCO crowns at once: World Heritage, Global Geopark and Biosphere Reserve. It is a misty, dense forest of golden monkeys, boardwalks and the legend of a wild man.",
    overview:
      "Shennongjia (神农架) is the wildest corner of Hubei — a forest district, not a city, spanning the highest peaks of the Daba Mountains. It is the only site in China to hold all three UNESCO designations (World Heritage, Global Geopark, Man and Biosphere Reserve), and its centerpiece, Shennong Peak (神农顶), reaches 3,106m, earning it the title 'roof of central China'. The draw is the dense, damp primeval forest: the Dajiu Lake wetland (大九湖), a chain of highland lakes wrapped in morning mist where deer graze; the boardwalks through old-growth fir, rhododendron and bamboo; and the golden snub-nosed monkeys (金丝猴) that live here and nowhere else on Earth. The region's most famous story is the yeren (野人), the 'wild man' of Shennongjia, a local legend of a large, human-like creature that has fueled expeditions and a museum for decades. The forest also carries the name of Shennong, the mythical farmer-emperor said to have gathered herbs here. Come for the forest and the wildlife; treat the wild-man story as folklore with a gift shop. The sights are spread far apart — Shennong Peak, the monkey reserve and Dajiu Lake each need a drive — so a private driver or a joined tour is effectively required, and the reward is a China most foreigners never see.",
    highlights: [
      "Shennong Peak (3,106m)",
      "Dajiu Lake wetlands at sunrise",
      "Golden snub-nosed monkeys",
      "Old-growth forest boardwalks",
      "The 'wild man' (yeren) legend",
    ],
    bestTime: "May to October (clear, green); Dajiu Lake is best in autumn",
    minDays: "2 to 3 days",
    bestFor: "Nature lovers, hikers, wildlife watchers, anyone seeking China's least-known UNESCO forest",
    notFor: "Travelers wanting comfort and easy logistics; Shennongjia is remote, spread out and needs a private car or tour",
    experienceNote:
      "The drive into Shennongjia is half the experience: the road climbs through switchbacks until the air turns cool and the forest closes over the road, and you understand why this place bred a wild-man legend. We walked the Dajiu Lake boardwalk at dawn as mist sat on the water and a herd of deer moved through the grass, and it felt like a different country entirely — cold, quiet, and green in a way the cities never are. The golden monkeys were the other highlight: feeding groups that tolerated our presence from a respectful distance, their blue faces and gold coats absurdly vivid against the fog. The honest caveat: Shennongjia is not a day trip, and it is not for the mobility-limited. Distances between viewpoints are long, the weather changes fast, and you will want a private driver (CNY 400-600 per day) or a joined tour to make sense of it.",
    namedFoods: [
      { name: "Wild mushroom hotpot (野菌火锅)", price: "CNY 80-150", why: "The forest's edible wild mushrooms simmered in a clear broth. Seasonal and earthy; order at a mountain guesthouse." },
      { name: "Shennongjia cured pork (腊肉)", price: "CNY 40-80", why: "Smoked mountain pork, often stir-fried with wild vegetables or bamboo. The staple of every guesthouse kitchen." },
    ],
    localWarnings: [
      { title: "You need a car or tour", detail: "Shennongjia's sights are far apart and public transport is thin. Budget for a private driver (CNY 400-600/day) or join a tour from Yichang or Shiyan." },
      { title: "The 'wild man' is folklore", detail: "Enjoy the museum and the story, but there is no confirmed yeren. The real draw is the forest and the monkeys." },
    ],
    climate: "Cool highland forest, 10-24°C in summer, below freezing in winter; wet and misty, with the clearest skies in autumn",
    transport: {
      howToGet: "Shennongjia is in far western Hubei, reached by road from Yichang or Shiyan — there is no direct rail.",
      byTrain: "No rail to the forest. Take a train to Yichang or Shiyan, then a bus or private car (3-4 hours) to the scenic area.",
      byFlight: "Shennongjia Hongping Airport has limited flights from Wuhan; most travelers drive or bus from Yichang.",
    },
    accommodation: [
      { type: "Muyu town hotels", priceRange: "CNY 200-500", detail: "The main base village, with the widest choice of hotels and restaurants and easy access to the forest." },
      { type: "Dajiu Lake guesthouses", priceRange: "CNY 250-600", detail: "Stays near the wetland for the sunrise, often with family-run kitchens serving wild-mushroom hotpot." },
    ],
    dayPlans: [
      { label: "Day 1", steps: ["Drive in from Yichang, Shennong Peak viewpoint", "Afternoon: golden monkey reserve", "Overnight near Dajiu Lake"] },
      { label: "Day 2", steps: ["Dawn: Dajiu Lake boardwalk", "Late morning: old-growth forest trails, then depart"] },
    ],
    image: "/images/shennongjia-forest.webp",
  },
  {
    slug: "yichang-three-gorges",
    name: "Yichang & Three Gorges",
    chinese: "宜昌三峡",
    region: "Western Hubei · Yangtze River",
    tagline: "The Three Gorges Dam and the river that carved China",
    description:
      "Yichang is the gateway to the Three Gorges, the Yangtze's most dramatic canyon section and home to the Three Gorges Dam, the world's largest hydropower project, plus the cliff-and-village scenery of Xiling Gorge.",
    overview:
      "Yichang (宜昌) sits where the Yangtze emerges from the mountains into the plains, the traditional gateway to the Three Gorges. The Three Gorges (三峡) run from Chongqing's Baidicheng to Yichang's Nanjinguan — Qutang, Wu and Xiling gorges — and the easternmost, Xiling Gorge (西陵峡), lies entirely within Hubei, its cliffs and small side-valleys the most scenic stretch of the river's middle course. The modern headline is the Three Gorges Dam (三峡大坝), the world's largest hydropower project: a wall of concrete 2.3 kilometers across and 185 meters high, holding back a reservoir hundreds of kilometers long, which visitors tour from a purpose-built visitor center on a hill above the river. The quieter draw is the gorge itself: the Three Gorges Family scenic area (三峡人家) with its stilt houses and fishermen's boats, the small craft that thread the tributary valleys, and the poet Qu Yuan's hometown at Zigui just upstream. For many travelers the classic move is the multi-day Yangtze cruise from Chongqing down to Yichang — but a day at the dam plus a boat into Xiling Gorge gives the essence without the cabin, and Yichang itself is a pleasant, walkable city with a good riverside promenade and the Gezhouba Dam just downstream.",
    highlights: [
      "Three Gorges Dam visitor center",
      "Xiling Gorge boat trip",
      "Three Gorges Family scenic area",
      "Gezhouba Dam",
      "Qu Yuan's hometown at Zigui",
    ],
    bestTime: "April to June, September to November",
    minDays: "1 to 2 days",
    bestFor: "Engineering enthusiasts, cruise travelers, river-and-canyon scenery seekers",
    notFor: "Travelers who find large-scale infrastructure cold; the dam is impressive but industrial, not wilderness",
    experienceNote:
      "Standing at the dam's overlook, the scale is hard to process — a wall of concrete holding back a reservoir hundreds of kilometers long, with the misty Xiling Gorge stretching beyond it. The smaller boat trip into the gorge was the emotional highlight: cliffs rising straight from green water, a few stilt houses, and a fisherman's boat that felt like a scene from a scroll painting. Yichang itself surprised us — a clean, walkable city with a long riverside promenade where families flew kites at dusk. The honest verdict: the dam is a box-tick for many, but the gorge around it is the real reward, and it is easy to underestimate how much time the dam tour, the shuttles and the security checks actually take — budget a full half-day for the dam alone.",
    namedFoods: [
      { name: "Three Gorges fish hotpot (三峡鱼火锅)", price: "CNY 80-160", why: "Fresh Yangtze fish simmered in a spicy or clear broth. Order the clear broth to taste the fish, not the chili." },
      { name: "Liangxia (凉虾)", price: "CNY 5-10", why: "Yichang's summer drink: tiny rice-flour 'shrimp' in sweet osmanthus syrup. A local refreshment you will not find elsewhere." },
    ],
    localWarnings: [
      { title: "The dam is a half-day commitment", detail: "The visitor area involves shuttles and security checks. Budget at least half a day, and book the free dam tour in advance through the official channel or a local tour." },
      { title: "Cruises are seasonal", detail: "Yangtze cruises run mostly March to November. If you want the Chongqing-Yichang cruise, book ahead in autumn when water levels are high." },
    ],
    climate: "Subtropical, 4-10°C in winter and 26-36°C in summer; the gorge is greenest in spring and clearest in autumn",
    transport: {
      howToGet: "Yichang is the river-and-rail gateway to western Hubei, on the Shanghai-Chengdu high-speed line.",
      byTrain: "High-speed rail from Wuhan (2h, CNY 100-150) and Chongqing (4h). Yichang East station connects to the dam by bus or taxi.",
      byFlight: "Yichang Sanxia Airport has domestic flights from major cities; the dam and gorge are reached by road.",
    },
    accommodation: [
      { type: "Yichang city hotels", priceRange: "CNY 200-500", detail: "Riverside and city-center stays near the promenade, the practical base for the dam and gorge." },
      { type: "Xiling Gorge lodges", priceRange: "CNY 250-600", detail: "Scenic-area stays with river views, quieter than the city and closer to the gorge boat trips." },
    ],
    dayPlans: [
      { label: "Day 1", steps: ["Morning: Three Gorges Dam visitor center", "Afternoon: boat into Xiling Gorge", "Evening: Yichang riverside promenade"] },
    ],
    image: "/images/three-gorges-dam.webp",
  },
  {
    slug: "enshi-grand-canyon",
    name: "Enshi Grand Canyon",
    chinese: "恩施大峡谷",
    region: "Enshi Tujia & Miao Prefecture · southwest Hubei",
    tagline: "China's answer to the Colorado Grand Canyon, plus Tujia culture",
    description:
      "Enshi Grand Canyon is a karst wonderland in southwest Hubei — limestone towers, a stone forest and the Qingjiang River, set in the only Tujia and Miao autonomous prefecture, far from the big-city crowds.",
    overview:
      "Enshi (恩施) in southwest Hubei is the province's most underrated region: a karst landscape of canyons, stone forests and underground rivers, home to the Tujia and Miao peoples. Its centerpiece is the Enshi Grand Canyon (恩施大峡谷), a limestone gorge often compared to the Colorado Grand Canyon for its depth, cut by the Qingjiang River. Its signature is the One Pillar of Fragrance (一炷香), a stone column that rises about 150 meters from the canyon floor, so slender it looks as if it might fall. The walking route climbs thousands of steps to a cliffside boardwalk that traces the rim, then descends into the Yunlong Ground Fissure (云龙地缝), a deep, narrow cleft with waterfalls and a turquoise stream at the bottom. Nearby, the Qingjiang Gallery (清江画廊) threads clear green water through limestone walls on a slow boat ride, and the Tenglong Cave (腾龙洞) near Lichuan is one of Asia's largest cave systems, vast enough that it once hosted helicopters and now stages light-and-dance shows. The Suobuya Stone Forest (梭布垭石林) is a fossil-rich Ordovician stone forest. Culture is the second layer: the Tujia people's stilt houses, the Enshi Tusi Castle (土司城) built in the style of the old Tujia chieftains, and the Dragon Boat Melody (龙船调), a Tujia folk song famous across China. This is frontier Hubei — slower, greener and more raw than the polished east, with far fewer foreign visitors and far less English.",
    highlights: [
      "Enshi Grand Canyon and the One Pillar of Fragrance",
      "Qingjiang Gallery boat trip",
      "Tenglong Cave",
      "Suobuya Stone Forest",
      "Enshi Tusi Castle (Tujia culture)",
    ],
    bestTime: "April to June, September to November",
    minDays: "2 to 3 days",
    bestFor: "Hikers, photographers, canyon and cave enthusiasts, travelers seeking China beyond the postcards",
    notFor: "Travelers with mobility limits or vertigo; the canyon involves thousands of steps and cliffside paths",
    experienceNote:
      "The Enshi Grand Canyon is a leg-burner: we climbed thousands of steps to reach the cliff paths, then walked the ridgeline past the One Pillar of Fragrance as clouds filled the gorge below. It genuinely earns the Colorado comparison, though it is greener and wetter, and the pillar is more surreal in person than any photo suggests. The Qingjiang boat trip the next day was the calm counterpoint — two hours of limestone walls sliding past with barely another boat on the water, and a Tujia boatman singing a song in the distance. Enshi is not polished, and English is scarce, but it is the Hubei most foreigners miss entirely, and that is precisely its appeal. Bring grippy shoes, water, and a tolerance for thousands of stairs — the canyon is a full day and the descent into the fissure is as steep as the climb up.",
    namedFoods: [
      { name: "Hezha (合渣)", price: "CNY 15-30", why: "A Tujia staple: pounded soybeans cooked with greens, eaten with rice and pickles. Cheap, filling and the taste of Enshi's countryside." },
      { name: "Kang potatoes (炕土豆)", price: "CNY 10-20", why: "Enshi's mountain potatoes pan-fried until golden and tossed with chili and scallion. The perfect trail snack." },
      { name: "Tujia cured meat (土家腊肉)", price: "CNY 40-80", why: "Smoked pork, often stir-fried with wild bamboo or dried tofu. The backbone of Enshi's home cooking." },
    ],
    localWarnings: [
      { title: "The canyon is a full day of stairs", detail: "Allow 5-6 hours and bring water and grippy shoes. The cliffside sections are not for anyone with vertigo or weak knees." },
      { title: "Little English, fewer tourists", detail: "Enshi is far less tourist-facing than Wuhan or Yichang. Carry an offline translation app, cash and saved screenshots of addresses." },
    ],
    climate: "Mountain subtropical, 8-28°C; wet and green in spring, clearest in autumn. Summer brings afternoon rain",
    transport: {
      howToGet: "Enshi is southwest Hubei, on the Shanghai-Chengdu high-speed line, a long but easy ride from Wuhan.",
      byTrain: "High-speed rail from Wuhan (3.5h, CNY 200-280) and Chongqing (2.5h). The canyon is then 1-1.5 hours by bus or car from Enshi city.",
      byFlight: "Enshi Xujiaping Airport has domestic flights from Wuhan and a few major cities.",
    },
    accommodation: [
      { type: "Enshi city hotels", priceRange: "CNY 150-350", detail: "Practical bases near the rail station, the hub for day trips to the canyon and the Qingjiang Gallery." },
      { type: "Canyon-area guesthouses", priceRange: "CNY 200-500", detail: "Stays near the canyon entrance, useful for an early start before the tour groups arrive." },
    ],
    dayPlans: [
      { label: "Day 1", steps: ["Morning: Enshi Grand Canyon (cliff paths and One Pillar of Fragrance)", "Evening: Enshi city, hezha and kang potatoes"] },
      { label: "Day 2", steps: ["Morning: Qingjiang Gallery boat trip", "Afternoon: Tenglong Cave or Suobuya Stone Forest"] },
    ],
    image: "/images/enshi-canyon.webp",
  },
  {
    slug: "jingzhou-ancient-city",
    name: "Jingzhou Ancient City",
    chinese: "荆州古城",
    region: "Central Hubei · Yangtze River",
    tagline: "The walled city of Chu culture and the Three Kingdoms",
    description:
      "Jingzhou is a lived-in walled city on the Yangtze, the heart of ancient Chu culture and a key stage for the Three Kingdoms, with intact Ming walls and a museum that rivals the provincial capital.",
    overview:
      "Jingzhou (荆州) is the cultural heart of Hubei — a walled city on the Yangtze that was the capital of the ancient Chu state and a pivotal battleground in the Three Kingdoms era. Its Ming-dynasty city wall, among the best-preserved in southern China, still rings the old town for over 10 kilometers, and you can walk the ramparts above the gates, looking down on moats and gate towers that have guarded the city for centuries. The Jingzhou Museum (荆州博物馆) is the reason history lovers stop here: it holds a Western Han mummy among the best-preserved ancient corpses in China, plus bronzes, lacquerware and silk from the Chu kingdom that rival the provincial museum in Wuhan — and it is far less crowded. The nearby Xiongjia Tomb and the Jinan City ruins of the Chu capital add depth for the archaeology-minded. Jingzhou is also Guan Yu's city: the Shu general was tasked with defending it before his death, and his cult is everywhere, from the Guandi Temple to statues by the river. For readers of the Romance of the Three Kingdoms, Jingzhou is where the story's middle act turns, and the city leans into it. It is a quieter, more human-scaled stop than Wuhan — best as a half-day to full-day detour on the Wuhan-Yichang rail line rather than a base.",
    highlights: [
      "Ming city wall and gates",
      "Jingzhou Museum (Western Han mummy, Chu artifacts)",
      "Guandi Temple (Guan Yu)",
      "Jinan City ruins of the Chu capital",
      "Xiongjia Tomb",
    ],
    bestTime: "April to May, September to November",
    minDays: "1 day (half day for the wall and museum)",
    bestFor: "History and Three Kingdoms fans, museum lovers, travelers wanting a slower, walled city",
    notFor: "Travelers who have seen China's ancient walls and want wilderness instead; Jingzhou is about history, not scenery",
    experienceNote:
      "Walking the top of Jingzhou's wall at dusk, with the Yangtze beyond the gates, was a quiet highlight — far fewer crowds than Xi'an's wall and just as atmospheric, the ramparts empty but for a few locals walking dogs. The museum punched far above its city's size: the Western Han mummy and the Chu lacquerware and silk are world-class, and we had whole galleries nearly to ourselves, which is rare for treasures this important. The Three Kingdoms connection is everywhere if you know the story, which makes it satisfying for readers of the Romance and slightly inscrutable if you do not. A half day is enough for most; a full day if you linger over the bronzes and the wall walk.",
    namedFoods: [
      { name: "Fish cake (鱼糕)", price: "CNY 30-60", why: "Jingzhou's signature: pounded freshwater fish steamed into a soft cake, sliced and served in soup or stir-fried. Delicate and unlike anything in Wuhan." },
      { name: "Gong'an guokui (公安锅盔)", price: "CNY 8-15", why: "A crispy stuffed flatbread from nearby Gong'an county, filled with pork or beef and baked in a clay oven. The perfect wall-walk snack." },
    ],
    localWarnings: [
      { title: "It is a half-day stop, mostly", detail: "Unless you are a serious Three Kingdoms or archaeology enthusiast, Jingzhou fits neatly as a stop on the Wuhan-Yichang rail line rather than a base." },
      { title: "The wall is best at dusk", detail: "Midday summer heat on the wall is punishing. Go early or late, and carry water — the ramparts offer little shade." },
    ],
    climate: "Subtropical, 3-10°C in winter and 27-36°C in summer; humid, with the mildest weather in spring and autumn",
    transport: {
      howToGet: "Jingzhou sits on the Yangtze and the Wuhan-Yichang high-speed line, an easy stop between the two.",
      byTrain: "High-speed rail from Wuhan (1h, CNY 60-90) and Yichang (40min). The station connects to the old town by bus or taxi.",
      byFlight: "Jingzhou Shashi Airport has limited flights; most travelers arrive by rail from Wuhan or Yichang.",
    },
    accommodation: [
      { type: "Old-town hotels", priceRange: "CNY 150-350", detail: "Stays inside or near the walled city, walking distance to the museum and the gates." },
      { type: "Riverside hotels", priceRange: "CNY 200-450", detail: "Modern stays along the Yangtze, quieter and with river views." },
    ],
    dayPlans: [
      { label: "Day 1", steps: ["Morning: Jingzhou Museum (Chu bronzes, Western Han mummy)", "Afternoon: walk the city wall and the Guandi Temple", "Evening: fish cake dinner, then onward by rail"] },
    ],
    image: "/images/jingzhou-wall.webp",
  },
  {
    slug: "xiangyang",
    name: "Xiangyang",
    chinese: "襄阳",
    region: "Northwest Hubei · Han River",
    tagline: "The Three Kingdoms city of Longzhong and the Han River wall",
    description:
      "Xiangyang is a Han-river city steeped in the Three Kingdoms: the ancient Longzhong where Zhuge Liang was persuaded to serve, ringed by one of China's best-preserved city walls.",
    overview:
      "Xiangyang (襄阳), on the Han River in northwest Hubei, is the other great Three Kingdoms city of Hubei, alongside Jingzhou. Its centerpiece is Ancient Longzhong (古隆中), the hillside retreat where the young Zhuge Liang lived in seclusion and where, according to the Romance of the Three Kingdoms, Liu Bei visited three times to persuade him to serve — the famous 'three visits to the thatched cottage' that opens the epic. The site is a leafy park of pavilions, ponds and the reconstructed thatched cottage, framed by the Longzhong hills and best appreciated if you know the story going in. Xiangyang's own city wall, among the best-preserved in China, runs along the Han River and is still walkable in long stretches, with gate towers and a quieter atmosphere than more famous walls. The city is also a food stop: Xiangyang beef noodles (襄阳牛肉面) are the region's beloved breakfast, a rich, spicy bowl that draws queues from dawn, and the local yellow rice wine is drunk warm as its traditional companion. Xiangyang pairs naturally with a Wudang Mountains trip, which begins just to the west, and it works best as a half-day to one-day stop on the way there.",
    highlights: [
      "Ancient Longzhong (Zhuge Liang's retreat)",
      "Xiangyang city wall along the Han River",
      "Xiangyang beef noodles",
      "Zhongxuan Tower and the old town",
      "Yellow rice wine",
    ],
    bestTime: "April to May, September to November",
    minDays: "1 day (Longzhong plus the wall)",
    bestFor: "Three Kingdoms devotees, history travelers, food travelers chasing the beef noodles",
    notFor: "Travelers uninterested in the Three Kingdoms; the appeal is mostly literary and historical",
    experienceNote:
      "Longzhong is best if you know the story: walking the same hillside where the 'three visits' supposedly happened, past the thatched cottage and the lotus ponds, the Romance comes alive in a way the reconstructed pavilions alone would not achieve. The Xiangyang wall is less visited than Jingzhou's and just as rewarding, with the Han River running beneath it and fishermen on the banks below. What stayed with us most was breakfast: a bowl of Xiangyang beef noodles, spicy and rich, eaten at a crowded stall before the day began, chased with a small cup of warm yellow rice wine. Xiangyang is a one-day stop, but a satisfying one if you time it on the way to Wudang.",
    namedFoods: [
      { name: "Xiangyang beef noodles (襄阳牛肉面)", price: "CNY 10-20", why: "Hand-pulled noodles in a rich, spicy beef broth with a slick of chili oil. The city's breakfast, and worth the stop alone." },
      { name: "Xiangyang yellow rice wine (黄酒)", price: "CNY 20-50", why: "A mild, slightly sweet local rice wine, drunk warm. Order a small pot with the noodles for the full local ritual." },
    ],
    localWarnings: [
      { title: "Longzhong needs the backstory", detail: "The site is mostly reconstructed pavilions. Without the Three Kingdoms context it can feel thin; read up on the 'three visits' first." },
      { title: "Pair it with Wudang", detail: "Xiangyang is on the way to the Wudang Mountains. Do Longzhong and the wall in the morning, then continue west the same day." },
    ],
    climate: "Subtropical, 2-9°C in winter and 27-36°C in summer; mildest in spring and autumn",
    transport: {
      howToGet: "Xiangyang is northwest Hubei, on the high-speed line toward Shiyan and Wudang.",
      byTrain: "High-speed rail from Wuhan (1.5h, CNY 100-150) and Shiyan/Wudang (40min). The station connects to Longzhong by bus or taxi.",
      byFlight: "Xiangyang Liuji Airport has domestic flights from a few major cities.",
    },
    accommodation: [
      { type: "City-center hotels", priceRange: "CNY 150-350", detail: "Practical stays near the wall and the old town, easy for the beef-noodle breakfast streets." },
      { type: "Han River riverside", priceRange: "CNY 200-450", detail: "Modern hotels along the river, quieter and with evening views of the wall." },
    ],
    dayPlans: [
      { label: "Day 1", steps: ["Morning: beef-noodle breakfast, then Ancient Longzhong", "Afternoon: walk the Xiangyang city wall", "Evening: yellow rice wine, then onward to Wudang"] },
    ],
    image: "/images/xiangyang-wall.webp",
  },
  {
    slug: "chibi",
    name: "Chibi",
    chinese: "赤壁",
    region: "Xianning · southeastern Hubei",
    tagline: "The battlefield of Red Cliffs, where the Three Kingdoms turned",
    description:
      "Chibi is the site of the Battle of Red Cliffs, the 208 AD battle that reshaped the Three Kingdoms, set on the Yangtze near Xianning and paired with the region's hot springs.",
    overview:
      "Chibi (赤壁), near Xianning in southeastern Hubei, is where the Battle of Red Cliffs was fought in the winter of 208 AD — the naval battle in which the allied forces of Sun Quan and Liu Bei burned Cao Cao's fleet and halted his southward conquest, a turning point that defined the Three Kingdoms era. The Chibi Ancient Battlefield (赤壁古战场) is a riverside park with the Red Cliff inscription carved into the rock, a statue of the strategist Zhou Yu, and viewing points over the Yangtze where the battle is said to have been fought. It is a site of literary and historical pilgrimage rather than surviving architecture — the interest comes from the story, and it is one of the most famous episodes in Chinese history, retold in the Romance, in opera, and in films. The region's second draw is the Xianning hot springs, a cluster of spa resorts that make Chibi a natural pairing for a relaxing overnight, and the nearby Lu Shui Lake offers boat trips and island scenery. For most travelers, Chibi is a short detour from Wuhan rather than a base — best for readers of the Romance of the Three Kingdoms and hot-spring fans, and best paired with a soak in the cooler months.",
    highlights: [
      "Chibi Ancient Battlefield and the Red Cliff inscription",
      "Zhou Yu statue over the Yangtze",
      "Xianning hot springs",
      "Lu Shui Lake",
      "Three Kingdoms reenactments (seasonal)",
    ],
    bestTime: "April to May, September to November",
    minDays: "1 day (battlefield plus the hot springs)",
    bestFor: "Three Kingdoms pilgrims, hot-spring fans, travelers wanting a quiet Yangtze stop",
    notFor: "Travelers expecting surviving ancient ruins; the battlefield is a commemorative park, not an excavation",
    experienceNote:
      "Standing at the Red Cliff overlook, reading the inscription and looking out over the Yangtze, the battle finally had a geography — you can imagine the burning fleet, the wind, the turning of a war. It is a park built around a story, and if you know the story it lands; if you do not, it is a pleasant riverside walk. We paired it with an afternoon at the Xianning hot springs, which turned a history stop into a genuinely relaxing break — the springs are the real reason to make it an overnight. The honest verdict: Chibi is for the Three Kingdoms reader, and it works best as a half-day detour plus a soak, not a destination on its own.",
    namedFoods: [
      { name: "Chibi fish balls (赤壁鱼丸)", price: "CNY 30-60", why: "Freshwater fish pounded into springy balls and served in a clear soup. The local specialty along the Yangtze." },
      { name: "Xianning bamboo-shoot dishes (咸宁竹笋)", price: "CNY 20-50", why: "The hills around Xianning are bamboo country; seasonal bamboo shoots stir-fried or braised are the regional table staple." },
    ],
    localWarnings: [
      { title: "It is a commemorative park", detail: "There are no surviving battlefield ruins. The value is the story and the riverside setting; set expectations accordingly." },
      { title: "Combine with the hot springs", detail: "The battlefield alone is a half day. Pair it with Xianning's hot-spring resorts to make the detour worth the travel." },
    ],
    climate: "Subtropical, 4-10°C in winter and 28-36°C in summer; the hot springs are best in the cooler months",
    transport: {
      howToGet: "Chibi is in southeastern Hubei, a short high-speed rail ride from Wuhan toward Changsha.",
      byTrain: "High-speed rail from Wuhan (30-40min, CNY 40-60) to Chibi North station, then a short transfer to the battlefield.",
      byFlight: "No airport; arrive by rail from Wuhan, or drive about 2 hours from the capital.",
    },
    accommodation: [
      { type: "Xianning hot-spring resorts", priceRange: "CNY 300-800", detail: "Spa resorts with private and public pools, the reason to make Chibi an overnight stop." },
      { type: "Chibi town hotels", priceRange: "CNY 150-350", detail: "Simple stays near the battlefield, useful if you want an early start." },
    ],
    dayPlans: [
      { label: "Day 1", steps: ["Morning: Chibi Ancient Battlefield and the Red Cliff overlook", "Afternoon: Xianning hot springs", "Evening: return to Wuhan"] },
    ],
    image: "/images/chibi-river.webp",
  },
];

export const itineraries = [
  {
    days: 3,
    title: "Wuhan in a long weekend",
    subtitle: "The capital, done properly",
    route: "Wuhan only",
    summary: [
      "Day 1: Yellow Crane Tower, Hubei Provincial Museum (chime bells)",
      "Day 2: East Lake and Moshan by bike, Hankou riverfront",
      "Day 3: guozao breakfast crawl, Yangtze River Bridge, depart",
    ],
    bestFor: "Short trips, first-time visitors, food travelers",
  },
  {
    days: 5,
    title: "Wuhan plus Wudang",
    subtitle: "City energy, then Taoist mountain calm",
    route: "Wuhan > (rail) > Wudang Mountains",
    summary: [
      "Days 1-2: Wuhan (tower, museum, East Lake, guozao)",
      "Day 3: train to Wudang, Golden Hall and Nanyan Palace",
      "Day 4: Purple Cloud Palace, Prince Slope, tai chi at dawn",
      "Day 5: return via Wuhan or Shiyan",
    ],
    bestFor: "Culture and martial-arts fans, first-timers wanting one mountain",
  },
  {
    days: 7,
    title: "The Hubei classics",
    subtitle: "Wuhan, Wudang and the Three Gorges",
    route: "Wuhan > Xiangyang > Wudang > (rail) > Yichang",
    summary: [
      "Days 1-2: Wuhan (tower, museum, East Lake)",
      "Day 3: Xiangyang (Longzhong, beef noodles), then Wudang",
      "Day 4: Wudang Mountains",
      "Day 5: train to Yichang, Three Gorges Dam",
      "Day 6: Xiling Gorge boat trip, Jingzhou wall en route",
      "Day 7: depart from Wuhan",
    ],
    bestFor: "The complete first-trip picture, history and engineering",
  },
  {
    days: 10,
    title: "The full Hubei loop",
    subtitle: "Add Shennongjia and Enshi",
    route: "Wuhan > Xiangyang > Wudang > Shennongjia > Yichang > Enshi",
    summary: [
      "Days 1-2: Wuhan",
      "Day 3: Xiangyang and Wudang",
      "Day 4: Wudang Mountains",
      "Day 5: drive to Shennongjia, golden monkeys",
      "Day 6: Dajiu Lake at dawn, then to Yichang",
      "Day 7: Three Gorges Dam and Xiling Gorge",
      "Days 8-9: Enshi Grand Canyon and Qingjiang Gallery",
      "Day 10: depart from Enshi or return to Wuhan",
    ],
    bestFor: "Slow travelers and repeat China visitors who want the wild west of Hubei",
  },
];

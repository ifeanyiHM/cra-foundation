import {
  Program,
  TeamMember,
  NewsArticle,
  Testimonial,
  ImpactStat,
  Award,
  SponsorChild,
  DonationTier,
  NavItem,
  GalleryItem,
} from "@/types";

export const navigation: NavItem[] = [
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about#story" },
      { label: "Mission & Vision", href: "/about#mission" },
      { label: "Board of Trustees", href: "/about#board" },
      { label: "Awards & Recognition", href: "/about#awards" },
    ],
  },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "After-School Support", href: "/programs#after-school" },
      { label: "Meals Scheme", href: "/programs#meals" },
      { label: "Health & Wellness", href: "/programs#health" },
      { label: "Scholarships", href: "/programs#scholarships" },
      { label: "Excursions", href: "/programs#excursions" },
      { label: "Children Giving to Children", href: "/cgc" },
    ],
  },
  { label: "Impact", href: "/impact" },
  { label: "News & Events", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  {
    label: "Get Involved",
    href: "/volunteer",
    children: [
      { label: "Volunteer", href: "/volunteer" },
      { label: "Sponsor a Child", href: "/sponsor" },
      { label: "Donate", href: "/donate" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const programs: Program[] = [
  {
    id: "after-school",
    title: "After-School Support",
    description:
      "Extra lessons, guided homework sessions, and access to learning resources after school hours, followed by a nutritious lunch.",
    icon: "📚",
    color: "#E8400C",
    details: [
      "Qualified tutors",
      "Subject-specific support",
      "Homework assistance",
      "Nutritious lunch provided",
    ],
  },
  {
    id: "meals",
    title: "Midday Meals Scheme",
    description:
      "Ensuring sponsored children receive proper midday nutrition, eliminating hunger as a barrier to learning and concentration.",
    icon: "🍽️",
    color: "#F5A623",
    details: [
      "Daily balanced meals",
      "Nutritional monitoring",
      "Dietary considerations",
      "Kitchen managed by trained staff",
    ],
  },
  {
    id: "health",
    title: "Health & Wellness",
    description:
      "Comprehensive health care support, vitamins, medical check-ups, and hygiene essentials for underprivileged children.",
    icon: "🏥",
    color: "#2D7A4F",
    details: [
      "Medical check-ups",
      "Vitamins & supplements",
      "Hygiene kits",
      "Disinfectant & sanitation supplies",
    ],
  },
  {
    id: "uniforms",
    title: "School Supplies",
    description:
      "Procurement of school uniforms, sandals, bags, textbooks, writing materials, and all essential school needs.",
    icon: "🎒",
    color: "#1A3A5C",
    details: [
      "School uniforms",
      "Bags & sandals",
      "Textbooks",
      "Writing materials & stationery",
    ],
  },
  {
    id: "scholarships",
    title: "Scholarships & Sponsorship",
    description:
      "Funding access to quality education for underprivileged children through targeted sponsorships and scholarship programs.",
    icon: "🎓",
    color: "#7B3FE4",
    details: [
      "Full scholarship packages",
      "Partial sponsorships",
      "School fees covered",
      "Progress monitoring",
    ],
  },
  {
    id: "learning-center",
    title: "Learning Resource Center",
    description:
      "A safe space where children can read, do homework, access the internet, eat, rest, and play in a nurturing environment.",
    icon: "💻",
    color: "#E8400C",
    details: [
      "Internet access",
      "Computer lab",
      "Library & story books",
      "Recreation area",
    ],
  },
  {
    id: "counseling",
    title: "Counseling & Mentorship",
    description:
      "Organized counseling programs helping children discover their innate talents, abilities, and life direction.",
    icon: "🤝",
    color: "#F5A623",
    details: [
      "Individual counseling",
      "Group sessions",
      "Talent discovery",
      "Mentorship matching",
    ],
  },
  {
    id: "excursions",
    title: "Educational Excursions",
    description:
      "Taking children on educational trips, fun days, and festival celebrations to broaden their worldview and create joyful memories.",
    icon: "🚌",
    color: "#2D7A4F",
    details: [
      "Museum visits",
      "Cultural trips",
      "Holiday celebrations",
      "Fun day events",
    ],
  },
];

export const boardMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Femi Onanuga",
    role: "Chairman, Board of Trustees",
    bio: `Dr. Onanuga is a medical doctor and public health specialist with over 30 years of experience in the Lagos State government as a civil and public servant.

          He spent the bulk of his career in the Lagos State civil service as a consultant and administrator, rising to the position of Permanent Secretary before retiring in 2014. In 2015, he served as a Special Adviser in Primary Healthcare under the then Governor of Lagos State, Mr. Akinwunmi Ambode, where he used his experience to improve healthcare delivery across the state.

          Some of his accomplishments include:
          - Establishment of Randle Maternity Hospital in Surulere, Lagos
          - Establishment of Ifako-Ijaiye General Hospital, Lagos
          - Establishment of 27 health posts in Lagos State between 1993 and 2003
          - Comprehensive rehabilitation of 68 Primary Health Centres`,
  },

  {
    id: 2,
    name: "Mrs. Olayide Shonubi",
    role: "Founder & Executive Director",
    bio: `She was born in Ijebu Ode, Ogun State, on February 12, 1954.

          As a child, she often played the role of a teacher in her make-believe school, where she taught morals through stories. Her mother, an educationist, noticed her passion for children and encouraged her to pursue teaching.

          She began her teaching career in a public primary school in Osogbo (now Osun State) immediately after completing her West African School Certificate. There, she encountered many underprivileged and orphaned children who lacked basic school needs.

          Deeply moved, she shared her experiences with her late mother, who supported her efforts to help these children. From then on, she remained committed to supporting children in need.

          She trained at United Missionary College, Ibadan, and later studied at the University of Ife (now Obafemi Awolowo University), where she earned both undergraduate and postgraduate degrees in Guidance and Counselling.

          After graduation, she taught in various states and federal schools. She retired from the Federal Ministry of Education as an Assistant Director in the Inspectorate Division at the age of sixty.

          Driven by her passion for helping vulnerable children, she established a non-profit organisation to support their development and authored three books on teaching moral values through stories.

          These stories are read every Friday, and the children also act them out. She intends to use proceeds from her books to support more children in need.

          She is married to Mr. Abiodun Shonubi and is blessed with children and grandchildren.`,
  },

  {
    id: 3,
    name: "Mr. Abiodun Shonubi",
    role: "Board Trustee",
    bio: `ABIODUN SHONUBI (FNIMN, MIST, MNSE, MBA, B.Sc, Cert. Computer Programming)

          Managing Director/CEO of Loomash Investment Ltd.

          He is a former academic, marketing practitioner, development and training expert, and later an astute businessman. He has nearly 50 years of diverse experience across academia, multinational corporations, and national organisations. He also spent 19 years with an international capacity development NGO initiated by the Rockefeller Foundation.`,
  },

  {
    id: 7,
    name: "Mrs Olusola Ilori",
    role: "Board Trustee",
    bio: `Olusola Ilori is a Fellow of the Chartered Institute of Bankers and a seasoned finance professional with over 28 years of experience in banking.

          She held leadership roles at First Bank of Nigeria, including Branch Manager, Senior Credit Risk Analyst, and Head of the Remedial Business Unit. After retiring from banking, she transitioned into real estate and stockbroking and currently serves as Finance Director at Ketroids Integrated Limited.

          She is also an author of "Financial Backups in Retirement" and is happily married with children.`,
  },

  {
    id: 10,
    name: "Engr. Oluwaseun Shonubi",
    role: "Board Trustee",
    bio: `Oluwaseun Shonubi is an electrical power systems engineer and energy infrastructure leader with experience in utilities, renewable energy, and large-scale electrification projects.

          He has contributed to the deployment of critical power systems, including grid infrastructure, renewable energy assets, and EV charging networks across multiple regions.

          Inspired by a lifelong exposure to service through his family, he is passionate about using engineering and energy access as tools for social and economic development. His work focuses on bridging the gap between technical innovation and community impact, especially in underserved regions.

          He is committed to empowering the next generation and expanding access to education and reliable energy infrastructure through charitable initiatives.`,
  },

  {
    id: 11,
    name: "Mr Moyosore Shonubi",
    role: "Board Trustee",
    bio: `Moyosore Shonubi holds a Bachelor’s degree in Business Administration and has extensive experience in financial services.

          He is motivated by a desire to use his professional background to create meaningful social impact for vulnerable children across the country.`,
  },
];

// export const boardMembers: TeamMember[] = [
//   {
//     id: 1,
//     name: "Dr. Femi Onanuga",
//     role: "Chairman, Board of Trustees",
//     bio: "Distinguished leader committed to child welfare and education advocacy.",
//   },
//   {
//     id: 2,
//     name: "Mrs. Olayide Shonubi",
//     role: "Founder & Executive Director",
//     bio: "Visionary founder who established the foundation in 2010 with a mission to nurture underprivileged children.",
//   },
//   {
//     id: 3,
//     name: "Mr. Abiodun Shonubi",
//     role: "Board Trustee",
//     bio: "Dedicated trustee supporting the foundation's governance and strategic direction.",
//   },
//   // {
//   //   id: 4,
//   //   name: "Engineer Adebayo Olapade",
//   //   role: "Board Trustee",
//   //   bio: "Engineering professional bringing technical expertise and community leadership.",
//   // },
//   // {
//   //   id: 5,
//   //   name: "Ms Toyosi Kolawole",
//   //   role: "Board Trustee",
//   //   bio: "Youth advocate passionate about education and community development.",
//   // },
//   // {
//   //   id: 6,
//   //   name: "Engr. Ladi Saani",
//   //   role: "Board Trustee",
//   //   bio: "Engineering expert committed to sustainable development and youth empowerment.",
//   // },
//   {
//     id: 7,
//     name: "Mrs Olusola Ilori",
//     role: "Board Trustee",
//     bio: "Community leader with deep commitment to child rights and welfare.",
//   },
//   // {
//   //   id: 8,
//   //   name: "Mr Olajuwon Olaleye",
//   //   role: "Board Trustee",
//   //   bio: "Business professional supporting organizational growth and sustainability.",
//   // },
//   // {
//   //   id: 9,
//   //   name: "Mrs Omowunmi Leye-Afolayan",
//   //   role: "Board Trustee",
//   //   bio: "Dedicated to child advocacy and social development initiatives.",
//   // },
//   {
//     id: 10,
//     name: "Engr. Oluwaseun Shonubi",
//     role: "Board Trustee",
//     bio: "Technology and engineering professional driving innovative solutions for education.",
//   },
//   {
//     id: 11,
//     name: "Mr Moyosore Shonubi",
//     role: "Board Trustee",
//     bio: "Committed to furthering the foundation's mission across communities.",
//   },
// ];

export const awards: Award[] = [
  {
    year: "2013",
    title: "Support Our Schools Initiative Award",
    issuer: "Lagos State Government",
    image: "/images/awards/sosi_award.jpg",
    color: { from: "#7F1D1D", to: "#DC2626" },
    label: "SOSIA",
  },
  {
    year: "2013",
    title: "AOPSHON Award",
    issuer:
      "Association of Primary Schools Head Teachers of Nigeria (Lagos State Wing)",
    image: "/images/awards/aopshon_award.jpg",
    color: { from: "#78350F", to: "#D97706" },
    label: "AOPSHON",
  },
  {
    year: "2016",
    title: "SBMC Recognition Award",
    issuer: "Lagos State Government Universal Basic Education Board",
    image: "/images/awards/smbc_award.jpg",
    color: { from: "#1E3A5F", to: "#2563EB" },
    label: "SMBC",
  },
  {
    year: "2017",
    title: "SBMC Recognition Award",
    issuer: "Lagos State Government Universal Basic Education Board",
    image: "/images/awards/blac_award.jpg",
    color: { from: "#6B4226", to: "#C08A3E" },
    label: "SMBC",
  },
  {
    year: "2018",
    title: "Appreciation Award",
    issuer: "Lagos State Basic Education Award – LGEA Surulere, Lagos",
    image: "/images/awards/generic_award.jpg",
    color: { from: "#7C4A21", to: "#A16207" },
    label: "LGEAS",
  },
  {
    year: "2022",
    title: "Recognition Award",
    issuer: "Lagos State Universal Basic Education Board",
    image: "/images/awards/generic_award.jpg",
    color: { from: "#5C3317", to: "#8B5A2B" },
    label: "UBEB",
  },
];

export const impactStats: ImpactStat[] = [
  {
    number: "2,500+",
    label: "Children Supported",
    description: "Underprivileged children reached since 2010",
  },
  {
    number: "13+",
    label: "Years of Service",
    description: "Continuously serving communities since 2010",
  },
  {
    number: "5",
    label: "LGAs Covered",
    description: "Local Government Education Areas in Lagos",
  },
  {
    number: "6",
    label: "Awards Received",
    description: "Government recognitions and awards",
  },
  {
    number: "500+",
    label: "Scholarships Granted",
    description: "Children given access to quality education",
  },
  {
    number: "11",
    label: "Board Members",
    description: "Dedicated trustees guiding our mission",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Abraham James",
    role: "Scholarship Beneficiary",
    quote: `Nine years ago, the founder of CRA Foundation visited my former school, Shamshudeen Nursery and Primary School in Surulere, Lagos, to donate school uniforms, bags, sandals, and writing materials. We were told it was her second visit to the school. The headteacher was asked to identify children who needed special help. My two siblings, two cousins who lived with us, and I were among those selected. We were placed on a free midday meal program. Because of our difficult living conditions, she took special interest in us. We lived, and still live, in an unfinished house. When the foundation later opened its center for children, the five of us were among the first children to join. We received clothes, toiletries, and educational support. Teachers were also provided to help us in English, Mathematics, Science, and Accounting.

            Two sessions ago, Mrs. Shonubi secured a full scholarship for three children at the center, including me. The scholarship covers our school fees, learning materials, medical care, home needs, and money for midday meals. For me, the midday meal often serves as my breakfast because I usually leave home for school without food. Mrs. Shonubi also opened savings accounts for the three of us at First Bank Nigeria. I currently have over one hundred thousand naira in my savings account. She calls it an "ICE Account" (In Case of Emergency).

            I am very grateful to CRA Foundation and the generous couple supporting me. I appreciate all they have done for my future. As we say at the center: "I shall remain a child of integrity, honest and responsible, so help me God."`,
  },
  {
    id: "2",
    name: "Mrs. Adunola B.",
    role: "Parent of Sponsored Child",
    quote:
      "My daughter used to cry because she had no books. Now she comes home excited every day. The foundation gives her meals, uniforms, and a place to study. I thank God for CRA Foundation.",
  },
  {
    id: "3",
    name: "Mr. Tunde K.",
    role: "Monthly Donor & Volunteer",
    quote:
      "I started donating monthly after seeing the children at the learning center. The transformation is real — these children glow with confidence. It is the best investment I have ever made.",
  },
];

export const news: NewsArticle[] = [
  {
    id: "1",
    title: "After School Meal Programme",
    excerpt:
      "Every day after school, children at the CRA Foundation center receive nutritious meals in a safe environment where they can study, complete homework, and continue learning.",
    date: "June 26, 2023",
    category: "Programs",
    author: "CRA Foundation Team",
    images: [
      "/images/news/after-school-meal1.webp",
      "/images/news/after-school-meal2.webp",
      "/images/news/after-school-meal3.webp",
      "/images/news/after-school-meal4.webp",
      "/images/news/after-school-meal5.webp",
      "/images/news/after-school-meal6.webp",
    ],
  },

  {
    id: "2",
    title: "Nurturing Future Leaders",
    excerpt:
      "Through education, mentorship, guidance, and character development, CRA Foundation continues its mission of raising confident and responsible future leaders from underserved communities.",
    date: "June 26, 2023",
    category: "Education",
    author: "CRA Foundation Team",
    // imageTitle: "after-school-meal",
    images: [
      "/images/news/nuturing1.jpg",
      "/images/news/nuturing2.jpg",
      "/images/news/nuturing3.jpg",
      "/images/news/nuturing4.jpg",
      "/images/news/nuturing5.jpg",
    ],
  },

  {
    id: "3",
    title: "Celebrating Nigeria's 62nd Independence Day With Children",
    excerpt:
      "Children at the foundation joined staff, volunteers, and supporters in commemorating Nigeria's Independence Day through educational activities, cultural displays, and moments of reflection.",
    date: "June 26, 2023",
    category: "Events",
    author: "CRA Foundation Team",
    images: [
      "/images/news/independence3.jpg",
      "/images/news/independence1.jpg",
      "/images/news/independence2.jpg",
      "/images/news/independence4.jpg",
      "/images/news/independence5.jpg",
    ],
  },

  {
    id: "4",
    title: "Halima Umole Celebrates Her 50th Birthday With Our Children",
    excerpt:
      "In a remarkable act of generosity and love, Mrs. Halima Umole chose to celebrate her 50th birthday with children supported by the foundation, creating lasting memories and sharing joy with those in need.",
    date: "October 31, 2020",
    category: "Events",
    author: "CRA Foundation Team",
    images: [
      "/images/news/halima50-1.webp",
      "/images/news/halima50-2.webp",
      "/images/news/halima50-3.webp",
      "/images/news/halima50-4.webp",
      "/images/news/halima50-5.webp",
      "/images/news/halima50-6.webp",
    ],
  },

  {
    id: "5",
    title: "Providing Hope Through Education and Care",
    excerpt:
      "CRA Foundation continues to provide educational support, mentoring, healthcare assistance, and emotional care to children from disadvantaged backgrounds across Lagos State.",
    date: "May 15, 2023",
    category: "Impact",
    author: "CRA Foundation Team",
    images: [
      "/images/news/care1.jpg",
      "/images/news/care2.jpg",
      "/images/news/care3.jpg",
      "/images/news/care4.jpg",
      "/images/news/care5.jpg",
    ],
  },

  {
    id: "6",
    title: "Supporting Children's Learning Journey",
    excerpt:
      "Through school supplies, educational resources, mentorship programs, and continuous encouragement, the foundation helps children remain focused on achieving their academic dreams.",
    date: "January 10, 2023",
    category: "Programs",
    author: "CRA Foundation Team",
    images: [
      "/images/news/learning1.jpg",
      "/images/news/learning2.jpg",
      "/images/news/learning3.jpg",
      "/images/news/learning4.jpg",
      "/images/news/learning5.jpg",
    ],
  },
];

export const donationTiers: DonationTier[] = [
  {
    amount: 2000,
    label: "₦2,000",
    description: "Daily Meal",
    impact: "Provides a nutritious midday meal for one child for a week.",
  },
  {
    amount: 5000,
    label: "₦5,000",
    description: "School Kit",
    impact:
      "Covers school bags, writing materials, and stationery for one child.",
  },
  {
    amount: 10000,
    label: "₦10,000",
    description: "Uniform & Shoes",
    impact:
      "Provides a complete school uniform set including sandals for one child.",
  },
  {
    amount: 25000,
    label: "₦25,000",
    description: "Monthly Support",
    impact: "Covers all basic needs for one child for an entire month.",
  },
  {
    amount: 50000,
    label: "₦50,000",
    description: "Term Scholarship",
    impact:
      "Fully sponsors one child's school fees, books, and meals for a term.",
  },
  {
    amount: 100000,
    label: "₦100,000",
    description: "Annual Scholarship",
    impact:
      "Provides full educational support for one child for an entire academic year.",
  },
];

export const sponsorChildren: SponsorChild[] = [
  {
    id: "1",
    name: "Taiwo A.",
    age: 9,
    school: "Community Primary School, Surulere",
    story:
      "Taiwo lost her father and her mother sells groundnuts to survive. She is bright and loves mathematics.",
    sponsored: false,
  },
  {
    id: "2",
    name: "Emmanuel K.",
    age: 11,
    school: "Lagos Island Primary School",
    story:
      "Emmanuel lives with his grandmother and dreams of becoming a doctor. He needs support to continue his education.",
    sponsored: false,
  },
  {
    id: "3",
    name: "Blessing O.",
    age: 8,
    school: "Surulere Model School",
    story:
      "Blessing is one of seven children and the family struggles to afford school fees. She is passionate about reading.",
    sponsored: true,
  },
  {
    id: "4",
    name: "Chukwuemeka N.",
    age: 12,
    school: "Mainland Junior High School",
    story:
      "Chukwuemeka was found on the streets before CRA Foundation intervened. He now tops his class in science.",
    sponsored: false,
  },
  {
    id: "5",
    name: "Fatima A.",
    age: 10,
    school: "Ojota Community School",
    story:
      "Fatima is a refugee child who arrived in Lagos with nothing. She has shown remarkable resilience and academic potential.",
    sponsored: false,
  },
  {
    id: "6",
    name: "Damilola S.",
    age: 7,
    school: "Badagry Primary School",
    story:
      "Damilola is an orphan raised by neighbors. She loves art and has a beautiful voice. She just needs a chance.",
    sponsored: true,
  },
];

export const lgas = [
  {
    name: "Surulere LGA",
    description: "Primary area of operations and foundation headquarters.",
  },
  {
    name: "Mainland LGA",
    description: "Active programs supporting children across the mainland.",
  },
  {
    name: "Ojoo LGA",
    description: "Community engagement and after-school support programs.",
  },
  {
    name: "Ijaiye-Ojokoro LGA",
    description: "Scholarship and meals programs for underprivileged children.",
  },
  {
    name: "Badagry LGA",
    description: "Outreach and education support in the Badagry community.",
  },
];

export const gallery: GalleryItem[] = [
  {
    id: "1",
    cat: "Events",
    caption: "Independence Day celebration with children",
    src: "/images/news/independence1.jpg",
  },
  {
    id: "2",
    cat: "Skills",
    caption: "Fashion Design and tailoring Workshop for Children",
    src: "/images/gallery/skills6.mp4",
  },
  {
    id: "3",
    cat: "Excursions",
    caption: "Educational excursion trip",
    src: "/images/gallery/excursion1.jpg",
  },
  {
    id: "4",
    cat: "Skills",
    caption: "Handcraft skill session",
    src: "/images/gallery/skills1.jpg",
  },
  {
    id: "5",
    cat: "Games",
    caption: "Outdoor team-building games",
    src: "/images/gallery/games1.jpg",
  },
  {
    id: "6",
    cat: "Programs",
    caption: "After-school tutoring session",
    src: "/images/gallery/program1.jpg",
  },
  {
    id: "7",
    cat: "Learning",
    caption: "Interactive classroom lesson",
    src: "/images/gallery/learning1.jpg",
  },
  {
    id: "8",
    cat: "Meals",
    caption: "Nutritious meal served to children",
    src: "/images/gallery/meals1.jpg",
  },
  {
    id: "9",
    cat: "Events",
    caption: "Children marking Nigeria's Independence Day",
    src: "/images/news/independence2.jpg",
  },
  {
    id: "10",
    cat: "Skills",
    caption: "Vocational skill training",
    src: "/images/gallery/skills2.jpg",
  },
  {
    id: "11",
    cat: "Programs",
    caption: "Educational support program",
    src: "/images/gallery/program2.jpg",
  },
  {
    id: "12",
    cat: "Skills",
    caption: "Fashion Design and tailoring Workshop",
    src: "/images/gallery/skills7.jpeg",
  },
  {
    id: "13",
    cat: "Excursions",
    caption: "Museum learning visit",
    src: "/images/gallery/excursion2.jpg",
  },
  {
    id: "14",
    cat: "Learning",
    caption: "Reading and literacy session",
    src: "/images/gallery/learning2.jpg",
  },
  {
    id: "15",
    cat: "Games",
    caption: "Friendly sports competition",
    src: "/images/gallery/games2.jpg",
  },
  {
    id: "16",
    cat: "Meals",
    caption: "Daily feeding program in progress",
    src: "/images/gallery/meals2.jpg",
  },
  {
    id: "17",
    cat: "Events",
    caption: "Patriotic activities during Independence Day",
    src: "/images/news/independence3.jpg",
  },
  {
    id: "18",
    cat: "Programs",
    caption: "Student mentorship initiative",
    src: "/images/gallery/program3.jpg",
  },
  {
    id: "19",
    cat: "Skills",
    caption: "Vocational skills workshop",
    src: "/images/gallery/skills3.jpg",
  },
  {
    id: "20",
    cat: "Excursions",
    caption: "Historical site exploration",
    src: "/images/gallery/excursion3.jpg",
  },
  {
    id: "21",
    cat: "Games",
    caption: "Interactive group games",
    src: "/images/gallery/games3.jpg",
  },
  {
    id: "22",
    cat: "Learning",
    caption: "Group study activity",
    src: "/images/gallery/learning3.jpg",
  },
  {
    id: "23",
    cat: "Meals",
    caption: "Children enjoying a healthy lunch",
    src: "/images/gallery/meals3.jpg",
  },
  {
    id: "24",
    cat: "Skills",
    caption: "Fashion Design Workshop for Children",
    src: "/images/gallery/skills8.jpeg",
  },
  {
    id: "25",
    cat: "Events",
    caption: "Independence Day cultural presentation",
    src: "/images/news/independence4.jpg",
  },
  {
    id: "26",
    cat: "Programs",
    caption: "School supplies distribution",
    src: "/images/gallery/program4.jpg",
  },
  {
    id: "27",
    cat: "Skills",
    caption: "Handcraft skill developement",
    src: "/images/gallery/skills4.jpg",
  },
  {
    id: "28",
    cat: "Learning",
    caption: "Educational development class",
    src: "/images/gallery/learning4.jpg",
  },
  {
    id: "29",
    cat: "Excursions",
    caption: "Science and discovery tour",
    src: "/images/gallery/excursion4.jpg",
  },
  {
    id: "30",
    cat: "Games",
    caption: "Recreational play session",
    src: "/images/gallery/games4.jpg",
  },
  {
    id: "31",
    cat: "Meals",
    caption: "Meal distribution during outreach",
    src: "/images/gallery/meals4.jpg",
  },
  {
    id: "32",
    cat: "Events",
    caption: "Celebrating Nigeria's freedom and unity",
    src: "/images/news/independence5.jpg",
  },
  {
    id: "33",
    cat: "Programs",
    caption: "Community learning workshop",
    src: "/images/gallery/program5.jpg",
  },
  {
    id: "34",
    cat: "Skills",
    caption: "Handcraft skills development",
    src: "/images/gallery/skills5.jpg",
  },
  {
    id: "35",
    cat: "Learning",
    caption: "Student learning engagement",
    src: "/images/gallery/learning5.jpg",
  },
  {
    id: "36",
    cat: "Excursions",
    caption: "Outdoor educational experience",
    src: "/images/gallery/excursion5.jpg",
  },
  {
    id: "37",
    cat: "Games",
    caption: "Children participating in fun activities",
    src: "/images/gallery/games5.jpg",
  },
  {
    id: "38",
    cat: "Meals",
    caption: "Providing nourishment for growing minds",
    src: "/images/gallery/meals5.jpg",
  },
  {
    id: "39",
    cat: "Skills",
    caption: "Fashion Design and tailoring Workshop for Children",
    src: "/images/gallery/skills9.jpeg",
  },
];

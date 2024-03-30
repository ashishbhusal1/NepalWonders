import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "Bungee Jump",
    city: "Pokhara",
    address: 'Somewhere',
    distance: 300,
    price: 89,
    maxGroupSize: 10,
    desc: "The Pokhara Bungee Jump offers you a 70 meter vertical drop and a 3 second free fall before you bounce back and enjoy the rest of your experience. Make sure to take a peek at the scenic surroundings during your jump!",
    reviews: [
      {
        name: "Collins",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Hot Air Baloon, Pokhara",
    city: "Pokhara",
    address: 'Somewhere',
    distance: 400,
    price: 100 ,
    maxGroupSize: 8,
    desc: "This ballooning experience will let you fly over 1000 feet above sea level for 40 to 60 minutes. Views of mountains (like Machhapuchhre, Annapurna and Dhaulagiri), Phewa Lake, and whole Pokhara Valley can be observed with this balloon voyage. The chilled air and cooler atmosphere will make your trip more profound.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Rara Lake, Nepal",
    city: "Nepal",
    address: 'Somewhere',
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Rara Lake, also known as Mahendra Lake, is the largest fresh water lake in the Nepalese Himalayas. It is the main feature of Rara National Park, located in Jumla and Mugu Districts of Karnali Province. Rara National Park stretches over 106 km2 (41 sq mi).",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Mankamana, Gorkha",
    city: "",
    address: 'Somewhere',
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Manakamana means “having one's wishes fulfilled”. Hence, Manakamana in Gorkha is one of the most visited temples in Nepal where devotees from all over Nepal and abroad throng the temple daily to offer prayers to the goddess in the belief that this will fulfill their wishes",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "BouddhaNath Stupa, Kathmandu",
    city: "Nepal",
    address: 'Somewhere',
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Boudhanath stupa is one of the largest stupas in the world and a UNESCO World Heritage site. It is a very popular attraction among foreigners and locals alike; every day, hundreds of tourists and pilgrims walk in a clockwise direction around the stupa, under the protective eyes of Buddha.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Pashupati Nath,Kathmandu",
    city: "Nepal",
    address: 'Somewhere',
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Pashupatinath Temple is the oldest Hindu temple in Kathmandu. It is not known for certain when Pashupatinath Temple was built. But according to Nepal Mahatmaya and Himvatkhanda, the deity here gained great fame there as Pashupati. Pashupatinath Temple's existence is recorded as early as 400 CE.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Jalbire Jharana , Chitwan",
    city: "Nepal",
    address: 'Somewhere',
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Lamo waterfall (Nepali: लामो झरना ), also known as Jalbire Jharana, is located in Chandi Vhanjhyang in the section of Muglin-Narayangarh Highway in Chitwan district of Nepal. The fall is about 60 meter high",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Rara Lake, Nepal",
    city: "Nepal",
    address: 'Somewhere',
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Rara Lake, also known as Mahendra Lake, is the largest fresh water lake in the Nepalese Himalayas. It is the main feature of Rara National Park, located in Jumla and Mugu Districts of Karnali Province. Rara National Park stretches over 106 km2 (41 sq mi).",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
];

export default tours;

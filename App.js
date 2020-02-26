import React from "react";
import Navbar from "./components/Navbar";
import Titel from "./components/titel";
import Boxes from "./components/boxes";
import Star from "./components/star";
import Town from "./components/town";
import "./App.css";


function App() {
  const nav = [
    { drop: "About us", statu: "y" },
    { drop: "Career", statu: "new-list" },

    {
      drop: "Departements",
      submenu: [
        "Marketing & PR",
        "Customer Success & Sales",
        "IT, Product, Design & UX",
        "Finance & Administration",
        "HR & more"
      ],
      statu: "new-list"
    }
  ];
  const titel = [
    {
      text:
        "We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere"
    },
    {
      text:
        "We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients."
    }
  ];

  const boxes = [
    {
      titel: "For patients",
      text: "Find a doctor, book a visit and solve any health-related doubt",

      image :"https://www.docplanner.com/img/screen-marketplace@2x.png",
     
      down: ["shoose country","Argentina","Australia","Brazil","Chile","Colombia","Czech","France","Italy","Mexico","Peru",'Poland','Portugal','Spain','Turkey','UK']
    },
    {
      titel: "For doctors",
      text: "Save time managing visits and cut no-shows by half",

      image: "https://www.docplanner.com/img/screen-saas@2x.png"
    }
  ];
const stats=[
{svg:"https://www.docplanner.com/img/flag.png",
titel:'Leader in 10 countries',
text:'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile'},
{svg:"https://www.docplanner.com/img/patients.png",
titel:'30 million unique patients',
text:'visit us every month'},
{svg:"https://www.docplanner.com/img/visits.png",
titel:'1.5 million appointments',
text:'booked last month'},
{svg:"https://www.docplanner.com/img/doctors.png",
titel:'2 million active doctors',
text:'trust in our solutions'}
];

const towns=[
  {img:"https://www.docplanner.com/images/warsaw.png",
  titel:'Warsaw',
  button:'See openings'},
  {img:"https://www.docplanner.com/images/barcelona.png",
  titel:'Barcelona',
  button:'See openings'},
  {img:"https://www.docplanner.com/images/istanbul.png",
  titel:'Istanbul',
  button:'See openings'},
  {img:"https://www.docplanner.com/images/rome.png",
  titel:'Rome',
  button:'See openings'},
  {img:"https://www.docplanner.com/images/mexico-city.png",
  titel:'Mexico City',
  button:'See openings'},
  {img: "https://www.docplanner.com/images/curitiba.png" ,
  titel:'Curitiba',
  button:'See openings'},
]


  return (
    <div>
      <Navbar list={nav} />
      <Titel word={titel} />
      <Boxes country={boxes} />
      <Star stat={stats} />
      <Town town={towns} />
    </div>
  );
}

export default App;

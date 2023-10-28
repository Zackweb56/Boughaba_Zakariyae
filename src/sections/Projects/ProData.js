import img01 from '../../assets/electro.jpg';
import img02 from '../../assets/fastfood.jpg';
import img03 from '../../assets/travel.png';
import img04 from '../../assets/drinks_web.png';
import img05 from '../../assets/fast_food.png';
import img06 from '../../assets/qcm_test.png';
import img07 from '../../assets/world_map.png';
// icons
import { FaReact,FaLaravel,FaHtml5,FaCss3Alt,FaBootstrap,FaFigma, FaGear } from "react-icons/fa6";
import { BiLogoJquery } from "react-icons/bi";
import { SiMysql} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

export const ProData = [
    {
        id: 1,
        project_image: img01,
        project_title: 'Electro. e-commerce website',
        project_desc: [<FaLaravel />  ,  <SiMysql /> ,<FaFigma />,<FaReact/> ,  <BiLogoJquery />],
        project_details: '"this website is a responsive Electro e-commerce site, meticulously designed on Figma and created using React.js, CSS, Bootstrap, and jQuery. Backed by the strength of Laravel and MySQl."',
        // project_link_preview: 'https://github.com/Zackweb56/Electro.e-commerce',
    },
    {
        id: 2,
        project_image: img03,
        project_title: 'Travel website',
        project_desc: [<FaHtml5 />  ,  <FaCss3Alt />  ,  <BiLogoJquery />  ,<IoLogoJavascript/>,  <FaBootstrap />],
        project_details: '"this website is a responsive travel website, expertly crafted using HTML, CSS, Bootstrap, jQuery, and JavaScript. Immerse yourself in stunning visuals and seamless navigation as you explore exciting destinations and plan your next adventure through our user-friendly interface."',
        // project_link_preview: 'https://github.com/Zackweb56/Travel-website-design-html-css',
    },
    {
        id: 3,
        project_image: img07,
        project_title: 'World Map Website Using API',
        project_desc: [<FaHtml5 />, <FaCss3Alt />, <IoLogoJavascript/>, <FaGear/>],
        project_details: 'Introducing the engaging educational World Map Adventures website, an immersive digital platform designed to spark curiosity and exploration in learners of all ages. Embark on a virtual journey through continents and cultures where you will get to know countries you did not know.',
        // project_link_preview: 'https://github.com/Zackweb56/fastfood_website',
    },
    {
        id: 4,
        project_image: img04,
        project_title: 'Drinks website design',
        project_desc: [<FaHtml5 />, <FaCss3Alt />, <FaBootstrap />],
        project_details: '"Expertly built with HTML, CSS, and the power of Bootstrap. Designed seamlessly for all devices, from smartphones to desktops, our site showcases a mouth-watering menu, eye-catching images, and an engaging design that brings our delicious offerings to life."',
        // project_link_preview: 'https://github.com/Zackweb56/fastfood_website',
    },
    {
        id: 5,
        project_image: img05,
        project_title: 'Fast Food website design',
        project_desc: [<FaHtml5 />,<FaCss3Alt />, <FaBootstrap />, <IoLogoJavascript/>],
        project_details: '"Expertly built with HTML, CSS, and the power of Bootstrap. Designed seamlessly for all devices, from smartphones to desktops, our site showcases a mouth-watering menu, eye-catching images, and an engaging design that brings our delicious offerings to life."',
        // project_link_preview: 'https://github.com/Zackweb56/fastfood_website',
    },
    {
        id: 6,
        project_image: img06,
        project_title: 'MCQ tests web application.',
        project_desc: [<FaLaravel />  , <SiMysql /> , <BiLogoJquery />],
        project_details: '"this web application is a responsive MCQ tests, meticulously created using Laravel, CSS, Bootstrap, and jQuery. Backed by the strength of Laravel and MySQl."',
        // project_link_preview: 'https://github.com/Zackweb56/Electro.e-commerce',
    },
    // {
    //     project_image: img02,
    //     project_title: 'Restaurent website design',
    //     project_desc: [<FaHtml5 />,<FaCss3Alt />, <FaBootstrap />],
    //     project_details: '"Expertly built with HTML, CSS, and the power of Bootstrap. Designed seamlessly for all devices, from smartphones to desktops, our site showcases a mouth-watering menu, eye-catching images, and an engaging design that brings our delicious offerings to life."',
    //     // project_link_preview: 'https://github.com/Zackweb56/fastfood_website',
    // },
]
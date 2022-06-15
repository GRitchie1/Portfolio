import img1 from './Images/1.jpg';
import img2 from './Images/2.jpg';
import img3 from './Images/3.jpg';

var projectslist = [
    {
        title:"RFID Robotic Arm", 
        overview: <p>As part of my HND Mechatronics Graded Unit I built an RFID Robotic arm to pick up, identify, and sort items based on their RFID codes.</p>,
        content:<div>
                    <p>As part of my HND Mechatronics Graded Unit I built an RFID Robotic arm to pick up, identify, and sort items based on their RFID codes.</p>
                    <p>This project was 3D printed on my Ender3V2.</p>
                    <p>This project incorporated mechanical design, 3D modelling, 3D printing, electrical engineering, electronics and programming microcontrollers.</p>
                </div>,
        img:img1, 
        url:"https://github.com/GRitchie1/RFIDRoboticArm-HNDGradedUnit" 
    },
    {
        title:"Automatic GreenHouse", 
        overview:<p>An Automatic GreenHouse project to control air temperature and humidity, and water the plants autonomously.</p>, 
        content:<div>
                    <p>I am currently developing a modular automatic greenhouse that can water the plants and control the air temperature & humidity.</p>
                    <p>This will run entirely on solar power, and will be modular allowing for multiple units to be controlled by a single Controller Node running a Machine Learning algorithm.</p>
                    <p>This project is still in the design stage.</p>
                </div>,
        img:img2, 
        url:"https://github.com/GRitchie1/AutomaticGreenhouse" 
    },
    {
        title:"Balena To Do List", 
        overview:<p>A desktop, Flask based 'To Do List' application run on Raspberry Pi 4 managed by Balena.</p>, 
        content:<div>
                    <p>As an experiment I built a To Do List application using Flask.</p>
                    <p>This runs on a Raspberry Pi 4, managed using Balena.io, with the official Pi touchscreen to create a desktop 'To Do List'.</p>
                    <p>This allows users to track items with features such as sub-steps, due dates, and a Random Task selector.</p>
                    <p>The goal of this project was to learn Flask, and build a tool to improve my productivity.</p>
                </div>,
        img:img3, 
        url:"https://github.com/GRitchie1/Balena_ToDoList" 
    },
  ]
export default projectslist;
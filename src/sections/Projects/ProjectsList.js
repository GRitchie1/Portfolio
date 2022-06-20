//YouTube Embedd
import ReactPlayer from "react-player";

//RFID Robotic Arm
import img1 from './Images/RFIDRoboticArm/main.jpg';
import schematic1 from './Images/RFIDRoboticArm/schematic.jpg';
import model1 from './Images/RFIDRoboticArm/model.jpg';

//Automatic GreenHouse
import img2 from './Images/AutomaticGreenhouse/main.jpg';

//Balena To Do List
import img3 from './Images/BalenaToDoList/main.jpg';

//Motorbike
import bike1 from './Images/Motorbike/main.jpg'
import before from './Images/Motorbike/before.jpg'
import during from './Images/Motorbike/during.jpg'
import after from './Images/Motorbike/after.jpg'

//Tic Tac Terminal Toe
import img4 from './Images/TicTacTerminalToe/main.jpg';


var projectslist = [
    {
        title:"RFID Robotic Arm", 
        overview: <p>As part of my HND Mechatronics Graded Unit I built an RFID Robotic arm to pick up, identify, and sort items based on their RFID codes.  <br/><b>This project was awarded an 'A' Grade.</b></p>,
        content:<div>
                    <h4>This project was awarded an 'A' Grade.</h4>
                    <p>As part of my HND Mechatronics Graded Unit I built an RFID Robotic arm to pick up, identify, and sort items based on their RFID codes.
                    </p>
                    <p>This project was 3D printed on my Ender3V2.</p>
                    <p>This project incorporated mechanical design, 3D modelling, 3D printing, electrical engineering, electronics and programming microcontrollers.</p>
                    <h3>Watch it in action!</h3>
                    <ReactPlayer url="https://www.youtube.com/watch?v=GsCnQiO8YXE" className="youtubePlayer"/>
                    <h3>Project Brief</h3>
                    <p>
                        The robotic arm is required to pick up, analyse and sort 3D printed items from a conveyor belt.    
                        The robotic arm is required to sort the items by scanning their RFID tags and determine which output position to place the item in.
                        The robotic system must be able to sort items quickly as the conveyor belt will run at 2m/min, and the items will have a 300mm spacing.  The product must be powered by mains voltage as it will be used in an industrial setting.  The final product must be able to collect items from a 400mm wide conveyor, however the prototype does not have a size requirement.
                    </p>
                    <ul>
                        <li>The robotic system must be able to pick up the item</li>
                        <li>The robotic system must be able to move the item</li>
                        <li>The robotic system must use RFID to scan and identify the item</li>
                        <li>The robotic system must be able to place the item in three distinct output positions</li>
                        <li>The robotic system must meet relevant health and safety requirements including an emergency stop and barriers.</li>
                        <li>The robotic system must be able to sort parts at a rate of 6.66 per minute as parts are centred at 300mm spacing and the conveyor belt moves at a rate of 2m/minute.</li>
                    </ul>
                    <h3>Research</h3>
                    <p>
                        A large amount of research was done to investigate the best methods to design and build a robotic arm. 
                    </p>
                    <p>
                        Multiple types of motors were investigated and compared.  
                        It was decided that due to size and budget restrictions, the best motor for the project would be a micro servo motor.  
                        Servo motors feature a feedback loop which allows the servo to know its current position.  
                        This makes it simple to accurately control the angle of the servo motors.
                    </p>
                    <p>
                        Multiple microcontrollers were researched to interface and control the motors.  
                        The microcontroller that was chosen to run this project was a Raspberry Pi Pico.  This features numerous PWM pins, as well as several built in hardware interfaces.
                    </p>
                    <p>
                        The prototyping method chosen for this project is FDM 3D printing.
                        This allows for fast prototyping as each iteration of a design can be very quickly and cheaply fabricated.
                        The fact that 3D printed parts can be fabricated in the workshop means that there is reduced down-time as delivery times are removed.
                    </p>
                    <p>
                        The programming language chosen for this project was CircuitPython due to the large number of maintained libraries.
                        The ability to use python on an embedded system simplifies the development process, and the compatibility with the Raspberry Pi Pico makes it perfect for this project.
                    </p>
                    <h3>Design</h3>
                    <p>
                        The RFID scanner that was chosen was the RC522.  This is an RFID reader and writer, and is used to read the ID of each object to determine the output position.
                    </p>
                    <p>
                        The 3D printed parts of the arm were a combination of custom parts designed by Gregor Ritchie, and models found on Thingiverse.  
                        The circuitry was designed by Gregor Ritchie and had numerous iterations. The final schematic was made using Fritzing and can be seen below.
                    </p>
                    <img style={{maxWidth:"100%"}} src={schematic1} alt="schematic"></img>
                    <p>
                        The following design was created for the base of the robotic arm.  This gives a very strong and stable base to allow the robot to rotate.
                    </p>
                    <img style={{maxWidth:"100%"}} src={model1} alt="3D Model"></img>
                    <h3>Project Build</h3>
                    <p>
                        The project build was a long process.  There were numerous issues with the 3D prints, such as breakages and redesigns.
                        Once the robotic arm was assembled, some test code was written to test the servo movement.  Unfortunately there an issue of servo jitter.
                        This required a lot of debugging, but it was discovered that the Pi Pico was unable to drive all 5 servo motors accurately in parallel.  
                        This required the addition of the PCA9685 Servo Driver board to control the servos. (This can be seen in the schematic above.)
                    </p>
                    <p>
                        This driver board uses I2C which can be easily interfaced with the Pi Pico, and there is a CircuitPython library made by AdaFruit to interface with this board.
                    </p>
                    <p>
                        Once the servo jitter issue was resolved and the robot could move accurately, the RFID scanner was connected using SPI.
                        The final code was then written and the robot was allocated output locations to place each RFID.
                    </p>
                    <p>
                        Once this was complete, the emergency stop was added and barriers were built around the robot arm to show the work envelope of the robotic system.
                    </p>
                    <h3>Testing</h3>
                    <p>
                        Each subsystem was tested individually to ensure it worked, then the entire system was tested as a whole.
                        The following test plan was used.
                    </p>
                    <table style={{border:"1px solid",}}>
                        <thead>
                            <th style={{borderBottom:"3px solid",}}>Test</th>
                            <th style={{borderBottom:"3px solid",}}>Expected Result</th>
                            <th style={{borderBottom:"3px solid",}}>Actual Result</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Can robotic system pick up item?</td>
                                <td>Item is picked up by system, item is securely held by system.</td>
                                <td>The robot can successfully pick up and hold the item.</td>
                            </tr>
                            <tr>
                                <td>Can robotic system move the item?</td>
                                <td>Item is held and rotated to a set position.</td>
                                <td>The robot can successfully hold and rotate the item to a set position.</td>
                            </tr>
                            <tr>
                                <td>Can the robotic system scan the items RFID?</td>
                                <td>The robot places the item on the RFID scanner and reads its RFID code.</td>
                                <td>The robot can successfully place the item on the RFID scanner and read the RFID code.</td>
                            </tr>
                            <tr>
                                <td>Item for output one.</td>
                                <td>Item placed in location one.</td>
                                <td>Robot scans item, identifies it and places it in the output location one.</td>
                            </tr>
                            <tr>
                                <td>Item for output two.</td>
                                <td>Item placed in location two.</td>
                                <td>Robot scans item, identifies it and places it in the output location two.</td>
                            </tr>
                            <tr>
                                <td>Item with unidentified ID.</td>
                                <td>Item placed in location three (unidentified objects).</td>
                                <td>Robot scans item, identifies it and places it in the output location for unidentified objects.</td>
                            </tr>
                            <tr>
                                <td>Item with no ID.</td>
                                <td>Item placed in location three (unidentified objects).</td>
                                <td>Robot scans item, identifies it and places it in the output location for unidentified objects.</td>
                            </tr>
                            <tr>
                                <td>Emergency stop pressed.</td>
                                <td>System should stop instantly.</td>
                                <td>The system is stopped instantly.</td>
                            </tr>
                            <tr>
                                <td>Robotic system can sort 6.66 items per minute.</td>
                                <td>The robotic system should be able to sort one item every 9 seconds.</td>
                                <td>The robotic system took between 20-30 seconds to sort one item.</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3>Conclusion</h3>
                    <p>
                        In conclusion, this project was a success.  The robotic system was able to pick up, identify and sort items using their RFID codes.
                        The robotic system features a start button, and an emergency stop.  
                        The robotic system features health and safety features such as barriers to ensure operator safety during operation.  
                        The base that was designed provides an effective foundation for the robotic arm, allowing for accurate and reliable movement with reduced rotation around unintended axes.
                        Unfortunately the speed of the protype was not able to match the required speed of the system due to the small motors not being able to control the inertia of the system at higher speeds.
                        This resulted in reduced accuracy at higher speeds.    
                        However, base design will allow the robot to meet the requirements of the project brief as it provides the stability for the rest of the robotic arm to build upon.  
                    </p>
                    <p>
                        There are several improvements that could be made to the system to improve both its productivity and safety.  
                        These include improvements to the motors, the code, the physical design of the robot, addition of sensors, and improved health and safety systems.  
                        These upgrades will allow the system to meet the speed requirements of the project brief, 
                        however, improvements require an increased budget for the system, and this must be considered when developing the next design iteration.
                    </p>
                    <h4>
                        The full project write-up will be available shortly.  Instructions on how to build this project can be found in the GitHub repository.
                    </h4>
                </div>,
        img:img1, 
        url:"https://github.com/GRitchie1/RFIDRoboticArm-HNDGradedUnit" 
    },
    {
        title:"Automatic GreenHouse", 
        overview:<p>An Automatic GreenHouse project to control air temperature and humidity, and water the plants autonomously...</p>, 
        content:<div>
                    <p>I am currently developing a modular automatic greenhouse that can water the plants and control the air temperature & humidity.</p>
                    <p>This will run entirely on solar power, and will be modular allowing for multiple units to be controlled by a single Controller Node running a Machine Learning algorithm.</p>
                    <h3>Design</h3>
                    <p>
                        The design of this project is intended to be highly modular, with the ability to chain multiple target nodes (units) together to allow for data to be 
                        combined and analysed by a single controller node. 
                        The power supply from the solar power system will also be chained to allow for a more simple power distribution setup.
                    </p>
                    <p>
                        Each node will feature the following sensors:
                    </p>
                    <ul>
                        <li>Temperature</li>
                        <li>Air Humidity</li>
                        <li>Soil moisture sensors (1 per planter)</li>
                        <li>Light Level (front and back of unit)</li>
                        <li>Water level to monitor irrigation system</li>
                        <li>Camera (optional: adds ability to implement timelapses and machine learning)</li>
                    </ul>
                    <p>Each node will feature the following control systems:</p>
                    <ul>
                        <li>Light (LED strips)</li>
                        <li>Temperature/Humidity (DC Fan)</li>
                        <li>Soil moisture (Water Solenoid/Pump)</li>
                    </ul>
                    <h4>This project is still in the design stage.  The most up to date documentation is in the GitHub repository.</h4>
                </div>,
        img:img2, 
        url:"https://github.com/GRitchie1/AutomaticGreenhouse" 
    },
    {
        title:"Balena To Do List", 
        overview:<p>A desktop, Flask based 'To Do List' application run on Raspberry Pi 4 managed by Balena...</p>, 
        content:<div>
                    <p>As an experiment I built a To Do List application using Flask.</p>
                    <p>This runs on a Raspberry Pi 4, managed using Balena.io, with the official Pi touchscreen to create a desktop 'To Do List'.</p>
                    <p>This allows users to track items with features such as sub-steps, due dates, and a Random Task selector.</p>
                    <p>The goal of this project was to learn Flask, and build a tool to improve my productivity.</p>
                </div>,
        img:img3, 
        url:"https://github.com/GRitchie1/Balena_ToDoList" 
    },
    {
        title:"Custom Motorcycle", 
        overview:<p>I designed and fabricated parts to customise my motorbike...</p>, 
        content:<div>
                    <p>Over the last year I have designed and customised my motorbike.</p>
                    <p>This project included fabrication of custom brackets and panels to achieve the desired style.  </p>
                    <p>The motorbike started its life as a green and cream standard Yamaha XVS650A Classic.  This is a cruiser style motorbike which I have customised into a bobber style.</p>
                    <p>The parts of the bike that I customised were: </p>
                    <ul>
                        <li>Mudguard</li>
                        <li>Rear Indicators</li>
                        <li>Foot Boards to Pegs</li>
                        <li>Electronic gear shifter replaced with stock gear shifter</li>
                        <li>Colour changed to Black</li>
                        <li>New bobber seat</li>
                    </ul>
                    <h3>Before</h3>
                    <img style={{maxWidth:"100%"}} src={before} alt="motorbike before"></img>
                    <h3>During</h3>
                    <img style={{maxWidth:"100%"}} src={during} alt="motorbike during"></img>
                    <h3>After</h3>
                    <img style={{maxWidth:"100%"}} src={after} alt="motorbike after"></img>
                </div>,
        img:bike1, 
        url:"" 
    },
    {
        title:"CodeCademy Project: Tic-Tac-Terminal-Toe", 
        overview:<p>A multiplayer version of Tic-Tac-Toe played in the terminal.  This program was written in Python. Created as part of the CodeCademy Computer Science Career Path...</p>, 
        content:<div>
                    <p>A multiplayer version of Tic-Tac-Toe played in the terminal.</p>
                    <p>This project was created as part of the CodeCademy Computer Science Career Path.  This program was written in Python utilising OOP.  </p>
                    <p>Users take turns selecting the column and row they want to place their marker.  If a player gets 3 markers in a row they win. </p>
                    <p>
                        The grid was created as a Class, and uses a 2D array structure to hold the status of the game.  
                        The grid has a number of methods to check for win conditions, and allow the users to perform moves.
                    </p>
                </div>,
        img:img4, 
        url:"https://github.com/GRitchie1/CodeCademy-TicTacTerminalToe" 
    },
  ]
export default projectslist;
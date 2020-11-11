import '../App.css';
import React, { useState } from 'react';
import {Row, Col, ListGroup, ListGroupItem,  Nav, NavItem, NavLink, TabPane, TabContent} from 'reactstrap'; 
import SkillsIT from './skillsIT';
import SkillsSoftware from './skillsSoftware';  


const Qual = () =>{
    
    const [activeTab, setActiveTab] = useState('1');
    
    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }
     
        return(
            
       
            <div>
            <ListGroup id="List">
                <ListGroupItem><a href="#Skills_Header">Skills</a></ListGroupItem>
                <ListGroupItem><a href="#Education_Header">Education</a></ListGroupItem>
                <ListGroupItem><a href="#Work_Header">Work History</a></ListGroupItem>
                <ListGroupItem><a href="#">Projects</a></ListGroupItem>
                <ListGroupItem><a href="#Contact">Contact</a></ListGroupItem>
            </ListGroup>
            <div className = "container" id="main">
                <h1 id="Skills_Header">Skills</h1>
                <br/>

                <Nav tabs>
                    <NavItem>
                        <NavLink onClick={() => {toggle('1'); }} className="1">I.T. Skills</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={() => {toggle('2'); }} className="2">Software Dev Skills</NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab= {activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col><SkillsIT/></Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col><SkillsSoftware/></Col>
                        </Row>
                    </TabPane>
                </TabContent>
                <h1 id="Education_Header">Education</h1>
                
                <br/>
         
                <div id="Certs">
                    <div>
                            <h4>CompTIA A+ ce Certification, (expires: 2023):</h4>
                            <div>• Expanded my knowledge of computer hardware including: storage devices, motherboards, CPUs, display devices, GPUs, and RAM</div>
                            <div>• Introduced me to networking concepts such as: networking devices, cabling standards, wireless standards, TCP/IP, UDP common ports and protocols</div>
                            <div>• Increased my knowledge of hardware/software troubleshooting</div> 
                    </div>
                    <br/>
                    <div>
                        <h4> CompTIA Network+ ce Certification,  (expires: 2023):</h4>
                            <div>• Expanded my knowledge of networking by introducing me to IPv4 & IPv6 sub-netting, common ports and protocols, OSI layer model, data protocol units such as Ethernet frames and IP headers</div> 
                            <div>• Introduced me to security concepts such as: fire walls, AAA, RADIUS, wireless encryption standards</div> 
                            <div>• Increased my knowledge of network typologies, and WAN technologies</div> 
                    </div>
                    <br/>
                    <div>
                            <h4>Cisco CCNA, (expected: 2020):</h4>
                            <div>• In my CCNA studies I have learned how to configure VLANs on Cisco switches</div>
                            <div>• Configure Cisco WLCs</div> 
                            <div>• Security minded Switch configuration</div>
                    </div>
                
                </div>
                <div id="Uni">
                    <br/>
                    <p>
                        <h4>Westfield State University GPA: 3.7</h4>
                        <div>• BS in Computer Science (expected: 2022)</div>
                        <br/>
                        <h5>Relvant coursework: </h5>
                        <div>• Introduction to Computer Science: Introduced me to how computation works on a conceptual level, and the Java programming language.</div> 
                        <div>• Program Design I: In this course I learned how to design programs with a focus on readability, and efficiency. This course taught students how to program within the Object Oriented Program design paradigm.</div>
                        <div>• Program Design II: This course focused on designing more complex applications, and touched on topics such as: sorting algorithms, comparators, unit testing, user interface design.</div> 
                        <div>• Data Structures & Algorithm Analysis: While studying Data Structures & Algorithm Analysis, I learned many different concepts and skills such as: C++ syntax, file manipulation, arrays, linked-lists, binary trees, and graphs.</div>
                    </p>
                </div>
                <h1 id="Work_Header">Work History</h1>
                <div id="Target">
                    <h4>Aug 2018 – Dec 2019 Logistics Team Member, Target – Hadley, MA</h4>
                    <div>• Provided excellent customer service to guests at Target</div>
                    <div>• Focused on completing customer orders within the 30 minute time limit</div>
                    <div>• Excelled at customer order fulfillment during high volume such as on black Friday</div> 
                    <div>• Organized the receiving area for the flow team, so they could start their job more efficiently</div>
                    <div>• Educated new logistics team members on our job responsibilities and how to complete them</div> 
                </div>
                <br/>
                <div id="Crossmark">
                    <h4>Mar 2016 – Jan 2017 Event Specialist, Crossmark – South Point, Ohio</h4>
                    <div>• Provided excellent customer service to guests at Sam’s Club</div>
                    <div>• Quantified increased number of sales due to events and demonstrations</div>
                    <div>• Improved customer experiences by helping them find and decide upon products</div> 
                    <div>• Sanitized and organized cooking utensils necessary for my team to fulfill their job requirements</div> 
                </div>
                <br/>
                <div id="HomeLab">
                    <h1></h1>
                </div>
                <div id="Contact">
                    <h1>Contact Information:</h1>
                    <h3>Email: denzeldalton2119@gmail.com</h3>
                    <h3>Phone: (304) 544-2675</h3>
                </div>
            </div>
            </div>    
        ); 
    }
         
export default Qual; 
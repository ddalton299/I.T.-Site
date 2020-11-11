import React, {Component} from 'react'; 
import {Table,} from 'reactstrap'; 

export default class SkillsIT extends Component{
    constructor(props){
      super(props);
    }
    render(){
      return(
        <div className="main">
          <div id="Skills_Body_IT">
                    <Table>
                        <tbody>
                        <tr>
                            <td>Hardware/Software Troubleshooting</td>
                            <td>Power-shell</td>
                            <td>Creating and Maintaining Virtual Machines/Virtual Box</td>
                            <td>Customer Service</td>
                        </tr>
                        <tr>
                            <td>Experienced With Python, JavaScript, Java, C++</td> 
                            <td>Knowledgeable of the OSI Layer Model</td>
                            <td>Working in the Linux Terminal</td>
                            <td>IPv4 & IPv6 Sub-netting</td> 
                        </tr>
                        <tr>
                            <td>Vlan Configuration</td> 
                            <td>Cisco Switch Configuration</td>
                            <td>Cisco WLC Configuration</td>
                            <td>Knowledgeable of Network Cabling Standards</td>
                        </tr>
                        <tr>
                            <td>Windows Server</td>
                            <td>Active Directory</td>
                            <td>Network Security</td>
                            <td>Network Topology</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
        </div>
      );       
    }     
  }
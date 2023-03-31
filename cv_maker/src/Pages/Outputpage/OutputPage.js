import { Col, Container, Row } from "react-bootstrap";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from "react";
import gmailicon from '../../assets/gmail.png';
import {workExperienceAtom,basicDetailsAtom,EducationAtom} from '../state/Atoms.js'

import {
  
    useRecoilValue,
    
  } from 'recoil';

function OutputPage() {

    const basicData=useRecoilValue(basicDetailsAtom)
    const workData=useRecoilValue(workExperienceAtom)
    const educationData=useRecoilValue(EducationAtom)

    
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }


    return (
        <Container fluid>
            <Row lg={12}>
                <Col lg={12} className="d-flex justify-content-center align-items-center">
                    <div id="cv" style={{ height: 800, width: 600, color: "white", }} className=" shadow-lg d-flex flex-row">

                        <div className="bg-dark h-100 col-4 d-flex flex-column align-items-center ">
                            <div style={{ height: 40 }}></div>
                            <ProfileImage handleChange={handleChange} file={file}></ProfileImage>
                            <div style={{height:40}}></div>
                            <h6>Contact</h6>
                            <ContactCard keyy="Email"  value={basicData['email']} ></ContactCard>
                            <ContactCard keyy="Phone"  value={basicData['phone']} ></ContactCard>
                            <ContactCard keyy="Github"  value="http/github/macluster/portfolio" ></ContactCard>


                            

                        </div>
                        <div className=" h-100 col-8 " style={{backgroundColor:"white",padding:20}}>
                            <h2 style={{color:"black"}}>{basicData['name']}</h2>
                            <div style={{height:40}}></div>
                            <h6 style={{color:"black"}}>Education</h6>
                            {educationData.map((item)=>(<EducationCard instituitionName={item['instituitionName']} endDate={item['endDate']}></EducationCard>))}
                            <div style={{height:10}}></div>
                            <h6 style={{color:"black"}}>Work Experience</h6>
                            <WorkExperience></WorkExperience>
                            <WorkExperience></WorkExperience>

                            <WorkExperience></WorkExperience>
                            <div style={{height:10}}></div>
                            <h6 style={{color:"black"}}>Skills</h6>
                           <SkillsCard></SkillsCard>
                           <SkillsCard></SkillsCard>

                           <SkillsCard></SkillsCard>

                           <SkillsCard></SkillsCard>






                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <button onClick={() => { print() }}>print</button>
            </Row>
        </Container>
    )
}

function EducationCard(props)
{
    return(
        <div style={{display:"flex",flexDirection:"row",width:'auto',height:'auto',color:"gray"}}>
            <h6  style={{fontSize:11}}>{props.endDate}</h6>
            <div style={{width:50}}></div>
            <h6  style={{fontSize:11}}>{props.instituitionName}</h6>
        </div>
    )
}


function  ContactCard(props)
{
    return(
        <div style={{display:"flex",width:'100%',flexDirection:'column',alignItems:"start",justifyContent:'space-between',paddingLeft:10,paddingBottom:10}}>
          <h6 style={{fontSize:9,margin:0,fontWeight:800}}>{props.keyy}</h6>
          <div style={{width:5}}></div>
          <h6 style={{fontSize:9,margin:0}}>{props.value}</h6>

        </div>
      
    )
}


function WorkExperience()
{
    return(
        <div style={{display:"flex",flexDirection:"row",width:'auto',height:'auto',color:"gray"}}>
            <h6  style={{fontSize:11}}>2/12/2023</h6>
            <div style={{width:50}}></div>
            <h6  style={{fontSize:11}}>Software developer at infosis</h6>
        </div>
    )
}


function SkillsCard()
{
    return(
        <div style={{display:"flex",flexDirection:"row",width:'auto',height:'auto',color:"gray",paddingLeft:15}}>
            <li><h6  style={{fontSize:11}}>2/12/2023</h6></li>
            <h6  style={{fontSize:11}}>Level :10 </h6>
            
        </div>
    )
}





function ProfileImage(props) {
    return (
        <div style={{ height: 100, width: 100,display:"flex",}}>
            <input type="file" onChange={props.handleChange} style={{ height: 100, width: 100, backgroundColor: "red", position: "absolute", opacity: 0 }}></input>
            <img src={props.file} height={100} width={100} style={{ borderRadius: '50%' }} />
        </div>

    )
}



var loadFile = function (event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
};




function print() {
    //var container = document.getElementById("image-wrap"); //specific element on page
    var container = document.getElementById("cv");; // full page

    html2canvas(container, { allowTaint: true }).then(function (canvas) {
        //document.body.appendChild(canvas);
        var link = document.createElement('a')
        //var link = document.getElementById("aa");




        link.download = "html_image.jpg";
        link.href = canvas.toDataURL();

        link.target = '_blank';

        link.click();

    });
}


export default OutputPage;
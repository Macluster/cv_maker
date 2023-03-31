import { Col, Container, Row } from "react-bootstrap";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from "react";
import fontsize from '../settings/font'
import gmailicon from '../../assets/gmail.png';
import './OutputPage.css'
import {workExperienceAtom,basicDetailsAtom,EducationAtom,skillAtom,projectAtom} from '../state/Atoms.js'

import {
  
    useRecoilValue,
    
  } from 'recoil';



function OutputPage() {

    const basicData=useRecoilValue(basicDetailsAtom)
    const workData=useRecoilValue(workExperienceAtom)
    const educationData=useRecoilValue(EducationAtom)
    const skillData=useRecoilValue(skillAtom)
    const projectData=useRecoilValue(projectAtom)

 
   
    
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }


    return (
        <Container fluid>
            <Row lg={12} className="justify-content-center">
            <div style={{height:15}}></div>
            <h1>Your Cv is Ready</h1>
            <div style={{height:15}}></div>
            </Row>
            <Row lg={12}>
                <Col lg={12} className="d-flex justify-content-space-between align-items-center"  >
                
                    <div id="cv"  className=" shadow-lg d-flex flex-row cv ">

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
                            <h5 className="title" style={{color:"black"}}>Education</h5>
                            {educationData.map((item)=>(<EducationCard data={item}></EducationCard>))}
                            <div style={{height:10}}></div>
                            <h5 className="title" style={{color:"black"}}>Work Experience</h5>
                            {workData.map((item)=>(  <WorkExperience title={item['jobTitle']} company={item['companyName']} date={item['startDate']}  ></WorkExperience>))}
                          
                            

                            <div style={{height:10}}></div>
                            <h5 className="title" style={{color:"black"}}>Skills</h5>
                            {skillData.map((item)=>( <SkillsCard skillName={item['skillName']} skillLevel={item['skillLevel']}></SkillsCard>))}
                            
                            <div style={{height:30}}></div>
                            <h5 className="title" style={{color:"black"}}>My Projects</h5>
                            {projectData.map((item)=>( <Project data={item}></Project>))}

                          






                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center" >
                <div style={{height:30}}></div>
                <button style={{width:100,height:50,color:"white"}}  onClick={() => { print() }}>Download</button>
            </Row>
        </Container>
    )
}

function EducationCard(props)
{
   
    return(
        <div style={{display:"flex",flexDirection:"row",width:'auto',height:'auto',color:"gray"}}>
            <h5  className="content">{props.data['endDate']}</h5>
            <div style={{width:50}}></div>
            <div style={{display:"flex",flexDirection:"column"}}>
            <h5  className="content_bold">{props.data['courseName']}</h5>
            <h5  className="content">{props.data['instituitionName']}</h5>
            </div>
           
        </div>
    )
}


function  ContactCard(props)
{
    return(
        <div style={{display:"flex",width:'100%',flexDirection:'column',alignItems:"start",justifyContent:'space-between',paddingLeft:10,paddingBottom:10}}>
          <h6 className="content_bold_white">{props.keyy}</h6>
          <div style={{width:5}}></div>
          <h6 className="content_white">{props.value}</h6>

        </div>
      
    )
}


function WorkExperience(props)
{
 
    return(
        <div style={{display:"flex",flexDirection:"row",width:'auto',height:'auto',color:"gray"}}>
            <h6  className="content">2/12/2023</h6>
            <div style={{width:50}}></div>

            <div style={{display:"flex",flexDirection:"column"}}>
            <h6  className="content_bold">{props.company}</h6>
            <h6  className="content_bold">{props.title}</h6>
          
            </div>
           
        </div>
    )
}
function Project(props)
{
 
    return(
        <div style={{display:"flex",flexDirection:"row",width:'auto',height:'auto',color:"gray"}}>
            <h6  className="content">2/12/2023</h6>
            <div style={{width:50}}></div>

            <div style={{display:"flex",flexDirection:"column"}}>
            <h6  className="content_bold">{props.data['projectName']}</h6>
            <h6 className="content">{props.data['projectTechnology']}</h6>
            <h6  className="content">{props.data['projectDescription']}</h6>
          
            </div>
           
        </div>
    )
}

function SkillsCard(props)
{


    return(
        <div style={{display:"flex",justifyContent:'start',flexDirection:"row",alignItems:"center",width:'auto',height:'auto',color:"gray",marginBottom:10}}>
            <h6  className="content">{props.skillName}</h6>
            <div style={{width:30}}></div>
            <div style={{width:200,height:20}}>
                <div style={{height:20,width:props.skillLevel+"0%",backgroundColor:'yellow'}}></div>
            </div>
            <h6  className="content">{props.skillLevel}</h6>
            
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

    html2canvas(container,{ allowTaint: true,scale:4 }).then(function (canvas) {
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
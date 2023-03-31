
import { useState } from 'react';
import { Col, Container,Row } from 'react-bootstrap';
import OutputPage from '../Outputpage/OutputPage';

import BasicDetails from './Subpages/BasicDetails';
import Education from './Subpages/Education';

import WorkExperience from './Subpages/WorkExperiance';
import {
    RecoilRoot,
  
  } from 'recoil';
import SkillPage from './Subpages/SkillPage';
import ProjectPage from './Subpages/ProjectPage';
function DetailsPage()
{

    const[menu,setMenu]=useState(0);
    return(
        <div style={{height:'100%',width:'100%'}}>
    
       <Container fluid className='m-0 shadow-lg h-100' style={{width:'100%'}}>
        <Row className=' bg-alert' style={{height:'100%'}}>
      
           <Col lg={12} className="">
           <RecoilRoot>
           {menu==0?<BasicDetails changemenu={setMenu}></BasicDetails>:menu==1?<WorkExperience changemenu={setMenu}></WorkExperience>:menu==2?<Education changemenu={setMenu}></Education>:menu==3?<ProjectPage  changemenu={setMenu}></ProjectPage>:menu==4?<SkillPage changemenu={setMenu}></SkillPage>:<OutputPage></OutputPage>}
           </RecoilRoot>
           </Col>
        </Row>
       </Container>

       
       </div>
    )
}



export default DetailsPage;
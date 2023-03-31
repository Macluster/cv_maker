
import { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import bg2 from '../../../assets/bg2.png';



import {projectAtom} from '../../state/Atoms.js'
import {
  
    useRecoilState,
    
  } from 'recoil';
function ProjectPage(props) {

    const [popUpflag, setPopUpflag] = useState(false);

    const [peojectData,setprojectdata]=useRecoilState(projectAtom)
    const [data, setData] = useState([
        { projectName:"Notes App",projectTechnology:"flutter",projectDescription:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",startDate:"",endDate:"" },
        { projectName:"Notes App",projectTechnology:"flutter",projectDescription:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",startDate:"",endDate:""}

    ])
    return (
        <div className="d-flex flex-column align-items-center justify-content-space-around h-100 w-100">
            
            <img src={bg2} className='position-absolute h-100 w-100 ' style={{zIndex:0}}></img>
            <div className='d-flex flex-column align-items-center'>
            <div style={{height:50}}></div>
            <h2 className='text-40 m-10 color-red' style={{zindex:10,color:'white',position:'relative'}}>Projects</h2>
            <div style={{ height: 50 }}></div>
            <h3 className='align-self-start p-10' style={{zindex:10,color:'white',position:'relative'}} >My Projects</h3>



            <div style={{ height: 300, overflow: 'scroll', width: '100%' }}>
                {data.map((e) => (<ProjectDataCard data={e}></ProjectDataCard>))}

           
           
            </div>
            <div style={{height:30}}></div>

            <div  style={{ width: '90%', display: 'flex', zIndex:4,flexDirection: 'row', alignItems: 'center', border: '1px solid black', padding: 10, justifyContent: 'center',backgroundColor:'rgba(100,100,100,0.5)' }}>
                <h2 className='text-25' >Add Experience</h2>
                <div style={{ width: 10 }}></div>
                <img src="https://cdn-icons-png.flaticon.com/128/9572/9572704.png" height={30} width={30} onClick={() => { popUpflag == true ? setPopUpflag(false) : setPopUpflag(true) }}></img>

            </div>
            </div>
            <div style={{height:30}}></div>
            <Button  style={{justifySelf:'flex-end',zIndex:5}} onClick={()=>{props.changemenu(4); setprojectdata(data)}}>Next</Button>

          




            {popUpflag == true ? <ProjectCard function={setPopUpflag} addData={setData} datas={data}></ProjectCard> : <div style={{}}></div>}



        </div>

    );
}

function ProjectCard(props) {


    const [projectName, setprojectName] = useState("");
    const [projectTechnology, setprojectTechnology] = useState("");
    const [projectDescription, setprojectDescription] = useState("");
    const [startdate, setstartDate] = useState("");
    const [enddate, setendDate] = useState("");


    function set() {

        props.datas.push({projectName:projectName,projectTechnology:projectTechnology,projectDescription:projectDescription,startDate:startdate,endDate:enddate});
        props.addData(props.datas)
        props.function(false)
    }




    return (
        <div className='d-flex flex-row justify-content-center align-items-center bg-dark ' style={{ height: '100%',zIndex:5 ,width: '100%', position: 'absolute', backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
           
           <Container className=' d-flex justify-content-center align-items-center'>
            <Row lg={12} >
                <Col lg={12} className="d-flex flex-row justify-content-center align-items-center " >
            <div style= {{padding:40}} className="h-auto w-auto d-flex flex-column align-items-center p-40 bg-primary">
                <h3 style={{ margin: 0, textAlign: 'end', width: '100%' }} onClick={() => { props.function(false) }}>X </h3>
                <h2> Add Project</h2>
                <input type="text" placeholder="Project Name" onChange={(e) => { setprojectName(e.target.value) }} />
                <div style={{height:30}}></div>
                <input type="text" placeholder="Project Technology " onChange={(e) => { setprojectTechnology(e.target.value) }} />
                <div style={{height:30}}></div>
                <input type="text" placeholder="Project Description" onChange={(e) => { setprojectDescription(e.target.value) }} />
                <div style={{height:30}}></div>
                <input type="text" placeholder="Start Date" onChange={(e) => { setstartDate(e.target.value) }} />
                <div style={{height:30}}></div>
                <input type="text" placeholder="End date" onChange={(e) => { setendDate(e.target.value) }} />
                <div style={{height:30}}></div>
                <button onClick={() => { set() }}>Submit</button>


            </div>
            </Col>
            </Row>
            </Container>
        </div>
    );
}

function ProjectDataCard(props) {
    //
    //'https://cdn-icons-png.flaticon.com/128/565/565491.png
    return (
        <Card className='shadow-sm m-2 ' style={{ height: 'auto' }}>
            <Card.Body>
                <Container>
                <Row className='d-flex flex-row justify-content-start'>
                    <div style={{ display: 'flex', flexDirection: 'row', }}>

                        <h5>{props.data.projectName}</h5>

                        <div style={{ width: 50 }}></div>
                        <img src="https://cdn-icons-png.flaticon.com/128/2355/2355330.png" height='20px' width='20px'></img>
                        <div style={{ width: 20 }}></div>
                        <img src="https://cdn-icons-png.flaticon.com/128/565/565491.png" height='20px' width='20px'></img>

                    </div>
                </Row>
                <Row>
                    <h2></h2>
                </Row>
                <Row >
                    <Col ><div style={{display:'flex',flexDirection:'row',margin:5}}><h6 style={{fontSize:15}} className='fw-bold '>Project Technology: </h6><h6 style={{fontSize:15}}>{props.data.projectTechnology}</h6> </div></Col>
                    <Col ><div style={{display:'flex',flexDirection:'row',width:300,margin:5}}><h6 style={{fontSize:15,width:100}} className='fw-bold'>Project Description: </h6><h6 style={{fontSize:15,height:30,overflow:'scroll'}}>{props.data.projectDescription}</h6> </div></Col>
                    <Col ><div style={{display:'flex',flexDirection:'row',margin:5}}><h6 style={{fontSize:15}} className='fw-bold'>Start Date: </h6><h6 style={{fontSize:15}}>{props.data.startDate}</h6> </div></Col>
                    <Col ><div style={{display:'flex',flexDirection:'row',margin:5}}><h6 style={{fontSize:15}} className='fw-bold'>End Date: </h6><h6 style={{fontSize:15}}>{props.data.endDate}</h6> </div></Col>

                </Row>
                
                </Container>
            </Card.Body>

        </Card>
    )
}

export default ProjectPage;
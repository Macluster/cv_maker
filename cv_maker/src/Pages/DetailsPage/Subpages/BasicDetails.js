

import { Button, Col, Container, Row } from 'react-bootstrap';
import bg1 from '../../../assets/bg1.png'

import {basicDetailsAtom} from '../../state/Atoms.js'
import {
  
    useRecoilState,
    
  } from 'recoil';
import { useState } from 'react';
function BasicDetails(props)
{


    const [BasicDetails, setBasicDetails] = useRecoilState(basicDetailsAtom);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [adress,setAdress]=useState("");
    return (

        <Container fluid className='h-100 w-100 '>
       <Row lg={12} className='d-flex flex-row align-items-center h-100'>
        <Col lg={5}>
          <img src={bg1} style={{height:'100%', width:'100%'}}></img>
        </Col>
        <Col>
        <div className="d-flex flex-column align-items-center justify-content-space-around h-100 w-100">

            <div className='d-flex flex-column'>
            <h2>Basic Details</h2>
            <div style={{height:50}}></div>
            <input type="text" id="form12" class="form-control" onChange={(e)=>{setName(e.target.value)}} placeholder="Full Name"/>
            <div style={{height:30}}></div>
            <input type="text"  id="form12" class="form-control" onChange={(e)=>{setEmail(e.target.value)}}   placeholder="Email"/>
            <div style={{height:30}}></div>
            <input type="text"  id="form12" class="form-control" onChange={(e)=>{setPhone(e.target.value)}}   placeholder="Phone Number"/>
            <div style={{height:30}}></div>
            <input type="text"  id="form12" class="form-control" onChange={(e)=>{setAdress(e.target.value)}}   placeholder="Adress Line1"/>
            <div style={{height:30}}></div>
            <input type="text"  id="form12" class="form-control"  onChange={(e)=>{setName(e.target.value)}}  placeholder="Adress Line2"/>
            
            </div>
            <div style={{height:30}}></div>
            <Button onClick={()=>{props.changemenu(1); setBasicDetails({name:name,email:email,phone:phone,adress:adress})}}>Next</Button>
          
        </div>
        </Col>
        </Row>
        
        </Container>
    );
}

export default BasicDetails;
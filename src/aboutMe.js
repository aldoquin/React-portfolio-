import React from 'react'
import {Row,Col} from 'react-bootstrap'
import img1 from '../src/pictures/proPic.jpg'


export default function aboutMe() {
  return (
    <div style={{background:"#0E1D34"}}>
      <Row>
          <Col><img style={{height:'90%',width:'50%',marginLeft:'auto',marginRight:'auto',display:'block',borderRadius:'100%',borderStyle:'solid',borderColor:'white',marginTop:'2%'}}src={img1} alt='school '></img></Col>
        <Col><p className="AboutMeSec" style={{textAlign:"center",paddingTop:'10%',paddingRight:'5%',paddingBottom:'2%',color:'white'}}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> <p style={{textAlign:'center',color:'white'}}>ABOUT ME</p></Col>
      </Row>
    </div>
  )
}

import React from 'react'
import { Row,Col,Card,Button } from 'react-bootstrap'
import Blogpic from "../src/pictures/blog.jpg"

export default function projectSection() {
  return (
    <div>
      <Row style={{textAlign:'center',background:'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(138,201,233,1) 100%, rgba(0,212,255,1) 100%)',color:"white"}}> <h1>PROJECTS</h1></Row>
      <Row style ={{padding:"2%",background:'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(138,201,233,1) 100%, rgba(0,212,255,1) 100%)'}}>
       <Col ><Card  style={{ width: '18rem',marginLeft:'auto',marginRight:'auto',display:'block' }}>
  <Card.Img variant="top" src={Blogpic}/>
  <Card.Body>
    <Card.Title style={{textAlign:'center'}} >Blog Post Website</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button style={{marginLeft:'auto',marginRight:'auto',display:'block'}} variant="primary">launch</Button>
  </Card.Body>
</Card></Col>
<Col><Card style={{ width: '18rem',marginLeft:'auto',marginRight:'auto',display:'block' }}>
  <Card.Img variant="top" src={require('../src/pictures/notetaker.jpg').default} />
  <Card.Body>
    <Card.Title style={{textAlign:'center'}} > Notetaker</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button style={{marginLeft:'auto',marginRight:'auto',display:'block'}} variant="primary">launch</Button>
  </Card.Body>
</Card></Col>
<Col><Card style={{width: '18rem',marginLeft:'auto',marginRight:'auto',display:'block'  }}>
  <Card.Img variant="top" src={require('../src/pictures/passwordgen.jpg').default}  />
  <Card.Body>
    <Card.Title style={{textAlign:'center'}}> Password Generator </Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button style={{marginLeft:'auto',marginRight:'auto',display:'block'}} variant="primary">launch</Button>
  </Card.Body>
</Card></Col>
      </Row>
      <Row style ={{padding:"2%",background:'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(138,201,233,1) 100%, rgba(0,212,255,1) 100%)'}}>
       <Col><Card style={{width: '18rem',marginLeft:'auto',marginRight:'auto',display:'block' }}>
  <Card.Img variant="top" style={{height:'195px',width:'100%'}} src={require('../src/pictures/weatherapp.jpg').default} />
  <Card.Body>
    <Card.Title style={{textAlign:'center'}}> Weather App</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button style={{marginLeft:'auto',marginRight:'auto',display:'block'}} variant="primary">launch</Button>
  </Card.Body>
</Card></Col>
<Col><Card style={{width: '18rem',marginLeft:'auto',marginRight:'auto',display:'block'  }}>
  <Card.Img variant="top" style={{height:'195px',width:'100%'}} src={require('../src/pictures/quiz.jpg').default} />
  <Card.Body>
    <Card.Title style={{textAlign:'center'}}>Quiz Taker Game</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button style={{marginLeft:'auto',marginRight:'auto',display:'block'}} variant="primary">launch</Button>
  </Card.Body>
</Card></Col>
<Col ><Card style={{width: '18rem',marginLeft:'auto',marginRight:'auto',display:'block'  }}>
  <Card.Img variant="top" style={{height:'195px',width:'100%'}}src={require('../src/pictures/project-2.jpg').default} />
  <Card.Body>
    <Card.Title style={{textAlign:'center'}}>Team Portfolio</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button style={{marginLeft:'auto',marginRight:'auto',display:'block'}} variant="primary">launch</Button>
  </Card.Body>
</Card></Col>
      </Row> 
    </div>
  )
}

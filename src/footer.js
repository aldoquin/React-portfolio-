import React from 'react'
import {Card} from "react-bootstrap"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import  Instagram  from '@mui/icons-material/Instagram';
export default function footer() {
  return (
    <div>
    <Card className="text-center" style={{background:"#FFF2D7"}}>
    <Card.Body>
      <Card.Title><h1>ALDO QUINTERO</h1></Card.Title>
      <Card.Text>
        <div style= {{dipslay:'flex'}}>
          <a href="https://www.instagram.com/aldo_quintero/?hl=en" ><Instagram style={{fontSize:"50"}} /> </a>
           <a href="https://github.com/aldoquin?tab=repositories" ><GitHubIcon style={{fontSize:"50"}}/></a>
         <a href="https://www.linkedin.com/in/aldo-quintero-11990620a/"> <LinkedIn style={{fontSize:"50"}}/> </a>
        </div>
      </Card.Text>
    </Card.Body>
    <Card.Footer className="text-muted"></Card.Footer>
  </Card>
    </div>
  )
}

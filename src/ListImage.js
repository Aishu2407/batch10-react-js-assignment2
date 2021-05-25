import React,{useState} from 'react';
//import {Image,Container,Row,Col} from "react-bootstrap";
import {ListGroup} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

 function ListImage() {
  const [img] = useState([
  {image:"person.png"}
  ]);
    return (
        <div style={{width:"60%" ,  height:'500' ,justifyContent:'center',alignItems:'center',textAlign:'right'}}>
<ListGroup>
  <ListGroup.Item variant="secondary"  src={img.image}> <img src={{}}></img><h2> James Stuart</h2> <br/>Training Manager</ListGroup.Item>
  <ListGroup.Item variant="success"><h2>Isaac Pullman</h2> <br/>Creative Director</ListGroup.Item>
  <ListGroup.Item variant="danger"><h2>Sarah Oscar</h2> <br/> Sales Rep</ListGroup.Item>
  <ListGroup.Item variant="warning"><h2>Srinivas Tamada</h2> <br/> Technical Dept</ListGroup.Item>

</ListGroup>
        </div>
    )
}
export default React.memo(ListImage);
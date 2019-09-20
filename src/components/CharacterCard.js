import React, {useState, useEffect} from "react";
import {Col, Card, CardBody, CardTitle, CardText, CardImg} from "reactstrap"




export default function CharacterCard(props) {

  

  return (
    <Col md="4" key={props.id}>
      <Card>
        <CardBody>
          <CardImg src={props.image} />
          <CardTitle tag="h2">{props.name}</CardTitle>
          
          <CardText className="text-left">Species: {props.species}</CardText>
          <CardText className="text-left">Gender: {props.gender}</CardText>
          <CardText className="text-left">Status: {props.status}</CardText>
        </CardBody>
      </Card>
    </Col>
  )
}

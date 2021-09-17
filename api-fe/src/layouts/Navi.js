import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
          <Container>
            <Menu.Item as={NavLink} to="/"
            name="Öğrenci Listesi" 
            />
            <Menu.Item as={NavLink} to="/add"
            name="Öğrenci ekle"
            />
            <Menu.Item as={NavLink} to="/update"
            name="Öğrenci güncelle" 
            />
            <Menu.Item as={NavLink} to="/find"
            name="Öğrenci ara" 
            />

          </Container>
        
      </Menu>
    </div>
  );
}

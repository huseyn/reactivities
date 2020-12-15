import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

const Navbar = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
          <img src="/assets/logo.png" alt="logo" />
          Reactivities
        </Menu.Item>
        <Menu.Item name="messages" />
        <Menu.Item>
          <Button positive content="Create Activity" />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Navbar;

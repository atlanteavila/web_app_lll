import React, { Component } from "react";
// import Nav from "../Nav";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    // UncontrolledDropdown,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem, 
} from 'reactstrap';
import Logo from "../../images/logo.jpg";
import "./Header.css"
class Header extends Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      render() {
        return (
          <div>
            <Navbar light expand="md">
              <NavbarBrand href="/"><img src={Logo} className="logo" alt="Lainie's Learning Lane - Learn from the core." /></NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Dashboard</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Flashcards</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Books</NavLink>
                    </NavItem>
                        <NavItem>
                        <NavLink href="/">Games</NavLink>
                    </NavItem>
                        <NavItem>
                        <NavLink href="/">Support</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/celebrity-jokes">Celebrity Jokes</NavLink>
                    </NavItem>
                  {/* <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Options
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Option 1
                      </DropdownItem>
                      <DropdownItem>
                        Option 2
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Reset
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  */}
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
      }
}

export default Header;
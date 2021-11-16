import React, { useState } from 'react';
import {
    Nav,
    NavItem,
    NavLink,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Container
} from 'reactstrap';

function AppNavbar() {
    const [isOpen, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!isOpen);
    }

    return (<div>
        <Navbar
            color="primary"
            dark expand="sm" className="mb-5"
        >
            <NavbarBrand
                className="me-auto"
                href="/"
            >
                ShoppingList
            </NavbarBrand>
            <NavbarToggler
                className="me-2"
                onClick={toggle}
            />

            <Collapse
                isOpen={isOpen}
                navbar
            >
                <Nav navbar className="ms-auto">
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">
                            GitHub
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    </div>
    )
}

export default AppNavbar;
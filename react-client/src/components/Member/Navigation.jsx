import React from 'react';
// import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';


function Navigation() {
    const selections = (eventKey) => alert(`selected ${eventKey}`);

    return (

        <NavDropdown color="indigo" title="Nav" id="nav-dropdown" class="navbar-nav mr-auto" sticky='top'>
            <NavDropdown.Item class="fas fa-user" eventKey="4.1"  >Member Profile</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">About</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Logout</NavDropdown.Item>
            <NavDropdown.Divider />
        </NavDropdown>
    );
}

// render(<Navigation />);
// function HomeButton() {
// 	let history = useHistory();

// 	function handleClick() {
// 		history.push("/Member");
// 	}

// 	return (
// 		<button type="button" onClick={handleClick}>
// 			Member Profile
// 		</button>
// 	);
// }

export default Navigation;
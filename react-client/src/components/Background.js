import React from "react";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";

class Background extends React.Component {
    render() {
        return (
            <MDBContainer fluid>
                <img
                    src="https://babbletop.com/wp-content/uploads/2017/08/organize-bookshelf-1920x1080.jpg"
                    alt=""
                />
            </MDBContainer>
        );
    }
}

export default Background;
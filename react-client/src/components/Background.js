import React from "react";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";

class Background extends React.Component {
    render() {
        return (
            <MDBContainer className="mt-5">

                <MDBRow className="mt-4">
                    <MDBCol md="6">
                        <MDBView hover zoom>
                            <img
                                src="https://babbletop.com/wp-content/uploads/2017/08/organize-bookshelf-1920x1080.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask className="flex-center">
                                <p className="white-text">SoulReads</p>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>
        );
    }
}

export default Background;
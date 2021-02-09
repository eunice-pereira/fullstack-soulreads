import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBCol, MDBRow, MDBModalHeader, MDBModalFooter, MDBIcon } from
    'mdbreact';

class AddModal extends Component {
    state = {
        modal6: false
    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }

    render() {
        return (
            <MDBContainer>
                <MDBBtn onClick={this.toggle(6)}>Add Book</MDBBtn>
                <MDBModal modalStyle="danger" className="text-white" size="sm" side position="top-right" backdrop={false} isOpen={this.state.modal6}
                    toggle={this.toggle(6)}>
                    <MDBModalHeader className="text-center" titleClass="w-100" tag="p" toggle={this.toggle(6)}>
                        Add Book?
          </MDBModalHeader>
                    <MDBModalBody className="text-center">
                        <MDBIcon icon="check" size="4x" className="animated rotateIn" />
                    </MDBModalBody>
                    <MDBModalFooter className="justify-content-center">
                        <MDBBtn color="deep-purple" onClick={this.toggle(6)}>Yes</MDBBtn>
                        <MDBBtn color="deep-purple" outline onClick={this.toggle(6)}>No</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export default AddModal;
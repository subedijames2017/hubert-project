import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

export default class TravellRoute extends Component {
  render() {
    return (
      <div>
        <CRow className="justify-content-center">
          <CCol md="12">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Add Route</h1>
                    <p className="text-muted">Add single route</p>
                    <CInputGroup className="mb-3">
                      <CInput
                        type="text"
                        placeholder="Route Source"
                        autoComplete="rsource"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInput
                        type="text"
                        placeholder="Route Destination"
                        autoComplete="rdestination"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4">
                          Add
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </div>
    );
  }
}

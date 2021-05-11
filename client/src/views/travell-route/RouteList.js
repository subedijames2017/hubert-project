import React, { useState } from "react";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CListGroup,
  CListGroupItem,
  CRow,
  CTabContent,
  CTabPane,
} from "@coreui/react";
import { DocsLink } from "src/reusable";

const ListGroups = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <CRow className="justify-content-center">
        <CCol md="12">
          <CCard>
            <CCardHeader>
              List group
              <DocsLink name="CListGroup" />
            </CCardHeader>
            <CCardBody>
              <CListGroup>
                <CListGroupItem>Cras justo odio</CListGroupItem>
                <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                <CListGroupItem>Morbi leo risus</CListGroupItem>
                <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
                <CListGroupItem>Vestibulum at eros</CListGroupItem>
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default ListGroups;

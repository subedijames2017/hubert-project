import React, { useState } from "react";
import { CCol, CForm, CInput, CInputGroup, CRow } from "@coreui/react";

function SearchFeature(props) {
  const [SearchTerms, setSearchTerms] = useState("");

  const onChangeSearch = (event) => {
    setSearchTerms(event.currentTarget.value);

    props.refreshFunction(event.currentTarget.value);
  };

  return (
    <CRow className="justify-content-left">
      <CCol md="12">
        <CForm>
          <CInputGroup className="mb-3">
            <CInput
              type="text"
              value={SearchTerms}
              placeholder="Search By Typing..."
              onChange={onChangeSearch}
            />
          </CInputGroup>
        </CForm>
      </CCol>
    </CRow>
  );
}

export default SearchFeature;

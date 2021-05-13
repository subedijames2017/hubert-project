import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import Axios from "axios";
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
  CTextarea,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { Typography, Button, Form, message, Input, Icon } from "antd";
import FileUpload from "../../reusable/FileUpload";

export default function Product() {
  const history = useHistory();
  const [TitleValue, setTitleValue] = useState("");
  const [DescriptionValue, setDescriptionValue] = useState("");
  const [PriceValue, setPriceValue] = useState();

  const [Images, setImages] = useState([]);
  const onTitleChange = (event) => {
    setTitleValue(event.currentTarget.value);
  };

  const onDescriptionChange = (event) => {
    setDescriptionValue(event.currentTarget.value);
  };

  const onPriceChange = (event) => {
    setPriceValue(event.currentTarget.value);
  };

  const updateImages = (newImages) => {
    setImages(newImages);
    console.log(
      "🚀 ~ file: Product.js ~ line 50 ~ updateImages ~ newImages",
      Images
    );
  };
  const onSubmit = (event) => {
    event.preventDefault();

    if (!TitleValue || !DescriptionValue || !PriceValue || Images.length <= 0) {
      return alert("fill all the fields first!");
    }

    const variables = {
      writer: "james subedi",
      title: TitleValue,
      description: DescriptionValue,
      price: PriceValue,
      images: Images
    };

    Axios.post("/api/product/uploadProduct", variables).then((response) => {
      if (response.data.success) {
        alert("Product Successfully Uploaded");
        history.push({
          pathname: "/"
        });
      } else {
        alert("Failed to upload Product");
      }
    });
  };
  return (
    <div>
      <CRow className="justify-content-center">
        <CCol md="12">
          <CCardGroup>
            <CCard className="p-4">
              <CCardBody>
                <CForm>
                  <CInputGroup className="mb-3">
                    {/* DropZone */}
                    <FileUpload refreshFunction={updateImages} />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInput
                      type="text"
                      placeholder="Title"
                      autoComplete="rsource"
                      onChange={onTitleChange}
                      value={TitleValue}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CTextarea
                      name="textarea-input"
                      id="textarea-input"
                      rows="6"
                      placeholder="Description"
                      onChange={onDescriptionChange}
                      value={DescriptionValue}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInput
                      type="number"
                      placeholder="Price(Rs.)"
                      autoComplete="rdestination"
                      onChange={onPriceChange}
                      value={PriceValue}
                    />
                  </CInputGroup>
                  <CRow>
                    <CCol xs="6">
                      <CButton
                        color="primary"
                        className="px-4"
                        onClick={onSubmit}
                      >
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

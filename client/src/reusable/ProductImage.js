import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CCarousel,
  CCarouselCaption,
  CCarouselControl,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem
} from "@coreui/react";

function ProductImage(props) {
  const [Images, setImages] = useState([]);
  const [activeIndex] = useState(1);

  const slides = [
    "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1607923e7e2%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1607923e7e2%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9296875%22%20y%3D%22217.75625%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
  ];
  let carouselItems = [];
  useEffect(() => {
    if (props.detail.images && props.detail.images.length > 0) {
      let images = [];

      props.detail.images &&
        props.detail.images.map((item) => {
          images.push({
            original: `http://localhost:5000/${item}`,
            thumbnail: `http://localhost:5000/${item}`
          });
        });
      setImages(images);
    }
  }, [props.detail]);
  if (Images.length > 0) {
    Images.forEach((element) => {
      carouselItems.push(
        <CCarouselItem>
          <img className="d-block w-100" src={element.original} />
        </CCarouselItem>
      );
    });
  }
  console.log(
    "🚀 ~ file: ProductImage.js ~ line 73 ~ ProductImage ~ props.detail",
    props.detail
  );

  return (
    <div>
      <CRow>
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardBody>
              <CCarousel animate>
                <CCarouselIndicators />
                <CCarouselInner>{carouselItems}</CCarouselInner>
                <CCarouselControl direction="prev" />
                <CCarouselControl direction="next" />
              </CCarousel>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <p>
            <strong>Title:</strong> {props.detail.title}
          </p>
          <p>{props.detail.description}</p>
          <p>Rs.{props.detail.price}</p>
        </CCol>
      </CRow>
    </div>
  );
}

export default ProductImage;

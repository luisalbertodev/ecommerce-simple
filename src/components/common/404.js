import { Row, Col } from "react-flexbox-grid";

export const Page404 = () => {
  return (
    <Row center="xs" middle="xs" className="min-vh-100">
      <Col
        md={12}
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="200"
        data-aos-offset="0"
      >
        <img
          src="https://www.pngkey.com/png/detail/147-1473883_404-error-404-not-found-png.png"
          className="m-default"
          alt="page-no-found"
        />
      </Col>
    </Row>
  );
};

import { Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import Logo from "assets/images/logo.png";

const WrapperLogo = styled(Col)`
  img {
    width: 132px;
    height: 132px;
    display: flex;
    object-fit: contain;
    border-radius: 100px;
    border: 3px solid #6161b3;
  }
`;

export const LogoCircle = () => {
  return (
    <Row center="xs" className="ma4">
      <WrapperLogo md={12}>
        <img src={Logo} alt="logo" className="m-default" />
      </WrapperLogo>
    </Row>
  );
};

/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
import { Col, Row } from "react-flexbox-grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { formatterPrice } from "helpers";

export default function CustomCard({
  image = "",
  title = "",
  description = "",
  price = 0,
}) {
  return (
    <Col xs={12} md={4} lg={3} className="pa3">
      <Row>
        <Col md={12}>
          <Card>
            <CardActionArea>
              <CardMedia
                image={image}
                style={{ height: 200, backgroundSize: "contain" }}
              />
              <CardContent>
                <Row>
                  <Col md={6}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {title}
                    </Typography>
                  </Col>
                  <Col md={6}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="p"
                      className="purple"
                    >
                      {formatterPrice.format(price)}
                    </Typography>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {description}
                    </Typography>
                  </Col>
                </Row>
              </CardContent>
            </CardActionArea>
          </Card>
        </Col>
      </Row>
    </Col>
  );
}

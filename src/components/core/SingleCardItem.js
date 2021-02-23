/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
import { useState, useEffect } from "react";
import { Col, Row } from "react-flexbox-grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useCartContext } from "context/CartContext";
import { formatterPrice } from "helpers";

export default function CustomCard({
  id,
  image = "",
  title = "",
  description = "",
  price = 0,
  addCart,
  removeCart,
}) {
  const [product, setProduct] = useState(undefined);
  const gCartContext = useCartContext();

  useEffect(() => {
    const data = gCartContext.products.filter((el) => el.ID == id)[0];
    setProduct(data);
  }, [gCartContext.products]);

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
              <CardActions>
                {!product && (
                  <Button size="small" color="primary" onClick={addCart}>
                    Agregar al carrito
                  </Button>
                )}
                <Button size="small" color="secondary" onClick={removeCart}>
                  Quitar del carrito
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Col>
      </Row>
    </Col>
  );
}

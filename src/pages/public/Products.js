/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { AppBar } from "components/common";
import { Link } from "react-router-dom";
import SingleCardItem from "components/core/SingleCardItem";
import { useGlobalContext } from "context/GlobalContext";
import { useCartContext } from "context/CartContext";
import { fetchBackend } from "helpers";

const Products = () => {
  const [currentData, setData] = useState([]);
  const gContext = useGlobalContext();
  const gCartContext = useCartContext();

  useEffect(() => {
    const getInitialProducts = async () => {
      const { error, response } = await fetchBackend({
        url: "productos/reloj/1",
      });

      if (!error) {
        setData(response.data?.products || []);
      } else {
        gContext.toggleAlert("Hubo un error al obtener los productos");
      }
    };

    getInitialProducts();
  }, []);

  const renderCard = (item, index) => {
    return (
      <SingleCardItem
        key={item.SKU}
        id={item.SKU}
        index={index}
        image={item.IMAGE}
        title={item.NAME}
        description={item.DESCRIPTION}
        price={item.PRICE}
        addCart={() => gCartContext.addProduct(item)}
        removeCart={() => gCartContext.removeProduct(item)}
      />
    );
  };

  return (
    <>
      <AppBar />
      <Grid fluid>
        <Row center="xs">
          <Col md={12}>
            <Link to="/carrito">
              <img
                src="https://images.vexels.com/media/users/3/200060/isolated/preview/e39eb7217c7b5157d2c9154564d76598-icono-de-carrito-de-compras-rosa-by-vexels.png"
                alt="cart"
                style={{
                  width: "148px",
                  margin: "1em auto",
                  border: "1px solid gray",
                }}
              />
            </Link>
          </Col>
          <p>
            Tienes {gCartContext.products.length}&nbsp; productos en el carrito
          </p>
        </Row>
        <Row>{currentData.map((item, i) => renderCard(item, i))}</Row>
      </Grid>
    </>
  );
};

export default Products;

/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Grid, Row } from "react-flexbox-grid";
import { AppBar } from "components/common";
import SingleCardItem from "components/core/SingleCardItem";
import { useGlobalContext } from "context/GlobalContext";
import { fetchBackend } from "helpers";

const Cart = () => {
  const [currentData, setData] = useState([]);
  const gContext = useGlobalContext();

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

  const renderCard = ({ SKU, IMAGE, NAME, PRICE, DESCRIPTION }, index) => {
    return (
      <SingleCardItem
        key={SKU}
        id={SKU}
        index={index}
        image={IMAGE}
        title={NAME}
        description={DESCRIPTION}
        price={PRICE}
      />
    );
  };

  return (
    <>
      <AppBar />
      <Grid fluid>
        <Row>{currentData.map((item, i) => renderCard(item, i))}</Row>
      </Grid>
    </>
  );
};

export default Cart;

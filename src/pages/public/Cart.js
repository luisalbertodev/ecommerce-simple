/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import { Grid, Row } from "react-flexbox-grid";
import { AppBar } from "components/common";
import SingleCardItem from "components/core/SingleCardItem";
import { useCartContext } from "context/CartContext";

const Cart = () => {
  const gCartContext = useCartContext();

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
        <Row>{gCartContext.products.map((item, i) => renderCard(item, i))}</Row>
      </Grid>
    </>
  );
};

export default Cart;

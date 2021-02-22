/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Link } from "react-router-dom";
import { AppBar, LogoCircle } from "components/common";
import { useGlobalContext } from "context/GlobalContext";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import { fetchBackend } from "helpers";

const Main = () => {
  const [currentData, setData] = useState(null);
  const gContext = useGlobalContext();

  useEffect(() => {
    const getInitialProducts = async () => {
      const { error, response } = await fetchBackend({
        url: "visitor",
        method: "post",
      });

      if (!error) {
        setData(response.data || null);
      } else {
        gContext.toggleAlert("Hubo un error al obtener los productos");
      }
    };

    getInitialProducts();
  }, []);

  return (
    <>
      <AppBar />
      <Grid fluid>
        <LogoCircle />
        <Row center="xs">
          <Col md={12}>
            <Typography gutterBottom variant="h5" component="h2">
              {currentData?.welcome}
            </Typography>
          </Col>
          <Col md={12}>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/tienda"
            >
              Continuar
            </Button>
          </Col>
        </Row>
        <Row end="xs">
          <Col md={12}>
            <Paper className="pa2">
              <Typography gutterBottom variant="body2" component="p">
                Versión: &nbsp;{currentData?.version}
              </Typography>
            </Paper>
          </Col>
        </Row>
      </Grid>
    </>
  );
};

export default Main;

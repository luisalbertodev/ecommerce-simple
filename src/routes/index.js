import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AOS from "aos";
import Main from "pages/public/Main";
import Products from "pages/public/Products";
import Cart from "pages/public/Cart";
import { Page404 } from "components/common";
import { Snackbar } from "components/core";

import "aos/dist/aos.css";

const Index = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/tienda" component={Products} />
          <Route exact path="/carrito" component={Cart} />
          <Route path="*" component={Page404} />
        </Switch>
      </Router>
      <Snackbar />
    </div>
  );
};

export default Index;

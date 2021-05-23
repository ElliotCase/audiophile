import React, { useState } from "react";
import Header from "../products/Headphones/sub-components/Header";
import Carts from "../home/dialogs/Carts";
import Menu from "../home/dialogs/Menu";
import Summary from "./Summary";
import Footer from "../home/sub-components/Footer";
import {
  createStyles,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
// import { brown } from "@material-ui/core/colors";
import { ThemeProvider } from "@material-ui/styles";
import { useHistory } from "react-router";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import shape from "../../assets/Shape.svg";
import Modal from "./Modal";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      background: 500,
    },
    margin: {
      margin: theme.spacing(0),
    },
  })
);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#d87d4a",
    },
  },
});

function Checkout() {
  const classes = useStyles();
  const history = useHistory();

  const [users, setUsers] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    paymentMethod: "eMoney",
    eMoneyNumber: "",
    eMoneyPin: "",
  });

  const {
    name,
    email,
    phone,
    address,
    zipCode,
    city,
    country,
    paymentMethod,
    eMoneyNumber,
    eMoneyPin,
  } = users;
  const handleChange = (name) => (e) => {
    setUsers({ ...users, [name]: e.target.value });
  };

  return (
    <div className="checkout">
      <Header />
      <Carts />
      <Menu />
      <div className="checkout_home">
        <Modal />
        <div className="container">
          <div className="max-width">
            <p onClick={() => history.goBack()} className="goBack">
              Go Back
            </p>
          </div>
          <div className="flex-item">
            <div className="allDetails">
              <div className="info">
                <h2>CHECKOUT</h2>
                <h6>BILLING DETAILS</h6>
                <ThemeProvider theme={theme}>
                  <div className="billings flex">
                    <TextField
                      className={`${classes} a`}
                      label="Name"
                      variant="outlined"
                      id="mui-theme-provider-outlined-input"
                      onChange={handleChange("name")}
                      value={name}
                      type="text"
                    />
                    <TextField
                      className={`${classes} b`}
                      label="Email Address"
                      variant="outlined"
                      id="mui-theme-provider-outlined-input"
                      onChange={handleChange("email")}
                      value={email}
                      type="email"
                    />

                    <TextField
                      className={`${classes} c`}
                      label="Phone Number"
                      variant="outlined"
                      id="mui-theme-provider-outlined-input"
                      onChange={handleChange("phone")}
                      value={phone}
                      type="text"
                    />
                  </div>
                  <h6>SHIPPING INFO</h6>
                  <div className="shipping">
                    <TextField
                      className={`${classes} a`}
                      label="Your Address"
                      variant="outlined"
                      id="mui-theme-provider-outlined-input"
                      onChange={handleChange("address")}
                      value={address}
                      type="text"
                    />
                    <TextField
                      className={`${classes} b`}
                      label="Zip Code"
                      variant="outlined"
                      id="mui-theme-provider-outlined-input"
                      onChange={handleChange("zipCode")}
                      value={zipCode}
                      type="text "
                    />
                    <TextField
                      className={`${classes} c`}
                      label="City"
                      variant="outlined"
                      id="mui-theme-provider-outlined-input"
                      onChange={handleChange("city")}
                      value={city}
                      type="text"
                    />
                    <TextField
                      className={`${classes} d`}
                      label="Country"
                      variant="outlined"
                      id="mui-theme-provider-outlined-input"
                      onChange={handleChange("country")}
                      value={country}
                      type="text"
                    />
                  </div>
                  <h6>PAYMENT DETAILS</h6>
                  <div className="payment">
                    <FormControl component="fieldset">
                      <h5>Payment Method</h5>
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="top"
                        onChange={handleChange("paymentMethod")}
                      >
                        <FormControlLabel
                          value="eMoney"
                          control={<Radio color="primary" />}
                          label="E-money"
                          className={`${
                            paymentMethod === "eMoney"
                              ? "selected"
                              : "unselected"
                          }`}
                        />
                        <FormControlLabel
                          value="cash"
                          control={<Radio color="primary" />}
                          label="Cash on Delivery"
                          className={`${
                            paymentMethod === "cash" ? "selected" : "unselected"
                          }`}
                        />
                      </RadioGroup>
                    </FormControl>
                    {paymentMethod === "eMoney" ? (
                      <div className="eMoney">
                        <TextField
                          className={`${classes}`}
                          label="e-Money Number"
                          variant="outlined"
                          id="mui-theme-provider-outlined-input"
                          onChange={handleChange("eMoneyNumber")}
                          value={eMoneyNumber}
                          type="text"
                        />
                        <TextField
                          className={`${classes}`}
                          label="e-Money PIN"
                          variant="outlined"
                          id="mui-theme-provider-outlined-input"
                          onChange={handleChange("eMoneyPin")}
                          value={eMoneyPin}
                          type="password"
                        />
                      </div>
                    ) : (
                      <div className="cash">
                        <img src={shape} alt="" />
                        <div>
                          <p>
                            The ‘Cash on Delivery’ option enables you to pay in
                            cash when our delivery courier arrives at your
                            residence. Just make sure your address is correct so
                            that your order will not be cancelled.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </ThemeProvider>
              </div>
            </div>
            <Summary />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;

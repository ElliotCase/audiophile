import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openOrCloseCheckoutModal } from "../../app-redux/features/Dialogs";
import ovalSvg from "../../assets/Oval.svg";
import { head } from "lodash";
import { useHistory } from "react-router-dom";

function Modal() {
  const isModalOpen = useSelector((state) => state.dialogs.isCheckoutModalOpen);
  const cartsArr = useSelector((state) => state.carts.carts);
  const dispatch = useDispatch();
  const history = useHistory();

  const fetchFirstElement = () => head(cartsArr);

  const goBackHome = () => {
    dispatch(openOrCloseCheckoutModal(false));
    setTimeout(function () {
      history.push("/");
    }, 0);
  };

  const getTotal = () => {
    let total = 0;
    const priceArr = cartsArr.map(({ price, quantity }) => price * quantity);
    total = priceArr.reduce((a, b) => a + b, 0);
    return total;
  };

  return (
    <div
      onClick={() => dispatch(openOrCloseCheckoutModal(false))}
      className={`modal ${isModalOpen ? "opened" : "closed"}`}
    >
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <img src={ovalSvg} alt="" />
        <div className="h4">
          <h4>THANK YOU</h4>
          <h4>FOR YOUR ORDER</h4>
        </div>
        <p className="p">You will receive an email confirmation shortly.</p>
        <div className="grid-modal-cart">
          <div className="cart-details">
            {fetchFirstElement() ? (
              <div className="cart-detail">
                <div className="first">
                  <img src={fetchFirstElement().image} alt="" />
                  <div style={{ marginLeft: "1rem" }}>
                    <h4>{fetchFirstElement().name}</h4>
                    <p>${fetchFirstElement().price.toLocaleString()}</p>
                  </div>
                </div>
                <h6>x{fetchFirstElement().quantity}</h6>
              </div>
            ) : (
              <p>Your Cart is Empty.</p>
            )}
            <div className="second">
              <p>and {cartsArr.length - 1} other item(s)</p>
            </div>
          </div>
          <div className="grand-total">
            <h4>GRAND TOTAL</h4>
            <h5>$ {(getTotal() + 50).toLocaleString()}</h5>
          </div>
        </div>
        <button onClick={goBackHome}>BACK TO HOME</button>
      </div>
    </div>
  );
}

export default Modal;

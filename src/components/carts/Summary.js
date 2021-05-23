import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openOrCloseCheckoutModal } from "../../app-redux/features/Dialogs";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

function Summary() {
  const cartsArr = useSelector((state) => state.carts.carts);
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.dialogs.isCheckoutModalOpen);

  const getTotal = () => {
    let total = 0;
    const priceArr = cartsArr.map(({ price, quantity }) => price * quantity);
    total = priceArr.reduce((a, b) => a + b, 0);
    return total;
  };

  useEffect(() => {
    isModalOpen ? disableBodyScroll(document) : enableBodyScroll(document);
  }, [isModalOpen]);

  const openModal = () => {
    dispatch(openOrCloseCheckoutModal(true));
    window.scrollTo(0, 0);
  };

  return (
    <div className="summary">
      <h2>SUMMARY</h2>
      <div className="list-carts">
        {cartsArr.map(({ id, name, price, image, quantity }) => {
          return (
            <div className="list-cart" key={id}>
              <div className="flex">
                <img src={image} alt="" />
                <div className="middle">
                  <h4>{name}</h4>
                  <p> ${price.toLocaleString()}</p>
                </div>
              </div>
              <h6>x{quantity}</h6>
            </div>
          );
        })}
      </div>
      <div className="details">
        <div className="total same">
          <p>TOTAL</p>
          <h4>${getTotal().toLocaleString()}</h4>
        </div>
        <div className="shipping same">
          <p>SHIPPING</p>
          <h4>$50</h4>
        </div>
        <div className="vat same">
          <p>VAT (INCLUDED)</p>
          <h4>$1,079</h4>
        </div>
        <div className="grand-total same">
          <p>GRAND TOTAL</p>
          <h4>${(getTotal() + 50).toLocaleString()}</h4>
        </div>
        <button onClick={openModal} className="button">
          CONTINUE & PAY
        </button>
      </div>
    </div>
  );
}

export default Summary;

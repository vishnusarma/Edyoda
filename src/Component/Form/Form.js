import React from "react";
import style from "./Form.module.css";
import button from "../../assests/button1.svg";
import button1 from "../../assests/button2.svg";
import errorc from "../../assests/errclck.svg";
import razorpay from "../../assests/razor.svg";
import checkicon from '../../assests/Vector.svg';
import { useState } from "react";

export default function Form() {
  const brochure = [
    {
      id: 1,
      offerExpired: true,
      recommend: false,
      name: "first",
      text: "12 Months Subscription",
      total_rs: 99,
      perMonth_rs: 8
    },
    {
      id: 2,
      offerExpired: false,
      recommend: true,
      name: "second",
      text: "12 Months Subscription",
      total_rs: 179,
      perMonth_rs: 15
    },
    {
      id: 3,
      offerExpired: false,
      recommend: false,
      name: "third",
      text: "6 Months Subscription",
      total_rs: 149,
      perMonth_rs: 25
    },
    {
      id: 4,
      offerExpired: false,
      recommend: false,
      name: "four",
      text: "3 Months Subscription",
      total_rs: 99,
      perMonth_rs: 33
    }
  ];

  const [list, setList] = useState(brochure);
  const [value, setValue] = useState(149);
  function Changehandler(event, elis) {
    setValue(Math.floor(event.target.value - event.target.value * 16.7 / 100));
    list.forEach(x => {
      x.recommend = false;
    });
    elis.recommend = true;
    setList([...list]);
  }

  return (
    <div className={style.container}>
      <div className={style.head}>
        <div className={style.button}>
          <img src={button} alt="button1" />
          <span className={style.bothsame}>Sign Up</span>
        </div>

        <div className={style.button}>
          <img src={button1} alt="button2" />
          <span className={style.bothsame}>Subscribe</span>
        </div>
      </div>
      <p className={style.plan}>Select your subcription plan</p>

      {list.map((eli, ind) =>
        <div
          id={eli.name}
          className={
            eli.recommend
              ? style.recommend
              : eli.offerExpired ? style.expire : style.inputBorder
          }
        >
          <label htmlFor={eli.id}>
            <div>
              <input
                checked={eli.recommend}
                disabled={eli.offerExpired}
                onChange={event => Changehandler(event, eli)}
                id={eli.id}
                type="checkbox"
                value={eli.total_rs}
                name="priceOption"
              />{eli.recommend?(<img src={checkicon} alt='check' className={style.checkicon}/>):null}
              {!eli.recommend && eli.offerExpired ? (<div className={style.roundborder}><div className={style.dot}></div></div>) : null}
              {!eli.recommend?(<div className={style.roundborder}></div>):null}
              <span className={style.formtext}>
                {eli.text}
              </span>
            </div>
            <div className={style.totalRupees}>
              <span>
                Total ₹{eli.total_rs}
              </span>
              <span className={style.month}>
                ₹{eli.perMonth_rs}/<span className={style.mo}>mo</span>
              </span>
            </div>
          </label>
        </div>
      )}
      <div className={style.expired_flag}>
        <p>Offer expired</p>
      </div>
      <div className={style.recommend_flag}>
        <p>Recommended</p>
      </div>
      <hr className={style.horiz}></hr>
      <div className={style.subscription_Container}>
        <p className={style.subscription}>Subscription Fee</p>
        <p className={style.fee}>₹18,500</p>
      </div>
      <div className={style.newdiv}>
        <h5>Limited time offer</h5>
        <p className={style.newpara}>- ₹18,401</p>
        <p className={style.errorc}><img classname={style.errimg} src={errorc}/></p>
        <p className={style.errpara}>Offer valid till 25th March 2023</p>
      </div>
      <div className={style.total}>
        <p>
          <span style={{ fontWeight: "600",fontSize:"16px" }}>Total </span>(Incl. of 18% GST)
        </p>
        <p style={{ fontWeight: "600", fontSize: "24px" }}>
          ₹{value}
        </p>
      </div>
      <div className={style.btn}>
        <button className={style.cancel}>CANCEL</button>
        <button
          className={style.pay}
          onClick={() => {
            alert(`You have sucessfully subscribed ₹${value}`);
          }}
        >
          PROCEED TO PAY
        </button>
      </div>
      <div className={style.razorContainer}>
        <img src={razorpay} alt="razorPay" />
      </div>
    </div>
  );
}

import { initializeRazorpay } from "../../services/razorPayScript";
import React, { useState } from 'react';
import Loader from "../Loader/Loader";

export default function Checkout() {
    const [amount, setAmount] = useState("10");
    const [loading, setLoading] = React.useState(false);



    async function onSubmitHandler(e) {
        e.preventDefault();
        setLoading(true)
        console.log("submitted");
        let res = await initializeRazorpay();
        let data = await fetch(
            "http://localhost:5000/user/razorpay/initiate-transaction",
            {
                method: "POST",
                body: JSON.stringify({
                    userUniqueCode: "lfm9aniz",
                    eventName: "Hockey",
                    amount: 10,
                }),

                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            }
        ).then((data) => data.json());

        console.log(data);

        if (!res) {
            alert("eroor");
            return;
        }
        console.log(data);
        var options = {
            key: "rzp_test_6zXUmNuBDgGVcD", // Enter the Key ID generated from the Dashboard
            name: "btirt-horizons",
            currency: data.currency,
            amount: data.amount,
            order_id: data.id,
            handler: async function (response) {
                try {
                    let paymentStatus = await fetch(
                        `http://localhost:5000/user/razorpay/razor_capture/${response.razorpay_payment_id}`,
                        {
                            method: "POST",
                            body: JSON.stringify({
                                userUniqueCode: "lfm9aniz",
                                amount: data.amount,
                            }),

                            headers: {
                                "Content-type": "application/json; charset=UTF-8",
                            },
                        }
                    ).then((data) => data.json());
                    console.log(response);
                    console.log("paymentStatus", paymentStatus);
                    console.log("hey callling");
                    let makePayment = await fetch(
                        `http://localhost:5000/user/razorpay/update-transaction`,

                        {
                            method: "POST",
                            body: JSON.stringify({
                                USER: "123",
                                uniqueCode: "lfm9aniz",
                                ORDERID: data.receipt,
                                TXNAMOUNT: data.amount / 100,
                                STATUS: "TXN_SUCCESS",
                                TXNID: response.razorpay_payment_id,
                            }),

                            headers: {
                                "Content-type": "application/json; charset=UTF-8",
                            },
                        }
                    );
                    console.log("makePayment", makePayment);
                    setLoading(false)
                } catch (error) {
                    console.log(error);
                    setLoading(false)

                }
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    return (
        <div className="user_payment">
            {
                loading ? <Loader /> : <>\

                    <h3>Recharge Wallet</h3>
                    <form>
                        <div>
                            <label htmlFor="email-address">Amount</label>
                            <input
                                required
                                type="number"
                                name="number"
                                id="number"
                                autoComplete="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="text-input"
                            />
                        </div>
                    </form>

                    <div className="payment_cards">
                        <ul>
                            <li value={10} onClick={() => setAmount(10)}>
                                <span>10 </span>
                            </li>
                            <li value={50} onClick={() => setAmount(50)}>
                                <span>50 </span>
                            </li>
                            <li value={100} onClick={() => setAmount(100)}>
                                <span>100 </span>
                            </li>
                            <li value={200} onClick={() => setAmount(200)}>
                                <span>200 </span>
                            </li>
                            <li value={500} onClick={() => setAmount(500)}>
                                <span>500 </span>
                            </li>
                            <li value={1000} onClick={() => setAmount(1000)}>
                                <span>1000 </span>
                            </li>
                        </ul>
                    </div>
                    <button type="submit" onClick={(e) => onSubmitHandler(e)}>
                        Pay now
                    </button>
                </>
            }
        </div>
    );
}

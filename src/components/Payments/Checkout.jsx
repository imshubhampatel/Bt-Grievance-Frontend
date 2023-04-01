import { initializeRazorpay } from "../../services/razorPayScript";
import React, { useState } from 'react';
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import Card from "../Cards/Card";

export default function Checkout() {
    const [amount, setAmount] = useState("10");
    const [loading, setLoading] = React.useState(false);
    const params = useParams()
    const { userId, enrollmentNo, uniqueCode } = params;
    async function onSubmitHandler(e) {
        e.preventDefault();
        setLoading(true)
        console.log("submitted");
        let res = await initializeRazorpay();
        let data = await fetch(
            "http://localhost:5001/user/razorpay/initiate-transaction",
            {
                method: "POST",
                body: JSON.stringify({
                    userUniqueCode: uniqueCode,
                    eventName: "Registration",
                    amount: 100,
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
                        `http://localhost:5001/user/razorpay/razor_capture/${response.razorpay_payment_id}`,
                        {
                            method: "POST",
                            body: JSON.stringify({
                                userUniqueCode: uniqueCode,
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
                        `http://localhost:5001/user/razorpay/update-transaction`,

                        {
                            method: "POST",
                            body: JSON.stringify({
                                USER: userId,
                                uniqueCode: uniqueCode,
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
            <Card onClickHandler={onSubmitHandler} />
        </div>
    );
}

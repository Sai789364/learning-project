import React from 'react';

const PaymentGateway = () => {
  const amount = 500; // Amount in subunits (500 paise = 5 INR)
  const currency = "INR";
  const receiptId = "qwsaq1";

  const paymentHandler = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      // Create an order by calling the backend /order endpoint
      const response = await fetch("http://localhost:5000/order", {
        method: "POST",
        body: JSON.stringify({
          amount, // Amount in subunits
          currency,
          receipt: receiptId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error('Order creation failed');
      }

      const order = await response.json();
      console.log("Order created:", order);

      const options = {
        key: "rzp_test_0H3eqKh6MM5Oh6", // Replace with your Razorpay Key ID
        amount, // Amount in currency subunits
        currency,
        name: "Your Business Name", // Replace with your business name
        description: "Test Transaction",
        image: "https://example.com/your_logo", // Add your business logo
        order_id: order.id, // Pass the id obtained in the response of the /order API
        handler: async function (response) {
          const body = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          };

          // Validate the payment by calling the backend /order/validate endpoint
          const validateRes = await fetch("http://localhost:5000/order/validate", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (!validateRes.ok) {
            throw new Error('Payment validation failed');
          }

          const jsonRes = await validateRes.json();
          console.log("Payment validation response:", jsonRes);
        },
        prefill: {
          name: "Web Dev Matrix", // Replace with your customer's name
          email: "webdevmatrix@example.com", // Replace with customer email
          contact: "9000000000", // Replace with customer contact number
        },
        notes: {
          address: "Razorpay Corporate Office", // Replace with any custom notes
        },
        theme: {
          color: "#3399cc", // Customization of Razorpay's payment popup color
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        alert(`Payment failed: ${response.error.description}`);
        console.error("Payment failed details:", response.error);
      });
      rzp1.open(); // Open the Razorpay payment popup
    } catch (error) {
      console.error("Payment process error:", error);
      alert("There was an error with the payment process. Please try again.");
    }
  };

  return (
    <div className="product">
      <button onClick={paymentHandler}>Pay Now</button>
    </div>
  );
};

export default PaymentGateway;

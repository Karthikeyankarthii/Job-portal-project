// backend/payment.js
const express = require("express");
const stripe = require("stripe")(
  "sk_test_51QKiidJQazBL3qRdjjISzo2guKNXjWG8MXaoBxQAX9tccnpS81ao1IgQrmP5c9dI156xcraAeTSKvmTj5olJMC9u00PYt5k8zB"
); // Add your Stripe Secret Key here
const router = express.Router();

router.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount } = req.body;

    // Create a PaymentIntent with the specified amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd", // Use your currency here, e.g., 'usd'
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;



import "./css/payment.css";
import { StripeElementsOptionsMode, loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Stripeform from '../sections/stripeform';

// Cette ligne permet de vous connecter à votre compte Stripe en fournissant votre clef publique
const stripePromise = loadStripe(import.meta.env.VITE_stripeKey);

const price = 5.9


const Payment = () => {
  const options : StripeElementsOptionsMode = {
    // Type de transaction
    mode: "payment",
    // Montant de la transaction
    amount: Number((price * 100).toFixed(0)),
    // Devise de la transaction
    currency: "eur",
    // On peut customiser l'apparence ici
    appearance: {
      /*...*/
    },
  };
  return (
    // Le composant Elements doit contenir toute notre logique de paiement
    // On lui donner la preuve que nous sommes connectés et les options de paiement
    <Elements stripe={stripePromise} options={options}>
      <Stripeform options={options}/>
    </Elements>
  );
};

export default Payment;
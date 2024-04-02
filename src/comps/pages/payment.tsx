

import "./css/payment.css";
import { StripeElementsOptionsMode, loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Stripeform from '../sections/stripeform';
import { useStoreObj } from "../../stores/storeObj";

const stripePromise = loadStripe(import.meta.env.VITE_stripeKey) // Cette ligne permet de vous connecter à votre compte Stripe en fournissant votre clef publique

const Payment = () => {
  
  const price = useStoreObj(state=>state.offer!.product_price)

  const options : StripeElementsOptionsMode = {    
    mode: "payment", // Type de transaction    
    amount: Number((price * 100).toFixed(0)), // Montant de la transaction    
    currency: "eur", // Devise de la transaction    
    appearance: {} // On peut customiser l'apparence ici
  }
  return ( // Le composant Elements doit contenir toute notre logique de paiement // On lui donner la preuve que nous sommes connectés et les options de paiement
    <Elements stripe={stripePromise} options={options}>
      <Stripeform options={options}/>
    </Elements>
  );
};

export default Payment;
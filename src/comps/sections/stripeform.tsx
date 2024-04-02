


import { PaymentElement, useElements, useStripe} from "@stripe/react-stripe-js";
import { postAxios } from "../../libs/axios";
import { useState } from "react";
import { StripeElementsOptionsMode } from "@stripe/stripe-js";
import './css/stripeform.css'

const Stripeform = ({options} : {options : StripeElementsOptionsMode}) => {
  
  const [errorMessage, setErrorMessage] = useState('') // State qui gère les messages d'erreurs  
  const [isLoading, setIsLoading] = useState(false) // State qui gère le fait que le paiement a été effectué  
  const [paymentIsDone, setPaymentIsDone] = useState(false) // State qui gère le fait qu'on est en train de payer
  const stripe = useStripe() // Va nous permettre de faire des requêtes à stripe pour valider le paiement
  const elements = useElements() // Va nous permettre de récupérer le contenu des inputs

  const handleSubmit = async (event : React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true)
    try {
      if (elements == null) { return } // Si il y a un problème avec elements on avorte la transaction
      const { error: submitError } = await elements.submit() // On fait une requête à Stripe pour vérifier si tout est bon dans les inputs, on destructure la clef error de la réponse et on la renomme submitError
      if (submitError && submitError.message) { setErrorMessage(submitError.message); return} // Affiche l'erreur en question
      const response = await postAxios("payment", options as { [key: string]: string | undefined; }) // Demande au backend de créer l'intention de paiement, il nous renvoie le clientSecret
      const clientSecret = response.client_secret
      const { error, paymentIntent } = await stripe!.confirmPayment({ // Requête à Stripe pour valider le paiement
        elements: elements, // elements contient les infos et la configuration du paiement
        clientSecret: clientSecret,
        confirmParams: { return_url: "https://example.com/order/123/complete"}, // Éventuelle redirection
        redirect: "if_required", // Bloque la redirections
      });
      console.log(paymentIntent)
      if (error && error.message) { setErrorMessage(error.message) }// Si une erreur a lieu pendant la confirmation
      if(paymentIntent){if (paymentIntent.status === "succeeded") { setPaymentIsDone(true)} } // Si on reçois un status succeeded on fais passer completed à true
      setIsLoading(false) // On a fini de charger
    } catch (error) {
      console.log(error);
    }
  };

  return paymentIsDone 
    ? 
      <div className='stripeform-cont0'>
        <p>Merci pour votre achat</p>
      </div>
    : 
      <form className='stripeform-cont1' onSubmit={handleSubmit}>
        <PaymentElement />
        {/* <CardElement /> */}
        <button id='payment-submit' type="submit" disabled={!stripe || !elements || isLoading}>Pay</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
}

export default Stripeform;

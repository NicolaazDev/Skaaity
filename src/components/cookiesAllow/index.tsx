import { useState } from "react";

export default function CookiesAllow() {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    localStorage.setItem("cookiesAccepted", "true");
  };

  const handleDecline = () => {
    setAccepted(false);
    localStorage.removeItem("cookiesAccepted");
  };

  if (accepted || localStorage.getItem("cookiesAccepted") === "true")
    return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background text-foreground p-4 flex justify-between">
      <p className="text-sm">
        Nós usamos cookies para melhorar a sua experiência no site. Ao continuar
        navegando, você concorda com o uso de cookies.
      </p>
      <div className="flex gap-2">
        <button
          className="bg-primary text-background px-4 py-2 rounded-md"
          onClick={handleAccept}
        >
          Aceitar
        </button>
        <button
          className="bg-destructive text-background px-4 py-2 rounded-md"
          onClick={handleDecline}
        >
          Recusar
        </button>
      </div>
    </div>
  );
}

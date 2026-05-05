const OFFER_USED_KEY = "german_cakes_first_order_used";

export function openWhatsAppOrder(message: string) {
  // Mark first order offer as used
  localStorage.setItem(OFFER_USED_KEY, "true");
  const text = encodeURIComponent(message);
  window.open(`https://wa.me/917793051387?text=${text}`, "_blank");
}

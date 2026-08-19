// =====================================================
// CHECKOUT URLS — NÃO ALTERAR
// =====================================================
export const CHECKOUT = {
  main:      'https://pay.lowify.com.br/checkout.php?product_id=B81YP1', // R$ 14,90
  exitOffer: 'https://pay.lowify.com.br/go.php?offer=51aqd27',           // R$ 10,90 exit popup
}

// =====================================================
// TRACKING HELPER — Disparar eventos de conversão
// Substitua as chamadas pelo seu pixel/GA após configurar
// =====================================================
export function trackEvent(eventName, planLabel) {
  // --- Meta Pixel ---
  // if (typeof fbq !== 'undefined') {
  //   fbq('track', eventName, { content_name: planLabel });
  // }

  // --- Google Analytics / GTM ---
  // if (typeof gtag !== 'undefined') {
  //   gtag('event', eventName, { plan: planLabel });
  // }

  // --- dataLayer (GTM) ---
  // if (window.dataLayer) {
  //   window.dataLayer.push({ event: eventName, plan: planLabel });
  // }

  console.log(`[TRACK] ${eventName} — ${planLabel}`)
}

export function handleCheckout(url, planLabel) {
  // Evento: início do checkout
  trackEvent('InitiateCheckout', planLabel)
  window.location.href = url
}

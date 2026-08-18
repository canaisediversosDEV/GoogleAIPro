// =====================================================
// CHECKOUT URLS — NÃO ALTERAR
// =====================================================
export const CHECKOUT = {
  monthly:   'https://pay.lowify.com.br/checkout?product_id=vxpqap',
  sixMonths: 'https://pay.lowify.com.br/checkout?product_id=B81YP1',
  eighteen:  'https://pay.lowify.com.br/checkout?product_id=0hWOv3',
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

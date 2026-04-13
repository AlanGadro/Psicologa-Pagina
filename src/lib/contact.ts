const whatsappPhone = '5491100000000'
const contactEmail = 'contacto@valeriamorales.com'

// Contact endpoints are centralized so the two call-to-action surfaces stay in
// sync and use the same encoded WhatsApp target.
export function getWhatsAppUrl(message?: string) {
  const baseUrl = `https://wa.me/${whatsappPhone}`

  if (!message) {
    return baseUrl
  }

  return `${baseUrl}?text=${encodeURIComponent(message)}`
}

export function getWhatsAppDisplayNumber() {
  return '+54 9 11 0000 0000'
}

export function getContactEmail() {
  return contactEmail
}

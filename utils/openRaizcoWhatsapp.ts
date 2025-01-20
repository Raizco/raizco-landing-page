export function requestInfoAboutProperty(propertyUrl: string, phone: string): void {
  const message = `¡Hola! Me gustaría obtener más información del siguiente inmueble: ${propertyUrl}`;
  const whatsappURL = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;
  window.open(whatsappURL, "_blank");
}

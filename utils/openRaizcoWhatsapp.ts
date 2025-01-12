export function requestInfoAboutProperty(propertyUrl: string): void {
  const phone: string = "573104340470;";
  const message = `¡Hola! Me gustaría obtener más información del siguiente inmueble: ${propertyUrl}`;
  const whatsappURL = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;
  window.open(whatsappURL, "_blank");
}

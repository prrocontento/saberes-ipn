
import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';
 
// Definimos los idiomas permitidos
const locales = ['en', 'es'];
 
export default getRequestConfig(async ({requestLocale}) => {
  // Obtenemos el idioma solicitado
  let locale = await requestLocale;
 
  // Si no hay idioma o no es válido, usamos español por defecto
  if (!locale || !locales.includes(locale as any)) {
    locale = 'es';
  }
 
  return {
    locale,
    // Importamos el archivo JSON correspondiente dinámicamente
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
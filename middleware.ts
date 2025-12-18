import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // Una lista de todos los locales soportados
  locales: ['en', 'es'],
 
  // Usado cuando no coincide ningún locale
  defaultLocale: 'es'
});
 
export const config = {
  // Coincidir solo con rutas internacionalizadas
  matcher: ['/', '/(es|en)/:path*']
};
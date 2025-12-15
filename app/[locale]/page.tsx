import { useTranslations } from 'next-intl';
import { title } from "@/components/primitives";

export default function Home() {
  // Hook para usar las traducciones del bloque 'HomePage'
  const t = useTranslations('HomePage');

  return (
    <div className="text-center">
      <h1 className={title()}>{t('title')}</h1>
      <p className="mt-4 text-lg">{t('welcome')}</p>
    </div>
  );
}
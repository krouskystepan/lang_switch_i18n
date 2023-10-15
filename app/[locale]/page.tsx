import { useLocale, useTranslations } from 'next-intl';

export default function Index() {
  const t = useTranslations('Index');
  console.log(useLocale());
  return <h1>{t('title')}</h1>;
}

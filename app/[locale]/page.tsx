import { ClientSide } from '@/components/ClientSide';
import { ServerSide } from '@/components/ServerSide';
import { locales } from '@/middleware';
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';

export default function Index() {
  const t = useTranslations();

  return (
    <>
      <h1>{t('page.title')}</h1>
      <h4>{t('page.dynamic', { name: 'Jane' })}</h4>
      <h4>{t('page.plural', { count: 0 })}</h4>
      <h4>{t('page.plural', { count: 1 })}</h4>
      <h4>{t('page.plural', { count: 2 })}</h4>
      <h4>{t('page.plural', { count: 3 })}</h4>
      <h4>{t('page.plural', { count: 4 })}</h4>
      <h4>{t('page.plural', { count: 5 })}</h4>
      <h4>{t('page.plural', { count: 20 })}</h4>
      {locales.map((locale) => (
        <Link locale={locale} href="/">
          <p>{locale}</p>
        </Link>
      ))}
      <ClientSide
        message={{
          title: t('clientSide.title'),
          subtitle: t('clientSide.subtitle'),
        }}
      />
      <ServerSide />
    </>
  );
}

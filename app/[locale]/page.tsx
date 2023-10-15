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

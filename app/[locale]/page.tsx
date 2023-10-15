import { ClientSide } from '@/components/ClientSide';
import { ServerSide } from '@/components/ServerSide';
import { useTranslations } from 'next-intl';

export default function Index() {
  const t = useTranslations();

  return (
    <>
      <h1>{t('page.title')}</h1>
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

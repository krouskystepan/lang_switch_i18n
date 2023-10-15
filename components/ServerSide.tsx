import { useTranslations } from 'next-intl';
import React from 'react';

export const ServerSide = () => {
  const t = useTranslations('serverSide');
  console.log('ServerSide');
  return (
    <div>
      <p>{t('title')}</p>
    </div>
  );
};

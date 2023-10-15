'use client';

import { ClientSideProps } from '@/langs';
import React from 'react';

export const ClientSide = ({ message }: { message: ClientSideProps }) => {
  console.log('ClientSide');

  return (
    <>
      <div>
        <p>{message.title}</p>
        <p>{message.subtitle}</p>
      </div>
    </>
  );
};

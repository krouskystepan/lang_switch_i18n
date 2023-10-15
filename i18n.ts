import { getRequestConfig } from 'next-intl/server';

// Define a function to import translations dynamically based on the locale.
async function getLocaleMessages(locale: string) {
  // Use dynamic import to load translations based on the locale.
  const module = await import(`./langs/${locale}.ts`);
  return module.default;
}

export default getRequestConfig(async ({ locale }) => ({
  messages: await getLocaleMessages(locale),
}));

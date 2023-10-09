import './globals.css';

export default function Root({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="m-10">
      <body>{children}</body>
    </html>
  );
}

export const metadata = {
  title: 'i18n within app directory - Vercel Examples',
  description: 'How to do i18n in Next.js 13 within app directory',
};

export const metadata = {
  title: "CRM Recrutement Médical",
  description: "CRM interne cabinet de recrutement",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

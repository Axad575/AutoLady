import "./globals.css";

export const metadata = {
  title: "AutoLady - Автошкола для женщин в Ташкенте",
  description: "Автошкола AutoLady - обучение вождению для женщин с женским коллективом инструкторов. Комфортная атмосфера, современные автомобили.",
  favicon: "/favicon.ico"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

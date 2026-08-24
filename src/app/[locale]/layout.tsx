import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import '../globals.css'
import  {Navbar}  from "@/components/layout/Navbar";
import Footer from "@/components/layout/footer";
import RouteSection from "@/components/common/route-section";

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale == "en" ? "ltr" : "rtl"}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <RouteSection/>
          {children}
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
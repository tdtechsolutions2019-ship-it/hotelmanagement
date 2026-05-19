"use client";

import {NextIntlClientProvider} from "next-intl";

import enMessages from "../message/checkavailability/en.json";


const messages = {
  en: enMessages,
};

export default function IntlProvider({
  children
}: {
  children: React.ReactNode;
}) {
  // Later you can get from localStorage/cookie
  const locale = "en";

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages[locale]}
    >
      {children}
    </NextIntlClientProvider>
  );
}
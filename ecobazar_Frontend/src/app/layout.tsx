import ReactQueryProvider from "@/components/providers/_components/react-query.provider";



export default async function LocaleLayout({
  children
}: {
  children: React.ReactNode;
}) {


  return (
    <ReactQueryProvider>
      {children}
    </ReactQueryProvider>
  );
}
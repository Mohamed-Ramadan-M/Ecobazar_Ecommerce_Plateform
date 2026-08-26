
import ReactQueryProvider from "./_components/react-query.provider";
// import { useLocale, useMessages, useNow } from "next-intl";

type ProviderProps = {
    children: React.ReactNode;
};

export default function Providers({ children }: ProviderProps) {
    // Translation
    // const messages = useMessages();
    // const locale = useLocale();
    // const now = useNow();
    // const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return (
        <ReactQueryProvider>
            {children}
        </ReactQueryProvider>
    );
}

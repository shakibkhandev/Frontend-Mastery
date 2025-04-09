// layout.tsx   or  <your_main_folder_where_can_we_wrap_all_code>

import { GlobalContextProvider } from "@/context/GlobalContextProvider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GlobalContextProvider>
          {children}
        </GlobalContextProvider>
        </body>
    </html>
  );
}

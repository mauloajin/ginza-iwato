import "./globals.css";

const siteUrl = "https://ginza-iwato.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "日本料理 銀座岩戸｜海鮮定食ランチ&和食居酒屋ディナー",
  description: "銀座一丁目の日本料理 銀座岩戸。昼は元祖マグロ胡麻だれ重などの海鮮定食、夜は魚料理と日本酒を楽しむ和食居酒屋。住所、営業時間、予約、アクセスをご案内します。",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "日本料理 銀座岩戸｜銀座一丁目の海鮮・日本料理",
    description: "昼は海鮮定食、夜は魚料理と日本酒。銀座一丁目駅から徒歩3分。",
    url: siteUrl,
    siteName: "日本料理 銀座岩戸",
    locale: "ja_JP",
    type: "website"
  },
  twitter: { card: "summary", title: "日本料理 銀座岩戸", description: "銀座一丁目の海鮮定食ランチと和食居酒屋ディナー" },
  verification: { google: "ayHXvvh7MAYyEd0yabm5xYrI98qeN_1bfcLkvUPkbrM" }
};

export default function RootLayout({ children }) {
  return <html lang="ja"><body>{children}</body></html>;
}

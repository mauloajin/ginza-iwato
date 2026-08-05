const store = {
  name: "日本料理 銀座岩戸｜海鮮定食ランチ&和食居酒屋ディナー",
  shortName: "銀座 岩戸",
  romanized: "Ginza Iwato",
  address: "東京都中央区銀座1-5-1",
  phone: "03-3564-3835",
  maps: "https://www.google.com/maps/search/?api=1&query=%E6%97%A5%E6%9C%AC%E6%96%99%E7%90%86%20%E9%8A%80%E5%BA%A7%E5%B2%A9%E6%88%B8%20%E6%9D%B1%E4%BA%AC%E9%83%BD%E4%B8%AD%E5%A4%AE%E5%8C%BA%E9%8A%80%E5%BA%A71-5-1",
  instagram: "https://www.instagram.com/ginza_iwato_official/",
  reserve: "https://tabelog.com/tokyo/A1301/A130101/13014913/"
};

const menu = [
  ["元祖マグロ胡麻だれ重", "岩戸秘伝の胡麻だれでマグロを和えた、ランチの定番。豚汁付き。"],
  ["いわしの薄造り", "いわしを薄造りにし、ポン酢で味わう魚料理。"],
  ["刺身・季節の魚料理", "刺身、焼物、煮物、揚物など、魚を中心とした夜の一品料理。"],
  ["日本酒・焼酎", "魚料理と合わせて楽しめる日本酒、焼酎、ワインを用意。"]
];

const faqs = [
  ["日本料理 銀座岩戸はどこにありますか？", "東京都中央区銀座1-5-1です。銀座一丁目駅から徒歩3分、有楽町駅から徒歩4分、銀座駅から徒歩5分です。"],
  ["営業時間と定休日は？", "月〜金は11:00〜14:30、17:00〜22:00です。土曜日は11:00〜14:30、17:00〜21:00です。日曜日・祝日は定休日です。"],
  ["ランチの予約はできますか？", "ランチタイムの予約は受け付けていません。ディナーは予約できます。"],
  ["どのような料理がありますか？", "ランチは元祖マグロ胡麻だれ重などの海鮮定食、ディナーは刺身、焼物、煮物、揚物などの魚料理を中心に提供しています。"],
  ["支払い方法は？", "クレジットカード、交通系電子マネー、iD、PayPay、d払いに対応しています。ランチタイムも食券機でキャッシュレス決済を利用できます。"],
  ["個室や駐車場はありますか？", "完全個室と専用駐車場はありません。店内は全席禁煙です。"],
  ["Where is Ginza Iwato?", "It is at 1-5-1 Ginza, Chuo-ku, Tokyo, about a three-minute walk from Ginza-itchome Station."],
  ["Can I reserve lunch?", "Lunch reservations are not accepted. Dinner reservations are available through the reservation link or by phone."],
  ["What kind of restaurant is Ginza Iwato?", "It is a Japanese seafood restaurant in Ginza, serving set lunches during the day and fish dishes with sake at dinner."]
];

const jpPlaces = ["銀座", "銀座一丁目", "有楽町", "京橋", "中央区", "東京駅周辺", "銀座駅", "有楽町駅", "銀座一丁目駅", "並木通り周辺"];
const jpIntents = ["日本料理", "海鮮ランチ", "海鮮定食", "魚ランチ", "和食ランチ", "居酒屋ディナー", "魚料理", "刺身", "日本酒", "焼酎", "まぐろ胡麻だれ重", "豚汁付きランチ", "予約", "営業時間", "アクセス", "土曜ランチ", "土曜ディナー", "全席禁煙", "キャッシュレス", "会食"];
const enPlaces = ["Ginza", "Ginza-itchome", "Yurakucho", "Kyobashi", "Chuo City", "central Tokyo", "near Ginza Station", "near Yurakucho Station", "near Ginza-itchome Station", "Tokyo"];
const enIntents = ["Japanese restaurant", "seafood restaurant", "Japanese seafood lunch", "set lunch", "fish lunch", "Japanese dinner", "izakaya dinner", "sashimi", "sake", "shochu", "tuna sesame rice bowl", "restaurant reservation", "opening hours", "directions", "Saturday lunch", "Saturday dinner", "non-smoking restaurant", "cashless payment", "local dining", "Japanese cuisine"];
const jpKeywords = jpPlaces.flatMap((place) => jpIntents.map((intent) => `${place} ${intent}`));
const enKeywords = enPlaces.flatMap((place) => enIntents.map((intent) => `${intent} ${place}`));

export default function Home() {
  const restaurantJsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: store.name,
    alternateName: [store.shortName, store.romanized, "銀座岩戸", "岩戸"],
    description: "銀座一丁目の日本料理店。昼は元祖マグロ胡麻だれ重などの海鮮定食、夜は刺身や季節の魚料理と日本酒を提供。",
    url: "https://ginza-iwato.vercel.app/",
    telephone: store.phone,
    address: { "@type": "PostalAddress", streetAddress: "銀座1-5-1", addressLocality: "中央区", addressRegion: "東京都", postalCode: "104-0061", addressCountry: "JP" },
    servesCuisine: ["日本料理", "海鮮料理", "和食", "居酒屋料理"],
    priceRange: "¥¥",
    hasMap: store.maps,
    acceptsReservations: true,
    sameAs: [store.instagram, store.reserve],
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "11:00", closes: "14:30" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "17:00", closes: "22:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "11:00", closes: "14:30" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "17:00", closes: "21:00" }
    ]
  };
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    <header className="hero">
      <nav><a className="brand" href="#top">銀座 岩戸</a><div><a href="#features">特徴</a><a href="#menu">料理</a><a href="#info">店舗情報</a><a href="#access">アクセス</a><a href="#faq">FAQ</a><a href="#english">English</a></div></nav>
      <div className="heroInner" id="top">
        <p className="kicker">GINZA 1-CHOME · JAPANESE SEAFOOD</p>
        <div className="seal">岩戸</div>
        <h1><span>日本料理</span>銀座岩戸</h1>
        <p className="roman">GINZA IWATO</p>
        <p className="lead">昼は元祖マグロ胡麻だれ重をはじめとする海鮮定食。夜は刺身や季節の魚料理に、日本酒と焼酎を合わせる銀座一丁目の日本料理店です。</p>
        <div className="actions"><a className="primary" href={store.reserve}>ディナー予約・詳細</a><a className="ghost" href={store.maps}>Googleマップ</a></div>
        <div className="quick"><span><b>11:00</b>ランチ開店</span><span><b>徒歩3分</b>銀座一丁目駅</span><span><b>日・祝</b>定休日</span></div>
      </div>
    </header>
    <main>
      <section id="features"><p className="sectionNo">01 / STYLE</p><h2>昼と夜、<br />二つの岩戸。</h2><div className="cards">
        <article><b>昼</b><h3>海鮮定食ランチ</h3><p>秘伝の胡麻だれでマグロを和えた元祖マグロ胡麻だれ重を中心に、魚を味わう定食を提供。ランチは予約を受け付けていません。</p></article>
        <article><b>夜</b><h3>魚料理の和食居酒屋</h3><p>刺身、焼物、煮物、揚物など、その日の魚と季節を映す一品料理。日本酒、焼酎、ワインとともに楽しめます。</p></article>
        <article><b>銀座</b><h3>三駅から徒歩圏</h3><p>銀座一丁目駅から徒歩3分、有楽町駅から徒歩4分、銀座駅から徒歩5分。銀座1丁目、並木通り近くです。</p></article>
      </div></section>
      <section className="dark" id="menu"><p className="sectionNo">02 / FOOD & DRINK</p><h2>料理・お飲み物</h2><div className="menuList">{menu.map(([name, note], i) => <article key={name}><span>0{i + 1}</span><div><h3>{name}</h3><p>{note}</p></div></article>)}</div><p className="notice">仕入れや季節により内容・価格が変わります。最新情報は店舗へご確認ください。</p></section>
      <section id="info"><p className="sectionNo">03 / INFORMATION</p><h2>店舗基本情報</h2><dl className="info">
        <div><dt>正式店名</dt><dd>{store.name}<small>{store.romanized}</small></dd></div><div><dt>業態</dt><dd>海鮮・日本料理・居酒屋</dd></div><div><dt>住所</dt><dd>{store.address}</dd></div><div><dt>電話番号</dt><dd><a href="tel:0335643835">{store.phone}</a></dd></div>
        <div><dt>営業時間</dt><dd><p><b>月〜金</b>11:00〜14:30（L.O. 14:00）<br />17:00〜22:00（料理 L.O. 20:45／ドリンク L.O. 21:15）</p><p><b>土</b>11:00〜14:30（L.O. 14:00）<br />17:00〜21:00（料理 L.O. 19:45／ドリンク L.O. 20:15）</p></dd></div>
        <div><dt>定休日</dt><dd>日曜日・祝日</dd></div><div><dt>予約</dt><dd>ディナー予約可。ランチタイムは予約不可。</dd></div><div><dt>席</dt><dd>34席（カウンター、テーブル、座敷、掘りごたつ）。完全個室なし。貸切は要相談。</dd></div><div><dt>喫煙</dt><dd>全席禁煙</dd></div><div><dt>駐車場</dt><dd>専用駐車場なし</dd></div><div><dt>支払い</dt><dd>クレジットカード、交通系電子マネー、iD、PayPay、d払い</dd></div><div><dt>ディナーのお通し</dt><dd>550円（税込）</dd></div>
      </dl></section>
      <section className="access" id="access"><div><p className="sectionNo">04 / ACCESS</p><h2>銀座一丁目駅から、<br />徒歩3分。</h2><p className="address">〒104-0061<br />{store.address}</p><p>東京メトロ有楽町線 銀座一丁目駅から徒歩3分<br />JR・東京メトロ 有楽町駅から徒歩4分<br />東京メトロ 銀座駅から徒歩5分</p><a className="primary" href={store.maps}>Googleマップで道順を見る</a></div><div className="mapArt"><small>TOKYO · CHUO</small><strong>銀座<br /><em>一丁目</em></strong><span>1—5—1</span></div></section>
      <section id="faq"><p className="sectionNo">05 / FAQ</p><h2>よくある質問</h2><div className="faq">{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
      <section className="english" id="english"><p className="sectionNo">06 / ENGLISH GUIDE</p><h2>Ginza Iwato</h2><p className="lead">Ginza Iwato is a Japanese seafood restaurant in Ginza 1-chome, central Tokyo. At lunch, it serves seafood set meals including its original tuna rice bowl dressed with sesame sauce. Dinner features sashimi and seasonal grilled, simmered and fried fish dishes with sake and shochu.</p><dl className="englishInfo"><div><dt>Type</dt><dd>Japanese cuisine / seafood / izakaya</dd></div><div><dt>Address</dt><dd>1-5-1 Ginza, Chuo-ku, Tokyo 104-0061</dd></div><div><dt>Hours</dt><dd>Mon–Fri 11:00 a.m.–2:30 p.m. / 5:00 p.m.–10:00 p.m.<br />Sat 11:00 a.m.–2:30 p.m. / 5:00 p.m.–9:00 p.m.</dd></div><div><dt>Closed</dt><dd>Sundays and public holidays</dd></div><div><dt>Reservation</dt><dd>Dinner reservations are available. Lunch reservations are not accepted.</dd></div><div><dt>Access</dt><dd>3 minutes from Ginza-itchome Station; 4 minutes from Yurakucho Station; 5 minutes from Ginza Station.</dd></div></dl><div className="actions"><a className="primary" href={store.reserve}>Reservation & details</a><a className="ghost darkGhost" href={store.maps}>Open Google Maps</a></div></section>
      <section className="links"><p className="sectionNo">07 / LINKS</p><h2>店舗リンク</h2><div className="linkGrid"><a href={store.instagram}>公式 Instagram <span>↗</span></a><a href={store.reserve}>食べログ・ディナー予約 <span>↗</span></a><a href={store.maps}>Googleマップ <span>↗</span></a><a href="https://www.hotpepper.jp/strJ000116680/">ホットペッパーグルメ <span>↗</span></a></div></section>
      <section className="keywords"><details><summary>銀座岩戸に関連する検索語 / Related searches</summary><div><h3>日本語</h3><p>{jpKeywords.join(" / ")}</p><h3>English</h3><p lang="en">{enKeywords.join(" / ")}</p></div></details></section>
    </main>
    <footer><div><strong>日本料理 銀座岩戸</strong><p>{store.address}<br /><a href="tel:0335643835">{store.phone}</a></p></div><div className="footerLinks"><a href={store.reserve}>予約</a><a href={store.maps}>地図</a><a href={store.instagram}>Instagram</a></div><small>Ginza Iwato — Japanese seafood restaurant in Ginza, Tokyo</small></footer>
  </>;
}

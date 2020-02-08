export const getPosts = () => {
  return [
    {
      issue: "oyun geliştirme",
      title: "GLOBAL GAME JAM 2020 NASIL GEÇTİ?",
      slug: "ggjnasilgecti",
      intro:"Öncelikle bilmeyenler için biraz Global Game Jam hakkında biraz konuşalım.GGJ'nin kendi websitesindeki tanımdan yola çıkarsak...",
      details: require("./posts/ggjnasilgecti.md").default,
      continue:"devam etmek icin...",
      date: "08 Şubat 2020"
      },

     
        
      {
          issue: "yazılım",
          title: "YAZILIM HAKKINDA 2",
          intro:"içerik hazırlanıyor...",
          slug: "yazilim-2",
          details: require("./posts/yazilim-2.md").default,
          continue: "devam etmek icin...",
          date: "16 Ocak 2020"
      },
    {
      issue: "kişisel gelişim",
      title: "KİŞİSEL GELİŞİM 1",
      intro:"içerik hazırlanıyor...",
      slug: "kg-1",
      details: require("./posts/ornek-yazi.md").default,
      continue:"devam etmek icin...",
      date: "3 Aralık 2019"
    },
    {
      issue: "fizik",
      title: "FİZİK HAKKINDA",
      intro:"içerik hazırlanıyor...",
      slug: "fizikhk",
      details: require("./posts/merhaba.md").default,
      continue:"devam etmek icin...",
      date: "1 Aralık 2019"
    }
  ];
};

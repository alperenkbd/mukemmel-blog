export const getPosts = () => {
  return [


      {
          issue: "sinema",
          title: "İzlemeyenlerin Çok Şey Kaçıracağı 18 Film",
          intro: "Kesinlikle izlenmesini tavsiye ettiğim 18 tane filmi sizin için derledim...",
          slug: "FilmTavsiye",
          details: require("./posts/FilmTavsiye.md").default,
          continue: "devam etmek icin tıklayın...",
          date: "02 Nisan 2020"
      },


      {
      issue: "oyun geliştirme",
      title: "GLOBAL GAME JAM 2020 NASIL GEÇTİ?",
      slug: "ggjnasilgecti",
      intro:"  Öncelikle bilmeyenler için Global Game Jam hakkında biraz konuşalım.GGJ'nin kendi websitesindeki tanımdan yola çıkarsak...",
      details: require("./posts/ggjnasilgecti.md").default,
      continue:"devam etmek icin tıklayın...",
      date: "08 Şubat 2020"
      }
  ];
};

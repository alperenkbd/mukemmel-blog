export const getPosts = () => {
  return [
    {
      issue: "yazılım",
      title: "YAZILIM HAKKINDA 1",
      slug: "yazilim-1",
      details: require("./posts/yarisma.md").default,
      continue:"devam etmek icin...",
      date: "5 Aralık 2019"
      },
      {
          issue: "yazılım",
          title: "YAZILIM HAKKINDA 2",
          slug: "yazilim-2",
          details: require("./posts/yazilim-2.md").default,
          continue: "devam etmek icin...",
          date: "16 Ocak 2020"
      },
    {
      issue: "kişisel gelişim",
      title: "KİŞİSEL GELİŞİM 1",
      slug: "kg-1",
      details: require("./posts/ornek-yazi.md").default,
      continue:"devam etmek icin...",
      date: "3 Aralık 2019"
    },
    {
      issue: "fizik",
      title: "FİZİK HAKKINDA",
      slug: "fizikhk",
      details: require("./posts/merhaba.md").default,
      continue:"devam etmek icin...",
      date: "1 Aralık 2019"
    }
  ];
};

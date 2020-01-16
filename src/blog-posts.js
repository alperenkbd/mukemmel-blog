export const getPosts = () => {
  return [
    {
      issue: "yazılım",
      title: "BU BLOG YAZISI ALPERENİN",
      slug: "alperenblog",
      details: require("./posts/yarisma.md").default,
      date: "5 Aralık 2019"
      },
      {
          title: "Yazılım 2",
          slug: "yazilim-2",
          details: require("./posts/yazilim-2.md").default,
          date: "16 Ocak 2020"
      },
    {
      issue: "kişisel gelişim",
      title: "Örnek yazı",
      slug: "ornek-yazi",
      details: require("./posts/ornek-yazi.md").default,
      date: "3 Aralık 2019"
    },
    {
      issue: "fizik",
      title: "Merhaba dünya!",
      slug: "merhaba",
      details: require("./posts/merhaba.md").default,
      date: "1 Aralık 2019"
    }
  ];
};

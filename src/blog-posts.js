export const getPosts = () => {
  return [
    {
      title: "BU BLOG YAZISI ALPERENİN",
      slug: "alperenblog",
      details: require("./posts/yarisma.md").default,
      date: "5 Aralık 2019"
    },
    {
      title: "Örnek yazı",
      slug: "ornek-yazi",
      details: require("./posts/ornek-yazi.md").default,
      date: "3 Aralık 2019"
    },
    {
      title: "Merhaba dünya!",
      slug: "merhaba",
      details: require("./posts/merhaba.md").default,
      date: "1 Aralık 2019"
    }
  ];
};

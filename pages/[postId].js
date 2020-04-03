import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const BlogPost = ({ post }) => (
  <div className="container">
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <h1 className="hero-title">Alperen Kabadayı</h1>
      <div className="hero-social-links">
                <Link href="alperenkabadayi.com/Hakkimda">
                    <a className="social-link"><img src='user.png' width="32" height="32" /></a>
                </Link>

                <Link href="https://www.twitter.com/alperenkbd06">
                    <a className="social-link"><img src='twitter.png' width="32" height="32" /></a>
                </Link>

                <Link href="https://www.facebook.com/profile.php?id=100021320052185">
                    <a className="social-link"><img src='facebook.png' width="32" height="32" /></a>
                </Link>

                <Link href="https://www.linkedin.com/in/alperen-kabaday%C4%B1-3300b2161/">
                    <a className="social-link"><img src='linkedin.png' width="32" height="32" /></a>
                </Link>

                <Link href="https://github.com/alperenkbd">
                    <a className="social-link"><img src='cat.png' width="32" height="32" /></a>
                </Link> 
      </div>
    </div>

    <div className="blog">
      
      <div className="blog-text">
        <ReactMarkdown source={post.details} />
      </div>
            <div className="blog-date">{post.date}</div>

            <div className="geri-dön">
                <a href="http://www.alperenkabadayi.com" class="prev">geri dönmek için tıklayın</a>
            </div>

    </div>
    <style jsx>{`
      .container {
        max-width: 650px;
        width: 100%;
        margin: 0 auto;
        background-size: contain;
      }

      .hero {
        text-align: center;
        margin: 96px 0;
      }

        
      img {

     max-width: 100%;
     height: auto;
  
    }


      .social-link {
        margin-right: 8px;
      }

      .hero-title {
        font-size: 48px;
        font-family:sans-serif;
      }

     .blog{

        font-family:verdana;



        }

        .blog-text{
            
        max-width: 650px;
        width: 100%;
        margin: 0 auto;
        background-size: contain;

        }

      .blog-date {
        text-align: right;
        color: #cccccc;
        margin: 12px 0 48px 0;
        
      }

      a {
        color: #35459e;
        text-decoration: none;
      }
    `}</style>
  </div>
);

BlogPost.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
    const res = await fetch(` http://alperenkabadayi.herokuapp.com/api/post/${query.postId} `);  
  const json = await res.json();
  return { post: json.post };
};

export default BlogPost;

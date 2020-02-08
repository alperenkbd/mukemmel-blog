import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";



const Home = ({ posts }) => (
    
  <div className="container">
    <Head>
      <title>Alperen Kabadayı</title>
      <link rel="icon" href="/favicon.ico" />
        </Head>
   
    <div className="hero">

            <h1 className="hero-title">Alperen Kabadayı</h1>

             
      <div className="hero-social-links">

              <Link href="yazım aşamasında">
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
   
        {posts.map(post => (

            <div className="blog">
                <div className="blog-issue">
                    {post.issue}</div>

        <h2 className="blog-title">
          <Link href={post.slug}>
            <a className="blog-title-link">{post.title}</a>
            
          </Link>

        </h2>
        <div className="blog-text">
          <ReactMarkdown source={post.intro} />
             <Link href={post.slug}>
          <a className="blog-continue">{post.continue}</a>
                </Link>
        </div>

             

        <div className="blog-date">{post.date}</div>
                
            </div>
            
        ))}

        <div className="sonraki">
            <a href="#" class="next">sonraki sayfa &raquo;</a>
        </div>

        <style jsx>{`

      .container {
        
        width: 100%;
        background-image: url(agac.jpg);
        background-size: cover;
        border:5px;
        
      }
    
        .blog-issue{
        color:white;
        border:1px solid black;
        margin: 12px 0 48px 0;
        text-align: center;
        background-color: #20B2AA;
        }

      .hero {
        width:800px;
        text-align: center;
        margin: 0px auto;
        padding:40px;
        border-style:dotted;
        border-width:10px;
        border-color:black;
        background-color: #2F4F4F;
      }
        
      
      

      .hero-title {
        font-size: 48px;
        color:black;
      }

        
        .social-link{
    
        margin-right:15px;

        }

        .blog{
        margin: 0 auto;
        max-width: 800px;
        background-color: #ADD8E6;
        }
      

      .blog-date {
        text-align: right;
        color: #90EE90;
        margin: 12px 0 48px 0;
      }

      a {
        color: white;
        text-decoration: none;
        
      }
       
        .blog-title{
         padding:15px;
         background-image: url(arkaplan2.jpg);	
         
        }       
            
        .blog-continue{

        color:#1E90FF;

        }
        .sonraki{

        color: white;
        text-align:center;
        }
        
        
    `}</style>
  </div>
);



Home.getInitialProps = async ({ req }) => {
    // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
    const res = await fetch("http://alperenkabadayi.herokuapp.com/api/posts");
    const json = await res.json();
    return { posts: json.posts };
};

export default Home;






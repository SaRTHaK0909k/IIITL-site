import Layout from "../components/Layout";  
import React from 'react'
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Link from 'next/link';
import 'animate.css';


const news = ({news,annoucements}) => {
    const client = createClient({
        projectId: "bdnunqwq",
        dataset: "production",
  
      });
      const builder = imageUrlBuilder(client);
      function urlFor(source) {
        return builder.image(source);
      }
 
  return (
    <div>
      <Layout>
      <div className="flex flex-col font-serif lg:text-5xl text-bluel md:text-5xl px-10 py-3 sm:text-4xl max-sm:text-2xl border-b-2">
              <div className="font-bold border-b-4 border-bluel">IIITL in the News</div>
      </div>
      
      <div className='grid grid-flow-row grid-cols-1 lg:grid-cols-2 bg-gray-800 rounded-md m-4'>
           <div className='text-white'>
             {
                news[0]?
                <div className=' animate__animated animate__fadeInLeft'>
                  <a href={news[0].link}>
                   <img src={urlFor(news[0].picture)} alt="" className='p-4 rounded-md'/>
                  </a>
                </div>:null
             }
           </div>
           <div>
              {
                news.map((it,index)=>{
                  return(
                    <div key={index} className="my-4">
                    <a href={it.link}>
                     <h2 className='text-xl animate__animated animate__fadeInLeft text-white underline decoration-sky-500'>{it.name}</h2>
                    </a>
                    </div>
                  )
                })
              }
           </div>
      </div>

      <div className="flex flex-col gap-2 font-serif lg:text-5xl text-bluel md:text-5xl p-10 sm:text-4xl max-sm:text-2xl">
              <div className="font-bold border-b-4 border-bluel">Public Annoucements</div>
      </div>
       
      </Layout>
    </div>
  )
}
export async function getServerSideProps(context) {
    const client = createClient({
      projectId: "bdnunqwq",
      dataset: "production",

    });
    const query = `*[_type == "news"]`;
    const query2 = `*[_type == "annoucements"]`;
    const news = await client.fetch(query);
    const annoucements = await client.fetch(query2);

    return {
      props: {
        news,annoucements
      },
    };
  }


export default news

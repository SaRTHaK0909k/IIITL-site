import Layout from '../../components/Layout'
import React from 'react'
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Link from 'next/link';
import PortableText from "react-portable-text"
import { useRouter } from 'next/router'

const course = ({admissions,course}) => {
    const router = useRouter()
    const id = router.query.id

    const client = createClient({
        projectId: "10usolyp",
        dataset: "production",

    });
    const builder = imageUrlBuilder(client);
    function urlFor(source) {
        return builder.image(source);
    }

  return (
    <div>
      <Layout>
      <div className='p-20'>
      {
          course.map((item,ind)=>{
              if(id==item._id){
                  return(
                    <div>
                     <h1 className='font-semibold mb-4 text-2xl'>{item.title}</h1>
                     <PortableText
                                    content={item.content}
                                    serializers={{
                                    }}
                                />
                    </div>
                    )
                }
            })
        }
     </div>
       </Layout>

    </div>
  )
}
export async function getServerSideProps(context) {
    const client = createClient({
        projectId: "10usolyp",
        dataset: "production",

    });
    const query = `*[_type == "admissions"]`;
    const query2 = `*[_type == "course"]`;
    const admissions = await client.fetch(query);
    const course = await client.fetch(query2);
    return {
        props: {
            admissions,course
        },
    };
}

export default course

import Layout from "../components/Layout";
import React from 'react'
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Link from 'next/link';
import Zoom from 'react-reveal/Zoom';
import styles from './clubs.module.css';

const Clubs = ({ clubs }) => {
    const client = createClient({
        projectId: process.env.NEXT_PUBLIC_CLUB_ID,
        dataset: "production",
    });
    const builder = imageUrlBuilder(client);

    function urlFor(source) {
        return builder.image(source);
    }

    return (
        <div className={styles.clubsContainer}>
            <Layout>
            <h1 className={`${styles.title} text-3xl mx-auto px-10 justify-center items-center text-center`}>
                Life at IIIT - Lucknow
            </h1>
            <div className={`grid grid-flow-row grid-cols-3 ${styles.clubsGrid}`}>
                <Zoom>
                    {clubs.map((item, index) => (
                        <Link href={`/clubs/${item._id}`} key={index}>
                        <div className='mx-auto justify-center items-center '>
                        <div className={styles.clubCard}>
                                <img
                                    className={styles.clubImage} 
                                    src={urlFor(item.picture[0]).url()}
                                    alt={`Club ${index + 1}`}
                                />
                                <div className={styles.clubName}>{item.name}</div>
                            </div>
                        </div>
                        </Link>
                    ))}
                </Zoom>
            </div>
            </Layout>
        </div>
    )   
}


export async function getServerSideProps(context) {
    const client = createClient({
      projectId: "msx6zvjg",
      dataset: "production",

    });
    const query = `*[_type == "clubs"]`;
    const clubs = await client.fetch(query);

    return {
      props: {
        clubs,
      },
    };
  }

export default Clubs

'use client';

import { useState } from 'react';
import Banner from '@/components/Banner';
import HeaderWrapper from '@/components/Header';
import { createClient } from '@/prismicio';
import Seo from '@/components/Seo';
import styles from '@/components/Homepage/homepage.module.scss';
import MainBlock from '@/components/Homepage/MainBlock';

export default function Home({ page, header, banner }) {
  const { data } = page;
  const [showBanner, setShowBanner] = useState(data?.banner_title[0].text);

  return (
    <div className={styles.homepage}>
      <Seo
        title={page.data.meta_title}
        description={page.data.meta_description}
        image={page.data.meta_image.url}
      />
      {showBanner && (
        <Banner data={banner?.data} setShowBanner={setShowBanner} />
      )}
      <HeaderWrapper header={header} showBanner={showBanner} />
      <MainBlock
        title={data.title}
        description={data.subtitle}
        redirectLabel={data.redirect_label}
        redirectButtonHref={data.redirect_button_href}
        redirectButtonText={data.redirect_button_label}
      />
    </div>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle('homepagenew');
  const header = await client.getSingle('header');
  const banner = await client.getSingle('banner');

  return {
    props: {
      page,
      header,
      banner,
    },
  };
}

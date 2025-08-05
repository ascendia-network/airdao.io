'use client';
import { PrismicNextLink } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import Image from 'next/image';
import chevron from '@/assets/icons/chevron-tail-right.svg';
import styles from './main-block.module.scss';
import { Label } from '../Label';

const MainBlock = ({
  title,
  description,
  redirectLabel,
  redirectButtonHref,
  redirectButtonText,
}) => {
  return (
    <section className={styles['main-block-wrapper']}>
      <div className={`container ${styles['main-block']}`}>
        <Label value={redirectLabel} />

        <div className={styles['main-block__title-description']}>
          <PrismicRichText
            field={title}
            components={{
              paragraph: ({ children }) => <h1>{children}</h1>,
            }}
          />
          <PrismicRichText
            field={description}
            components={{
              paragraph: ({ children }) => <div>{children}</div>,
            }}
          />
        </div>

        <PrismicNextLink
          field={redirectButtonHref}
          className={styles['redirect-button']}
        >
          <PrismicRichText
            field={redirectButtonText}
            components={{
              paragraph: ({ children }) => (
                <span className={styles['redirect-button__text']}>
                  {children}
                </span>
              ),
            }}
          />

          <Image src={chevron} alt="chevron" />
        </PrismicNextLink>
      </div>
    </section>
  );
};

export default MainBlock;

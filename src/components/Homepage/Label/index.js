import { PrismicRichText } from '@prismicio/react';
import styles from './label.module.scss';

export const Label = ({ value }) => {
  return (
    <div className={styles.label}>
      <PrismicRichText
        field={value}
        components={{
          paragraph: ({ children }) => (
            <span className={styles.label__text}>{children}</span>
          ),
        }}
      />
    </div>
  );
};

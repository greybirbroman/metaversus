'use client';

import { motion as m } from 'framer-motion';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import styles from '../styles';
import { TypingText, NewFeatures, TitleText } from '../components';
import { newFeatures, startingFeatures } from '../constants';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <m.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <m.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className='flex-[0.75] flex flex-col justify-center'
      >
        <TypingText title="| What's new" />
        <TitleText title={<>What's new about Metaversus?</>} />
        <div className='mt-[48px] flex flex-wrap justify-between gap-[24px]'>
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </m.div>
      <m.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src='/whats-new.png'
          alt='get-started'
          className='w-[90%] h-[90%] object-contain'
        />
      </m.div>
    </m.div>
  </section>
);

export default WhatsNew;

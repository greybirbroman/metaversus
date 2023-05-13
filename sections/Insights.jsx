'use client';

import { motion as m } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import styles from '../styles';
import { TypingText, InsightCard, TitleText } from '../components';
import { insights } from '../constants';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <m.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title='| Insight' textStyles='text-center' />
      <TitleText title='Insight about metaverse' textStyles='text-center' />
      <ul className='mt-[50px] flex flex-col gap-[30px]'>
        {insights.map((insight, index) => (
          <InsightCard key={`insight-${index}`} {...insight} index={index + 1}/>
        ))}
      </ul>
    </m.div>
  </section>
);

export default Insights;

'use client';

import { motion as m } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion';
import styles from '../styles';
import { TypingText, TitleText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <m.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title='| People on the World' textStyles='text-center' />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles='text-center'
      />
      <m.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className='relative mt-[68px] flex w-full h-[550px]'
      >
        <img src='/map.png' alt='map' className='w-full h-full object-cover' />

        <div className='absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <img
            src='people-02.png'
            alt='people-avatar'
            className='w-full h-full'
          />
        </div>

        <div className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <img
            src='people-03.png'
            alt='people-avatar'
            className='w-full h-full'
          />
        </div>

        <div className='absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <img
            src='people-01.png'
            alt='people-avatar'
            className='w-full h-full'
          />
        </div>
      </m.div>
    </m.div>
  </section>
);

export default World;

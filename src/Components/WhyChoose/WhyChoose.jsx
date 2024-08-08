import React from 'react';
import { FaBus } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const WhyChoose = () => {
  const { t } = useTranslation();

  return (
    <div className="py-14 md:py-28 bg-gray-50">
      <div className="container">
        <h1 data-aos="fade" data-aos-delay="300" className='pb-16 tracking-wider text-2xl font-semibold text-dark text-center'>
          {t('why_choose_title')}
        </h1 >
        <div data-aos="fade" data-aos-delay="300" className='grid grid-cols-2 md:grid-cols-4 gap-14'>
          {/* Card 1 */}
          <div className='text-center flex justify-center items-center flex-col gap-1 px-2'>
            <p className='text-dark/70 font-semibold'>
              {t('why_choose_description_1')}
            </p>
            <p className='text-5xl rotate-90 text-primary text-center translate-x-5'>...</p>
            <FaBus className='text-5xl text-primary' />
          </div>

          {/* Card 2 */}
          <div className='text-center flex justify-center items-center flex-col gap-1 px-2'>
            <p className='text-dark/70 font-semibold'>
              {t('why_choose_description_2')}
            </p>
            <p className='text-5xl rotate-90 text-primary text-center translate-x-5'>...</p>
            <FaBus className='text-5xl text-primary' />
          </div>

          {/* Card 3 */}
          <div className='text-center flex justify-center items-center flex-col gap-1 px-2'>
            <p className='text-dark/70 font-semibold'>
              {t('why_choose_description_3')}
            </p>
            <p className='text-5xl rotate-90 text-primary text-center translate-x-5'>...</p>
            <FaBus className='text-5xl text-primary' />
          </div>

          {/* Card 4 */}
          <div className='text-center flex justify-center items-center flex-col gap-1 px-2'>
            <p className='text-dark/70 font-semibold'>
              {t('why_choose_description_4')}
            </p>
            <p className='text-5xl rotate-90 text-primary text-center translate-x-5'>...</p>
            <FaBus className='text-5xl text-primary' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;

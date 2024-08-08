import React from 'react';
import { useTranslation } from 'react-i18next';
import Apple from "../../assets/png/apple.png";
import Kiwi from "../../assets/png/kiwi.png";
import Lemon from "../../assets/png/lemon.png";
import Leaf from "../../assets/png/leaf.png";
import Tomato from "../../assets/png/tomato.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container py-14 relative">
        <div className='relative z-20'>
          <h1 data-aos="fade-up" data-aos-delay="300" className='py-8 tracking-wider text-2xl font-semibold text-dark text-center'>
            {t('banner_title')}
          </h1>
          <div className='space-y-10'>
            <div data-aos="fade-up" data-aos-delay="500" className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
              <div>
                <p>
                  {t('banner_description_1')}
                </p>
              </div>
              <div>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="300" className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
              <div>
              </div>
              <div>
                <p>
                  {t('banner_description_2')}
                </p>
              </div>
              <div>
              </div>
            </div>
          </div>
          <div>
            <div data-aos="fade-up" data-aos-delay="500" className="flex justify-center mt-10 sm:mt-14">
              <PrimaryButton />
            </div>
          </div>
        </div>
        <div data-aos="fade-right" className='absolute top-5 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100'>
          <img data-aos="fade-right" src={Leaf} alt="" className="max-w-[160px]" />
        </div>
        <div data-aos="fade-right" className='absolute -bottom-16 -left-16 sm:bottom-0 opacity-50 sm:opacity-100'>
          <img src={Tomato} alt="" className="max-w-[280px]" />
        </div>
        <div data-aos="fade-left" className='absolute top-10 -right-16 sm:right-20 opacity-50 sm:opacity-100'>
          <img src={Lemon} alt="" className="max-w-[200px]" />
        </div>
        <div data-aos="fade-left" className='hidden sm:block absolute bottom-0 right-0'>
          <img src={Apple} alt="" className="max-w-[200px]" />
        </div>
        <div data-aos="fade" className="absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2 opacity-50 sm:opacity-100">
          <img src={Kiwi} alt="" className="max-w-[-180px]" />
        </div>
      </div>
    </>
  );
}

export default Banner;


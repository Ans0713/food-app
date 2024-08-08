// Hero.js
import React from 'react';
import HeroImg from "../../assets/hero.png";
import heroBg from "../../assets/heroBg.png";
import PrimaryButton from '../Shared/PrimaryButton';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import './Hero.css'; // Import the CSS file containing the animation styles

const BgStyle = {
    backgroundImage: `url(${heroBg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
};

const Hero = () => {
    const { t } = useTranslation(); // Initialize useTranslation

    // Split the description into words
    const description = t('hero_description');
    const words = description.split(' ');

    return (
        <div style={BgStyle} className='relative z-[-1]'>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
                    <div className='space-y-7 text-dark order-2 sm:order-1'>
                        <h1 data-aos="fade-up" className='text-5xl'>
                            {t('hero_title')} {/* Use translation function */}
                            <span className='text-secondary font-cursive text-7xl'>
                                {t('hero_delivery')}
                            </span>
                            {t('hero_location')}
                        </h1>
                        <p data-aos="fade-up" data-aos-delay="300" className='lg:pr-64'>
                            {words.map((word, index) => (
                                <span
                                  key={index}
                                  className='description-word'
                                  style={{ animationDelay: `${index * 0.5}s` }} // Inline style to set animation delay
                                >
                                    {word}
                                    {index < words.length - 1 && ' '}
                                </span>
                            ))}
                        </p>
                        <div data-aos="fade-up" data-aos-delay="500">
                            <PrimaryButton />
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="500" className='relative z-30 order-1 sm:order-2'>
                        <img src={HeroImg} alt="Hero" className='w-full sm:scale-125 sm:translate-y-16' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;

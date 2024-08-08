import React from 'react';
import BgPolygon from "../../assets/polygon.png";
import Vector from "../../assets/vector-wave.png";
import { FaUser } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const BgStyle = {
    backgroundImage: `url(${BgPolygon})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
    position: "relative"
};

const About = ({ HandlePopup }) => {
  const { t } = useTranslation();

  return (
    <div id="about" style={BgStyle} className='py-14'>
        <div className="container min-h-[500px] relative z-10">
            <h1 data-aos="fade" className='pt-20 tracking-wider text-4xl font-semibold text-white text-center'>
                {t('about_us')} {/* Use translation function here */}
            </h1>

            <div data-aos="fade" data-aos-delay="300" className="bg-white/80 p-10 my-10 rounded-lg shadow-lg">
                <p className='text-lg'>
                    {t('description')} {/* Use translation function here */}
                </p>
                <div className='pt-10 flex justify-center'>
                    <button onClick={HandlePopup} className='flex justify-center items-center gap-2 bg-primary text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300 rounded-lg shadow-md'>
                        <FaUser />
                        {t('my_account')} {/* Use translation function here */}
                    </button>
                </div>
            </div>
        </div>
        <div className="absolute top-0 right-0 w-full">
            <img src={Vector} alt="Vector Wave" className='w-full object-cover' />
        </div>
    </div>
  );
}

export default About;

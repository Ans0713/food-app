import React from 'react';
import { FaCaretDown, FaUser } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { Link } from 'react-router-dom'; // Import Link for routing

const Navlinks = [
    {
        id: 1,
        name: "home",
        link: "/", // Link to the home page
    },
    {
        id: 2,
        name: "about",
        link: "#about", // Anchor link to the about section
    },
    {
        id: 3,
        name: "contact",
        link: "#footer", // Anchor link to the footer section
    },
    {
        id: 4,
        name: "Menu",
        link: "/menu", // Link to the menu page
    }
];

const DropdownLinks = [
    {
        id: 1,
        name: "vegetables",
        link: "#vegetables",
    },
    {
        id: 2,
        name: "fruits",
        link: "#fruits",
    },
    {
        id: 3,
        name: "grains",
        link: "#grains",
    },
];

const Navbar = ({ HandlePopup }) => {
  const { t } = useTranslation();

  const onChangeLang = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <>
      <div data-aos="fade" className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="container flex justify-between py-4 sm:py-3">
          <div className="font-bold text-3xl">{t('logo')}</div>
          <div>
            <ul className='flex items-center gap-10'>
              {Navlinks.map(({ id, name, link }) => (
                <li key={id}>
                  <a href={link} className='inline-block hover:text-primary text-xl font-semibold'>{t(name)}</a>
                </li>
              ))}
              <li className='cursor-pointer group relative'>
                <a
                  href='#'
                  className="inline-block hover:text-primary text-xl font-semibold">
                  <div className='flex items-center gap-[2px] py-2'>
                    {t('dropdown')}
                    <span>
                      <FaCaretDown
                        className='group-hover:rotate-180 transition-transform duration-300'/>
                    </span>
                  </div>
                </a>
                <div className='absolute z-[9999] hidden group-hover:block w-[200px] bg-white text-black shadow-md p-2'>
                  <ul>
                    {DropdownLinks.map(({ id, name, link }) => (
                      <li key={id}>
                        <a href={link} className='block text-xl rounded-md p-2 hover:bg-primary/20 transition-colors'>{t(name)}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li>
                <button onClick={HandlePopup} className='flex justify-center items-center gap-2 bg-secondary text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300'>
                    <FaUser />
                    {t('my_account_button')}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <select defaultValue="en" onChange={onChangeLang} className='p-2 mt-4'>
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="hi">हिन्दी</option>
      </select>
    </>
  );
}

export default Navbar;



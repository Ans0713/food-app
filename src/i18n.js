import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          about_us: 'About Us',
          greeting: 'Fresh & Healthy Meal Plan Delivery in Minami',
          description: `At FreshFeast, we are dedicated to delivering delicious and nutritious meals right to your doorstep. Our meal plans are crafted with the finest ingredients to ensure every bite is both satisfying and healthy. Whether you're looking for a hearty breakfast, a wholesome lunch, or a light dinner, we've got you covered with a variety of options that cater to all tastes and dietary needs. Our team of expert chefs prepares each meal with care and attention, using only the freshest produce and high-quality ingredients. From vibrant salads and savory soups to mouth-watering mains and indulgent desserts, our menu offers a delightful array of dishes designed to keep you energized and satisfied throughout the day. Your taste buds—and your body—will thank you!`,
          my_account: 'My Account',
          home: 'Home',
          about: 'About',
          contact: 'Contact',
          dropdown: 'Categories',
          vegetables: 'Vegetables',
          fruits: 'Fruits',
          grains: 'Grains',
          my_account_button: 'My Account',
          hero_title: 'Fresh & Healthy Meal Plan',
          hero_delivery: 'Delivery',
          hero_location: 'in Minami',
          hero_description: 'Welcome to FreshFeast, where we bring delightful meals to your doorstep with a focus on freshness and health. Explore our diverse menu and enjoy a satisfying dining experience.',
          banner_title: 'Taste the Healthy Difference',
          banner_description_1: `We know that is the greatest value in the modern world. Our healthy meal plan delivery service Good Food in Minami is the answer for those who want to eat healthy, saving time for buying food and preparing delicious, healthy meals.`,
          banner_description_2: `We know that is the greatest value in the modern world. Our healthy meal plan delivery service Good Food in Minami is the answer for those who want to eat healthy, saving time for buying food and preparing delicious, healthy meals.`,
          why_choose_title: 'Why Choose Us',
          why_choose_description_1: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
          why_choose_description_2: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
          why_choose_description_3: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
          why_choose_description_4: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
        }
      },
      fr: {
        translation: {
          about_us: 'À Propos',
          greeting: 'Livraison de plans de repas frais et sains à Minami',
          description: `Chez FreshFeast, nous nous engageons à vous livrer des repas délicieux et nutritifs directement à votre porte. Nos plans de repas sont conçus avec les meilleurs ingrédients pour garantir que chaque bouchée soit à la fois satisfaisante et saine. Que vous recherchiez un petit-déjeuner copieux, un déjeuner complet ou un dîner léger, nous avons ce qu'il vous faut avec une variété d'options qui répondent à tous les goûts et besoins alimentaires. Notre équipe de chefs experts prépare chaque repas avec soin et attention, en utilisant uniquement les produits les plus frais et des ingrédients de haute qualité. Des salades vibrantes et des soupes savoureuses aux plats principaux alléchants et aux desserts indulgents, notre menu propose une gamme délicieuse de plats conçus pour vous garder énergique et satisfait tout au long de la journée. Vos papilles - et votre corps - vous remercieront !`,
          my_account: 'Mon Compte',
          home: 'Accueil',
          about: 'À Propos',
          contact: 'Contact',
          dropdown: 'Catégories',
          vegetables: 'Légumes',
          fruits: 'Fruits',
          grains: 'Grains',
          my_account_button: 'Mon Compte',
          hero_title: 'Plan de Repas Frais et Sain',
          hero_delivery: 'Livraison',
          hero_location: 'à Minami',
          hero_description: 'Bienvenue chez FreshFeast, où nous vous apportons des repas délicieux directement à votre porte avec un accent sur la fraîcheur et la santé. Découvrez notre menu varié et profitez d’une expérience culinaire satisfaisante.',
          banner_title: 'Goûtez la Différence Saine',
          banner_description_1: `Nous savons que est la valeur la plus grande dans le monde moderne. Notre service de livraison de plans de repas sains Good Food à Minami est la réponse pour ceux qui souhaitent manger sainement, en économisant du temps pour acheter de la nourriture et préparer des repas délicieux et sains.`,
          banner_description_2: `Nous savons que est la valeur la plus grande dans le monde moderne. Notre service de livraison de plans de repas sains Good Food à Minami est la réponse pour ceux qui souhaitent manger sainement, en économisant du temps pour acheter de la nourriture et préparer des repas délicieux et sains.`,
          why_choose_title: 'Pourquoi nous choisir',
          why_choose_description_1: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
          why_choose_description_2: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
          why_choose_description_3: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
          why_choose_description_4: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
        }
      },
      hi: {
        translation: {
          about_us: 'हमारे बारे में',
          greeting: 'ताजे और स्वस्थ भोजन योजना की डिलीवरी मिनामी में',
          description: `FreshFeast में, हम आपके दरवाजे तक स्वादिष्ट और पौष्टिक भोजन वितरित करने के लिए समर्पित हैं। हमारे भोजन योजनाएं बेहतरीन सामग्री के साथ तैयार की जाती हैं ताकि हर कौर संतोषजनक और स्वस्थ हो। चाहे आप एक पौष्टिक नाश्ता, एक संतुलित दोपहर का भोजन, या एक हल्का रात का खाना ढूंढ रहे हों, हमारे पास आपके स्वाद और आहार संबंधी जरूरतों के अनुसार विकल्प हैं। हमारी विशेषज्ञ शेफ की टीम हर भोजन को ध्यान और देखभाल के साथ तैयार करती है, केवल ताजे उत्पादों और उच्च गुणवत्ता वाली सामग्री का उपयोग करती है। जीवंत सलाद और स्वादिष्ट सूप से लेकर स्वादिष्ट मुख्य भोजन और लजीज मिठाइयों तक, हमारा मेनू आपको पूरे दिन ऊर्जा और संतोषजनक अनुभव प्रदान करने के लिए डिज़ाइन किया गया है। आपके स्वाद कलिकाएँ - और आपका शरीर - आपको धन्यवाद देंगे!`,
          my_account: 'मेरा खाता',
          home: 'घर',
          about: 'हमारे बारे में',
          contact: 'संपर्क',
          dropdown: 'श्रेणियाँ',
          vegetables: 'सब्जियाँ',
          fruits: 'फल',
          grains: 'अनाज',
          my_account_button: 'मेरा खाता',
          hero_title: 'ताजे और स्वस्थ भोजन योजना',
          hero_delivery: 'डिलीवरी',
          hero_location: 'मिनामी में',
          hero_description: 'FreshFeast में, हम आपके दरवाजे तक स्वादिष्ट और पौष्टिक भोजन वितरित करने के लिए समर्पित हैं। हमारी विविध मेनू का अन्वेषण करें और एक संतोषजनक भोजन अनुभव का आनंद लें.',
          banner_title: 'स्वस्थ अंतर का अनुभव करें',
          banner_description_1: `हम जानते हैं कि आधुनिक दुनिया में सबसे बड़ी कीमत है। हमारी स्वस्थ भोजन योजना वितरण सेवा Good Food in Minami उन लोगों के लिए उत्तर है जो स्वस्थ भोजन करना चाहते हैं, खाने का समय बचाते हुए और स्वादिष्ट, स्वस्थ भोजन तैयार करते हुए।`,
          banner_description_2: `हम जानते हैं कि आधुनिक दुनिया में सबसे बड़ी कीमत है। हमारी स्वस्थ भोजन योजना वितरण सेवा Good Food in Minami उन लोगों के लिए उत्तर है जो स्वस्थ भोजन करना चाहते हैं, खाने का समय बचाते हुए और स्वादिष्ट, स्वस्थ भोजन तैयार करते हुए।`,
          why_choose_title: 'क्यों हमें चुनें',
          why_choose_description_1: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
          why_choose_description_2: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
          why_choose_description_3: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
          why_choose_description_4: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
        }
      }
    },
  });

export default i18n;


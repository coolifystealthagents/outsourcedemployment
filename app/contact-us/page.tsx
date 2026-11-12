import {ContactExperience} from '../inner-pages';
import {Header,Footer} from '../components';
import StandardContactForm from './StandardContactForm';
export const metadata={title:'Contact Us',description:"Your next great working relationship starts here.",alternates:{canonical:'/contact-us'}};
export default function Contact(){return <><Header/><main id="main-content"><ContactExperience><StandardContactForm endpoint="/api/contact" encoding="form"/></ContactExperience></main><Footer/></>}

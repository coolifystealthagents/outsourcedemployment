import {ServicesExperience} from '../refresh-experience';
import {Header,Footer} from '../components';
export const metadata={title:'Services',description:"Find help for a real queue: hiring coordination, onboarding, records, schedules, or workforce reporting. Every role starts with clear responsibilities and an accountable manager.",alternates:{canonical:'/services'}};
export default function Page(){return <><Header/><main id="main-content"><ServicesExperience/></main><Footer/></>}

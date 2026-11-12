import {notFound,redirect} from 'next/navigation';
import {Header,Footer} from '../../../components';
import {allBlogPosts} from '../../../data';
import {Library} from '../../../library';
import {normalizePosts} from '../../../library-normalize';
import {FeaturedComparison} from '../../FeaturedComparison';
export function generateStaticParams(){return Array.from({length:Math.ceil(allBlogPosts.length/20)},(_,i)=>({page:String(i+1)}))}
export async function generateMetadata({params}:{params:Promise<{page:string}>}){const {page}=await params;return {title:'Blog, page '+page,alternates:{canonical:'/blog/page/'+page}}}
export default async function Page({params}:{params:Promise<{page:string}>}){const {page}=await params;const n=Number(page);if(page==='1')redirect('/blog');if(!Number.isInteger(n)||n<1||n>Math.ceil(allBlogPosts.length/20))notFound();return <><Header/><main id="main-content"><Library kind="blog" posts={normalizePosts(allBlogPosts)} page={n} pageSize={20} archive>{n===2&&<FeaturedComparison/>}</Library></main><Footer/></>}
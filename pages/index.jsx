import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import PageLoader from "../components/common/loader/page-loader";

const HeroPage = dynamic(() => import('../components/Home/hero'), {
    suspense: true,
})
const SearchForm = dynamic(() => import('../components/Home/searchForm'), {
    suspense: true,
})
const AboutUs = dynamic(() => import('../components/Home/aboutUs'), {
    suspense: true,
})
const Categories = dynamic(() => import('../components/Home/categories'), {
    suspense: true,
})
const ClinicsSection = dynamic(() => import('../components/Home/clinicsSection'), {
    suspense: true,
})
const LabSection = dynamic(() => import('../components/Home/labSection'), {
    suspense: true,
})
const BlogList = dynamic(() => import('../components/Home/blogList'), {
    suspense: true,
})
const Doctor = dynamic(() => import('../components/Home/doctor'), {
    suspense: true,
})
const Footer = dynamic(() => import('../components/footer/footer'), {
    suspense: true,
})
const Subscribe = dynamic(() => import('../components/Home/subscribe'), {
    suspense: true,
})
const DownloadApp = dynamic(() => import('../components/Home/downloadApp'), {
    suspense: true,
})

export default function Home() {
    return (
        <>
            <Suspense fallback={<PageLoader />}>
                <HeroPage />
                <SearchForm />
                <AboutUs />
                <Categories />
                <DownloadApp />
                <ClinicsSection />
                <LabSection />
                <Doctor />
                <BlogList />
                <Subscribe />
                <Footer />
            </Suspense>
        </>
        // <div className='w-full  bg-blue-500 flex justify-center  items-center '>
        //   <div className='h-1/2 w-1/2 bg-amber-500 flex justify-center items-center'>
        //     Hello world
        //   </div>

        // </div>
    )
}

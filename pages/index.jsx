import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import PageLoader from "../components/common/loader/page-loader";
import MainLayout from '../components/Layouts/MainLayout';

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

const Subscribe = dynamic(() => import('../components/Home/subscribe'), {
    suspense: true,
})
const DownloadApp = dynamic(() => import('../components/Home/downloadApp'), {
    suspense: true,
})

export default function Home() {
    return (
        <MainLayout navbar>
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
            </Suspense>
        </MainLayout>
    )
}

import MyCategory from './components/my-category';
import MyHeroSection from './components/my-hero-section';
import MyNews from './components/my-news';
import MyPost from './components/my-post';
import MySearch from './components/my-search';
import MySlide from './components/my-slide';
import Layout from './Layout';

const Index = () => {
    return (
        <Layout>
            <MySlide />
            <MySearch />
            <MyHeroSection />
            <MyCategory />
            <MyPost />
            <MyNews />
        </Layout>
    );
};

export default Index;

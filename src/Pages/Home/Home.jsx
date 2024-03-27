
import Banner from '../../Component/Home/Banner/Banner';
import About from '../../Component/Home/About/About';
import Services from '../../Component/Home/Services/Services';

const Home = () => {
    return (
        <div>
            {/* banner */}
            <Banner></Banner>
            {/* about */}
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;
import React , {useContext, useEffect} from 'react';
import MainSection from 'app/components/MainPageSections/MainSection';
import VVSection from 'app/components/VVSection';
import VVCarousel from 'app/components/VVCarousel';
import HeroStyleOne from 'app/components/VVHeroes/HeroStyleOne';
import img1 from 'assets/img/carousel/img1.jpg';
import img2 from 'assets/img/carousel/img2.jpg';
import img3 from 'assets/img/carousel/img3.jpg';

const MainPage = ():React.ReactElement => {

    const slides = [
        {
            image: img1,
            title: 'Summit Villa',
            description: 'Spacious room with sea view and king-sized bed.',
            buttonOneText: 'View Details',
            buttonTwoText: 'Book Now',
        },
        {
            image: img2,
            title: 'Summit Villa',
            description: 'Spacious room with sea view and king-sized bed.',
            buttonOneText: 'View Details',
            buttonTwoText: 'Book Now',
        },
        {
            image: img3,
            title: 'Summit Villa',
            description: 'Spacious room with sea view and king-sized bed.',
            buttonOneText: 'View Details',
            buttonTwoText: 'Book Now',
        },
    ];

    return (<>
        <MainSection />
        <VVSection title="Accommodations">
            <VVCarousel slides={slides} />
        </VVSection>
        <VVSection>
            <HeroStyleOne
                headerText="Vista Villas"
                subHeaderText="Relaxing Highland Gateaway"
                paragraphLines={[
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin neque tellus, placerat id nibh ut, auctor finibus sapien. Nunc sit amet commodo nunc. Nunc ultrices augue a sodales pretium. Donec sagittis, nulla eget placerat viverra, arcu massa facilisis augue, ut facilisis felis odio eu enim. Duis pulvinar tortor a arcu dapibus, id feugiat lacus pulvinar. Curabitur eu lectus id nisi condimentum pulvinar. Morbi maximus orci in magna placerat, vel fermentum sapien lobortis. Suspendisse eu risus elit. Fusce sed nisl sit amet nisi hendrerit convallis. Proin sed nisl rutrum, condimentum diam lobortis, venenatis ex. Nullam blandit metus et efficitur pretium. Curabitur sagittis sollicitudin magna, vel venenatis odio. Nam lobortis lorem nunc, vitae porta mi elementum in. Ut eu enim tristique sapien aliquet lobortis. Curabitur nibh nisl, elementum ac suscipit vel, ultricies eu leo. Fusce sit amet gravida magna."
                ]}
            />
        </VVSection>
    </>)
}

export default MainPage;
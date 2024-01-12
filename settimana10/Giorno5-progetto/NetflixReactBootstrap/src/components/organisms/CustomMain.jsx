import CustomPageTitleSection from '../molecules/CustomPageTitleSection'
import CustomGallery from '../molecules/CustomGallery';

const CustomMain = () => {
    return (
        <>
        <CustomPageTitleSection/>
        
        <div className="section1 p-5">
        <h4>Harry Potter</h4>
        <CustomGallery url="http://www.omdbapi.com/?apikey=86c5c8d1&s=harry%20potter" />
        </div>

        <div className="section1 p-5">
        <h4>Lord of the Rings</h4>
        <CustomGallery url="http://www.omdbapi.com/?apikey=86c5c8d1&s=lord%20of%20the%20rings"/>
        </div>

        <div className="section1 p-5">
        <h4>Sciubidubi</h4>
        <CustomGallery url="http://www.omdbapi.com/?apikey=86c5c8d1&s=shrek"/>
        </div>
        
        </>
    )
};

export default CustomMain
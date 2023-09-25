import CompanyLogo from '../assets/CompanyLogo.svg';
import UserImage from '../assets/UserImage.jpg';
const Navbar = () => {
    return (
        <div className="c-navbar">
            <img className="c-navbar__logo" src={CompanyLogo} alt="logo icon" />

            <div className="c-navbar__text">
                <strong>Competition name &#183; </strong> <span>Date</span>
            </div>

            <div className="c-navbar__userDetails">
                <img className="c-navbar__userDetails_img" src={UserImage} alt="user img" />
                <span className="c-navbar__userDetails__userName">Nikola Kavezić</span>
            </div>
        </div>
    );
};

export default Navbar;

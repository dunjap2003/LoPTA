import logo from '../assets/images/logo/svg/logo-no-background.svg';
import fer from '../assets/images/fer_logo/fer_logo_1-removebg-preview.png';
function Footer() {
    return (
        <footer className="py-10 bg-primary">

            <div
                className="container flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0"
            >

                <div
                    className="flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-14 text-tertiary"
                >
                    <img src={logo} alt="" className="mb-1 w-12" style={{ filter: 'brightness(0) invert(1)' }} />

                </div>


                <div className="flex space-x-10">
                    <a href="https://www.fer.unizg.hr/">
                        <img src={fer} alt="" className="h-16 ficon " />
                    </a>

                </div>
            </div>
        </footer>
    );
}
export default Footer;
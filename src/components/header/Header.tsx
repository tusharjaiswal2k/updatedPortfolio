import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import "./Header.css"

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Tushar Jaiswal</h1>
                <h5 className="text-light">Full Stack Developer </h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src="/me.png" alt="ME image" />
                </div>
                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header
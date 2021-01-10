import './styles.css';
import { ReactComponent as YouTubeIcon, ReactComponent } from './youtube.svg';
import { ReactComponent as LinkedinIcon, ReactComponent } from './linkedin.svg';
import { ReactComponent as InstagramIcon, ReactComponent } from './instagram.svg';

function Footer() {
    return (
        <footer className="main-footer">
                App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
                <div>
                    <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                        <YouTubeIcon />
                    </a>
                    <a href="https://www.linkedin.com/school/devsuperior" target="_new">
                        <LinkedinIcon />
                    </a>
                    <a href="https://www.instagram.com/devsuperior.ig">
                        <InstagramIcon />
                    </a>
                </div>
        </footer>
    )
}

export default Footer;
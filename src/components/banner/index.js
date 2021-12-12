import banner from '../../assets/images/banner.png'
import styles from './styles.scss'

export default function Banner() {
    return (
        <div className="banner-wrapper">
            <img className="banner" src={banner} alt="" />
            <h1>
                Everything you need <br />
                to know about <br />
                <strong>Astrology</strong> here
            </h1>
            <h3>Three studentes trying to explain real science! Bazinga!!</h3>
        </div>
    )
}
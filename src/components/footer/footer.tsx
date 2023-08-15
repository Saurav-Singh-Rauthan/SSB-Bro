import {
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

import Styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={Styles.footer}>
      <div className={Styles.socials}>
        <a
          className={Styles.socialsIcon}
          href="https://api.whatsapp.com/send/?phone=917906127544&text&type=phone_number&app_absent=0"
          target="_"
        >
          <FaWhatsapp />
        </a>
        <a
          className={Styles.socialsIcon}
          href="https://t.me/ssbbro/"
          target="_"
        >
          <FaTelegram />
        </a>
        <a
          className={Styles.socialsIcon}
          href="https://ssbbro.netlify.app/"
          target="_"
        >
          <FaFacebookSquare />
        </a>
        <a
          className={Styles.socialsIcon}
          href="https://www.instagram.com/ssbbrohere/"
          target="_"
        >
          <FaInstagram />
        </a>
        <a
          className={Styles.socialsIcon}
          href="https://www.youtube.com/@SSBbrohere"
          target="_"
        >
          <FaYoutube />
        </a>
        <a className={Styles.socialsIcon} href="tel:+91 7906127544">
          <CallRoundedIcon />
        </a>
        <a
          className={Styles.socialsIcon}
          href="https://goo.gl/maps/JNPbrhKvPHmB6hFp9"
          target="_"
        >
          <LocationOnRoundedIcon />
        </a>
      </div>
      <p className={Styles.footerText}>
        © SSB BRO {new Date().getFullYear()} All Right Reserved
      </p>
    </div>
  );
};

export default Footer;

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fcss from "./Footer.module.css";

function Footer(){
    return(
        <>
          <div className={fcss.copyright}>
             <hp>Copyright 	&#169;2024 All rights reserved | Designe by <span className={fcss.other}>Saurabh sen</span> <FontAwesomeIcon icon={faHeart} className={fcss.icon}/></hp>
          </div>
        </>
    )
}

export default Footer;
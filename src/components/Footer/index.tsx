import Link from "next/link";
import Image from "next/image";

import styles from "./Footer.module.scss";
import facebook from "@/assets/facebook-white.svg";
import appStore from "@/assets/app-store.svg";
import playStore from "@/assets/play-store.svg";
import microsoftStore from "@/assets/microsoft-store.svg";
import twitter from "@/assets/twitter-white.svg";
import instagram from "@/assets/instagram-white.svg";

export const Footer: React.FC = (): JSX.Element => {
  return (
    <footer data-testid="footer-test-id" className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerNavigation}>
          <div className={styles.footerNavigationLinks}>
            <Link href="/">Home</Link>
            <span>|</span>
            <Link href="/">Terms and Conditions</Link>
            <span>|</span>
            <Link href="/">Privacy Policy</Link>
            <span>|</span>
            <Link href="/">Collection Statement</Link>
            <span>|</span>
            <Link href="/">Help</Link>
            <span>|</span>
            <Link href="/">Manage Account</Link>
          </div>
          <div className={styles.copyright}>
            Copyright © 2016 DEMO Streaming. All Rights Reserved.
          </div>
        </div>
        <div className={styles.footerButtons}>
          <div className={styles.footerButtonsSocial}>
            <button>
              <Image src={facebook} layout="fill" alt="Facebook" />
            </button>
            <button>
              <Image src={twitter} layout="fill" alt="Twitter" />
            </button>
            <button>
              <Image src={instagram} layout="fill" alt="Instagram" />
            </button>
          </div>
          <div className={styles.footerButtonsStore}>
            <button>
              <Image
                className="mr-5"
                src={appStore}
                layout="fill"
                alt="App Store"
              />
            </button>
            <button className={styles.ml}>
              <Image src={playStore} layout="fill" alt="Play Store" />
            </button>
            <button>
              <Image src={microsoftStore} layout="fill" alt="Microsoft Store" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

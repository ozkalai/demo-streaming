import Link from "next/link";
import styles from "./Footer.module.scss"
import facebook from "@/assets/facebook-white.svg"
import appStore from "@/assets/app-store.svg";
import playStore from "@/assets/play-store.svg";
import microsoftStore from "@/assets/microsoft-store.svg";
import twitter from "@/assets/twitter-white.svg";
import instagram from "@/assets/instagram-white.svg";
import Image from "next/image";

export const Footer: React.FC = (): JSX.Element => {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.nav}>
                    <div className={styles.links}>
                        <Link href="/" >
                        Home
                        </Link>
                        <span>|</span>
                        <Link href="/" >
                        Terms and Conditions
                        </Link>
                        <span>|</span>
                        <Link href="/" >
                        Privacy Policy
                        </Link>
                        <span>|</span>
                        <Link href="/" >
                        Collection Statement
                        </Link>
                        <span>|</span>
                        <Link href="/" >
                        Help
                        </Link>
                        <span>|</span>
                        <Link href="/" >
                        Manage Account
                        </Link>
                    </div>
                    <div>Copyright © 2016 DEMO Streaming. All Rights Reserved.</div>
                </div>
                <div className={styles.us}>
                    <div  className={styles.social}>
                        <button>
                            <Image src={facebook} layout="fill" alt="Facebook" />
                        </button>
                        <button>
                            <Image src={twitter} layout="fill" alt="Twitter"/>
                        </button>
                        <button>
                            <Image src={instagram} layout="fill" alt="Instagram"/>
                        </button>
                    </div>
                    <div className={styles.store}>
                        <button>
                            <Image className="mr-5" src={appStore} layout="fill" alt="App Store" />
                        </button>
                        <button className={styles.ml}>
                            <Image src={playStore} layout="fill" alt="Play Store"  />
                        </button>
                        <button>
                            <Image src={microsoftStore} layout="fill" alt="Microsoft Store" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

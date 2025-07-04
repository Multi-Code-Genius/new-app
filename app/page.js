"use client";
import styles from "./page.module.css";
import { useEffect, useRef, useState, useCallback } from "react";
import logo from "../assets/logo.png";
import { motion, useInView, useReducedMotion } from "framer-motion";
import roket from "../assets/uploadrocket2.png";
import star from "../assets/3dStar.png";
import right from "../assets/Frame.png";
import video from "../assets/Screenshot.png";
import plus from "../assets/pauseCtaFrame.svg";
import rose from "../assets/rose.svg";
import swap from "../assets/Frame.svg";
import settings from "../assets/setting.svg";
import rocket from "../assets/rocket.svg";
import iconPink from "../assets/iconPink.svg";
import iconPurple from "../assets/iconPurple.svg";
import iconOrange from "../assets/iconOrange.svg";
import iconBlue from "../assets/iconBlue.svg";
import iconGreen from "../assets/iconGreen.svg";
import iconRed from "../assets/iconRed.svg";
import cardrocket from "../assets/cardrocket.png";
import uprocket from "../assets/uploadrocket2.png";
import thumb1 from "../assets/thumb1.png";
import thumb2 from "../assets/thumb2.png";
import thumb3 from "../assets/thumb3.png";
import copy from "../assets/transparentCopy.svg";
import cardsettings from "../assets/transparentSetting.svg";
import download from "../assets/transparentDoenload.svg";
import dwimg from "../assets/download.svg";
import copimg from "../assets/copy.svg";
import image from "../assets/pic.svg";
import driveIcon from "../assets/googledrive.png";
import logonew from "../assets/logo3.png";

const features = [
  {
    title: "Turn on/off All Creative Enhancement",
    icon: iconPink.src || iconPink,
    iconClass: styles.iconPink,
  },
  {
    title: "Custom Naming Convention",
    icon: iconPurple.src || iconPurple,
    iconClass: styles.iconPurple,
  },
  {
    title: "Launch Ads Turned off",
    icon: iconOrange.src || iconOrange,
    iconClass: styles.iconOrange,
  },
  {
    title: "Bulk Launch Ads 10X faster",
    icon: iconBlue.src || iconBlue,
    iconClass: styles.iconBlue,
  },
  {
    title: "Enterprise Settings",
    icon: iconGreen.src || iconGreen,
    iconClass: styles.iconGreen,
  },
  {
    title: "UTM Management",
    icon: iconRed.src || iconRed,
    iconClass: styles.iconRed,
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const menuBtnRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const landingRef = useRef();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    console.log("object", landingRef.current);
    const scrollHandler = () => {
      if (landingRef.current) {
        setIsScrolled(landingRef.current.scrollTop > 10);
      }
    };

    landingRef.current?.addEventListener("scroll", scrollHandler);
    return () =>
      landingRef.current?.removeEventListener("scroll", scrollHandler);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        menuBtnRef.current &&
        !menuBtnRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const scrollToSection = useCallback((e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  }, []);
  return (
    <>
      <div className={styles.landing} ref={landingRef}>
        <div className={styles.logoWrapper}>
          <img src={logo.src} alt="logo" width={48} height={48} />
          <span className={styles.brandText}>Blip</span>
        </div>

        <header className={styles.header}>
          <div className={styles.brand}>
            <img src={logo.src} alt="logo" width={48} height={48} />
            <span className={styles.brandText}>Blip</span>
          </div>
          <button
            ref={menuBtnRef}
            className={styles.menuBtn}
            onClick={() => setMenuOpen((open) => !open)}
          >
            Menu
          </button>
          <div
            ref={mobileMenuRef}
            className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}
          >
            <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
              about
            </a>
            <a href="#pricing" onClick={(e) => scrollToSection(e, "pricing")}>
              pricing
            </a>
            <a href="#features" onClick={(e) => scrollToSection(e, "features")}>
              features
            </a>
            <button
              className={styles.startBtn}
              onClick={() => setMenuOpen(false)}
            >
              Start Now
            </button>
          </div>
          <nav
            className={`${styles.navLinks} ${
              isScrolled ? styles.scrolled : ""
            }`}
          >
            <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
              about
            </a>
            <a href="#pricing" onClick={(e) => scrollToSection(e, "pricing")}>
              pricing
            </a>
            <a href="#features" onClick={(e) => scrollToSection(e, "features")}>
              features
            </a>
            <button className={styles.startBtn}>Start Now</button>
          </nav>
        </header>

        <div className={styles.container}>
          <motion.section
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "-100px" }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              ease: "easeOut",
              opacity: { duration: shouldReduceMotion ? 0 : 0.4 },
            }}
            className={styles.textcontainer}
          >
            <div className={styles.heroText}>
              The simplest,
              <span className={styles.inlineIcon}>
                <img src={roket.src} alt="rocket" />
                quickest
              </span>
              <br />
              bulk ad uploader
              <span className={styles.inlineIcon}>
                <img src={star.src} alt="sparkles" />
              </span>
              for Meta.
            </div>
            <div className={styles.subText}>
              <div className={styles.griditem}>
                <img src={right.src} alt="right" width={21} height={21} />
                <div className={styles.text}> Launch 100s of ads together</div>
              </div>
              <div className={styles.griditem}>
                <img src={right.src} alt="right" width={21} height={21} />
                <div className={styles.text}> Unlimited Ad Accounts</div>
              </div>
              <div className={styles.griditem}>
                <img src={right.src} alt="right" width={21} height={21} />
                <div className={styles.text}>
                  {" "}
                  Save your settings and launch an ad in seconds
                </div>
              </div>
            </div>
            <div className={styles.buttoncontainer}>
              <div className={styles.button}>Get Started</div>
              <div className={styles.button1}>View Demo</div>
            </div>
          </motion.section>

          <div className={styles.textcontainer2}>
            <div className={styles.heroText}>
              The simplest,
              <span className={styles.inlineIcon}>
                <img src={roket.src} alt="rocket" />
                <br />
                quickest
              </span>
              bulk ad <br /> uploader
              <span className={styles.inlineIcon}>
                <img src={star.src} alt="sparkles" />
              </span>
              for Meta.
            </div>
            <div className={styles.imageWrapper}>
              <img
                alt="video"
                src={video.src}
                width={1200}
                height={900}
                className={styles.image}
              />
            </div>
            <div className={styles.buttoncontainer}>
              <div className={styles.button}>Get Started</div>
              <div className={styles.button1}>View Demo</div>
            </div>
            <div className={styles.subText}>
              <div className={styles.griditem}>
                <img src={right.src} alt="right" width={21} height={21} />
                <div className={styles.text}> Launch 100s of ads together</div>
              </div>
              <div className={styles.griditem}>
                <img src={right.src} alt="right" width={21} height={21} />
                <div className={styles.text}> Unlimited Ad Accounts</div>
              </div>
              <div className={styles.griditem}>
                <img src={right.src} alt="right" width={21} height={21} />
                <div className={styles.text}>
                  {" "}
                  Save your settings and launch an ad in seconds
                </div>
              </div>
            </div>
          </div>

          <div className={styles.imageWrapper1}>
            <img
              alt="video"
              src={video.src}
              width={1200}
              height={900}
              className={styles.image}
            />
            <button className={styles.overlayButton}>
              <img
                src={plus.src}
                alt="icon"
                className={styles.icon}
                width={50}
                height={50}
              />
              Watch Demo Video
            </button>
          </div>

          <motion.section
            id="about"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "-100px" }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              ease: "easeOut",
              opacity: { duration: shouldReduceMotion ? 0 : 0.4 },
            }}
            className={styles.content}
          >
            <div className={styles.head}>
              <img src={rose.src} width={24} height={24} alt="rose" />
              Escape from Button Clicking Hell
            </div>
            <div className={styles.groupText}>
              <div className={styles.title1}>
                The fastest way to manage multiple ad accounts
              </div>
              <div className={styles.subtitle1}>
                End context-switching whiplash. No more selecting the same
                settings over and over, copy-pasting text dozens of times, or
                sluggish UI.
              </div>
            </div>
            <div className={styles.buttonGroup}>
              <div className={styles.shadowButton}>
                <img src={swap.src} alt="swap" width={30} height={30} />
                <span>Easily Swap Ad Accounts</span>
              </div>
              <div className={styles.shadowButton}>
                <img src={settings.src} alt="settings" width={30} height={30} />
                <span>Persistent Settings</span>
              </div>
              <div className={styles.shadowButton}>
                <img src={rocket.src} alt="rocket" width={30} height={30} />
                <span>Fast launch all creatives</span>
              </div>
            </div>
          </motion.section>

          <div className={styles.mainGrid}>
            <div className={styles.grid}>
              <div className={styles.card}>
                <div className={styles.textwrap}>
                  <img
                    src={cardrocket.src}
                    alt="rocket"
                    width={31}
                    height={31}
                  />
                  <div className={styles.tag}>2 fast 2 furios</div>
                </div>
                <div className={styles.title2}>
                  Upload multiple creatives at once
                </div>
                <div className={styles.cardDes}>
                  Automate your ad creation flow with lightning-fast bulk
                  uploads, saved settings, and ad previews — all in one clean
                  dashboard.
                </div>
                <div className={styles.uploadContainer}>
                  <div className={styles.contentWrap}>
                    <div className={styles.uploadHeader}>
                      <img
                        src={uprocket.src}
                        alt="rocket"
                        width={50}
                        height={50}
                      />
                      <span>
                        <strong>30 Files uploaded</strong> to a new adset
                      </span>
                    </div>
                    <div className={styles.progressBar}>
                      <div className={styles.progressBarFill}></div>
                    </div>
                  </div>

                  <div className={styles.thumbnailStack}>
                    <img
                      src={thumb2.src}
                      alt="thumb1"
                      className={` ${styles.leftcard}`}
                    />
                    <img
                      src={thumb3.src}
                      alt="thumb2"
                      className={`${styles.centercard}`}
                    />
                    <img
                      src={thumb1.src}
                      alt="thumb3"
                      className={`${styles.rightcard}`}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.card4}>
                <div className={styles.textwrap}>
                  <img
                    src={cardsettings.src}
                    alt="copy"
                    width={31}
                    height={31}
                  />
                  <div className={styles.tag}>
                    Every setting everywhere at once
                  </div>
                </div>
                <div className={styles.title2}>
                  Persistent Settings Per Ad Account
                </div>
                <div className={styles.cardDes}>
                  UTMs, page selections, ad name formulas, all saved, per ad
                  account, so nothing resets on reload.
                </div>
                <div className={styles.gridwrap1}>
                  <div className={styles.gridcontainer}>
                    <div className={styles.stepbadge}>1</div>
                    <div className={styles.point}>
                      Toggle all Meta Creative Enhancements
                    </div>
                  </div>
                  <div className={styles.gridcontainer}>
                    <div className={styles.stepbadge}>2</div>
                    <div className={styles.point}>
                      Default CTA, Links and UTMs
                    </div>
                  </div>
                  <div className={styles.gridcontainer}>
                    <div className={styles.stepbadge}>3</div>
                    <div className={styles.point}>
                      Custom Ad Naming Conventions
                    </div>
                  </div>
                  <div className={styles.addbutton1}>save settings</div>
                </div>
              </div>
            </div>
            <div className={styles.grid}>
              <div className={styles.card2}>
                <div className={styles.textwrap}>
                  <img src={copy.src} alt="copy" width={31} height={31} />
                  <div className={styles.tag}>Saving private templates</div>
                </div>
                <div className={styles.title2}>
                  Apply saved templates for copy, CTA, and links
                </div>
                <div className={styles.cardDes}>
                  Stop wasting time in Meta Ads Manager's clunky interface.
                  Simply select your ideal settings once. We take care of the
                  rest.
                </div>
                <div className={styles.gridwrap}>
                  <div className={styles.gridcontainer}>
                    <img src={dwimg.src} alt="rocket" width={20} height={20} />
                    <div className={styles.point}>
                      Import recently used copy from Meta
                    </div>
                  </div>
                  <div className={styles.gridcontainer}>
                    <img src={copimg.src} alt="rocket" width={20} height={20} />
                    <div className={styles.point}>
                      Import recently used copy from Meta
                    </div>
                  </div>
                  <div className={styles.gridcontainer}>
                    <img src={image.src} alt="rocket" width={20} height={20} />
                    <div className={styles.point}>
                      Import recently used copy from Meta
                    </div>
                  </div>
                  <div className={styles.addbutton}>+ Add New Template</div>
                </div>
              </div>
              <div className={styles.card3}>
                <div className={styles.textwrap}>
                  <img src={download.src} alt="rocket" width={31} height={31} />
                  <div className={styles.tag}>Arrival</div>
                </div>
                <div className={styles.title2}>
                  No more upload, download hell.
                </div>
                <div className={styles.cardDes}>
                  No need to spend hours downloading hundreds of ad assets. With
                  Blip, you can one-click deploy media from your Drive to Meta
                  Ads Manager.
                </div>
                <div className={styles.uploadContainer1}>
                  <div className={styles.uploadIconWrap1}>
                    <img
                      src={driveIcon.src}
                      alt="Drive"
                      width={56}
                      height={50}
                    />
                  </div>
                  <div className={styles.contentWrap1}>
                    <div className={styles.progressBar1}>
                      <div className={styles.progressBarFill1}></div>
                    </div>
                  </div>
                  <div>
                    <img
                      src={logonew.src}
                      alt="Rocket"
                      width={110}
                      height={110}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.section
            className={styles.wrapperIcon}
            id="features"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "-100px" }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              ease: "easeOut",
              opacity: { duration: shouldReduceMotion ? 0 : 0.4 },
            }}
          >
            <div className={styles.badgeTitle}>Built by the best</div>
            <h2 className={styles.title}>
              Blip has been built by people with over
              <br />
              10 years of experience launching ads
            </h2>
            <p className={styles.subtitle}>
              The team behind blip has managed over 10mil in ad spend. <br />
              The experience has been tailored to the absolute essentials which
              will improve your quality of life.
            </p>
            <div className={styles.featuresGrid}>
              {features.map((feature, index) => (
                <div key={index} className={styles.featureItem}>
                  <div className={`${styles.iconBox} ${feature.iconClass}`}>
                    <img src={feature.icon} alt={feature.title} />
                  </div>
                  <p className={styles.featureText}>{feature.title}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="pricing"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "-100px" }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              ease: "easeOut",
              opacity: { duration: shouldReduceMotion ? 0 : 0.4 },
            }}
            className={styles.wrapper}
          >
            <div className={styles.container2}>
              <div className={styles.left}>
                <div className={styles.badge}>
                  1 Flat Price. Unlimited Ad Accounts
                </div>
                <h2 className={styles.price1}>Pricing</h2>
                <p className={styles.description}>
                  UTMs, page selections, ad name formulas — all saved, per ad
                  account, so nothing resets on reload.
                </p>
                <button className={styles.cta}>Start Posting Ads</button>
                <p className={styles.teamNote}>
                  have a lot of people on your team?
                </p>
                <p className={styles.teamComing}>Team seats Coming Soon</p>
              </div>

              <div className={styles.right}>
                <div className={styles.price}>$500/month</div>
                <ul className={styles.features}>
                  <li className={styles.feature}>
                    Launch 100s of ads together
                  </li>
                  <li className={styles.feature}>Unlimited Ad Accounts</li>
                  <li className={styles.feature}>Persistent Settings</li>
                </ul>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
}

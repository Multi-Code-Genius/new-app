"use client";
import styles from "./page.module.css";
import { useEffect, useRef, useState, useCallback } from "react";
import logo from "../assets/logo.webp";
import { motion, useReducedMotion } from "framer-motion";
import roket from "../assets/uploadrocket2.png";
import star from "../assets/star.png";
import right from "../assets/Frame.webp";
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
import cardrocket from "../assets/tranparentRocket.svg";
import uprocket from "../assets/uploadrocket2.png";
import thumb1 from "../assets/thumb1.png";
import thumb2 from "../assets/thumb2.png";
import thumb3 from "../assets/thumb3.png";
import copy from "../assets/transparentCopy.svg";
import check from "../assets/checkmark.svg";
import cardsettings from "../assets/transparentSetting.svg";
import download from "../assets/transparentDoenload.svg";
import dwimg from "../assets/download.svg";
import copimg from "../assets/copy.svg";
import image from "../assets/pic.svg";
import driveIcon from "../assets/googledrive.png";
import mobileHero from "../assets/mobilehero1.webp";

const features = [
  {
    title: "Turn on/off All Creative Enhancement",
    icon: iconPink.src,
    iconClass: styles.iconPink,
  },
  {
    title: "Custom Naming Convention",
    icon: iconPurple.src,
    iconClass: styles.iconPurple,
  },
  {
    title: "Launch Ads Turned off",
    icon: iconOrange.src,
    iconClass: styles.iconOrange,
  },
  {
    title: "Bulk Launch Ads 10X faster",
    icon: iconBlue.src,
    iconClass: styles.iconBlue,
  },
  {
    title: "Enterprise Settings",
    icon: iconGreen.src,
    iconClass: styles.iconGreen,
  },
  {
    title: "UTM Management",
    icon: iconRed.src,
    iconClass: styles.iconRed,
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const menuBtnRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const landingRef = useRef();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);
  const [showButton1, setShowButton1] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 576);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handlePlay = () => {
    setIsVideoPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      setShowButton1(false);
    };

    video.addEventListener("play", handlePlay);

    return () => {
      video.removeEventListener("play", handlePlay);
    };
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
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
        <div className={styles.container}>
          <div>
            <div className={styles.logoWrapper}>
              <img
                src={logo.src}
                alt="logo"
                width={48}
                height={48}
                className={styles.blipLogo}
              />
              <span className={styles.brandText}>Blip</span>
            </div>
            <header className={styles.header}>
              <div className={styles.brand}>
                <img
                  src={logo.src}
                  alt="logo"
                  width={32}
                  height={32}
                  className={styles.blipLogo}
                />
                <span className={styles.brandText}>Blip</span>
              </div>
              <button
                className={styles.menuBtn}
                ref={menuBtnRef}
                onClick={() => setMenuOpen((open) => !open)}
              >
                <div className={styles.menuBtnText}>Menu</div>
              </button>

              <div
                ref={mobileMenuRef}
                className={`${styles.mobileMenu} ${
                  menuOpen ? styles.open : ""
                }`}
              >
                <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
                  about
                </a>
                <a
                  href="#pricing"
                  onClick={(e) => scrollToSection(e, "pricing")}
                >
                  pricing
                </a>
                <a
                  href="#features"
                  onClick={(e) => scrollToSection(e, "features")}
                >
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
                <a
                  href="#pricing"
                  onClick={(e) => scrollToSection(e, "pricing")}
                >
                  pricing
                </a>
                <a
                  href="#features"
                  onClick={(e) => scrollToSection(e, "features")}
                >
                  features
                </a>
                <button className={styles.startBtn}>Start Now</button>
              </nav>
            </header>
          </div>

          <motion.section
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "-100px" }}
            transition={{
              duration: shouldReduceMotion ? 0 : isMobile ? 0.2 : 0.7,
              ease: "easeOut",
            }}
            className={styles.textcontainer}
          >
            <div className={styles.heroText}>
              The simplest,
              <span className={styles.inlineIcon}>
                <img
                  src={roket.src}
                  alt="rocket"
                  className={styles.herorocket}
                />
                quickest
                <span style={{ marginRight: "5px" }} />
              </span>
              <br />
              bulk ad uploader
              <span className={styles.inlineIcon}>
                <img src={star.src} alt="sparkles" className={styles.sparkle} />
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

          <motion.section
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.3,
              margin: isMobile ? "0px" : "-100px",
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : isMobile ? 0.2 : 0.7,
              ease: "easeOut",
            }}
            className={styles.textcontainer2}
          >
            <img
              src={mobileHero.src}
              width={221}
              height={331}
              alt="mobilehero"
              style={{ paddingBottom: 11 }}
            />
            <div className={styles.heroText}>
              The simplest,
              <br />
              quickest bulk ad <br /> uploader for
              <br />
              Meta{" "}
              <span className={`${styles.inlineIcon} ${styles.sparkle}`}>
                <img src={star.src} alt="sparkles" />
              </span>{" "}
            </div>
            <div className={styles.mobilesubtext}>
              Launch 100s of ads together. Unlimited Ad Accounts. Save your
              settings and launch ads in seconds
            </div>

            <div className={styles.buttoncontainer}>
              <div className={styles.button1}>View Demo</div>
            </div>
            <div className={styles.imageWrapper}>
              <div className={styles.videoContainer}>
                {!isVideoPlaying ? (
                  <>
                    <img
                      src={video.src}
                      alt="Video Thumbnail"
                      className={`${styles.image} ${styles.aspectImage}`}
                      onClick={handlePlay}
                    />
                    <button
                      onClick={handlePlay}
                      className={styles.overlayButton}
                    >
                      <img
                        src={plus.src}
                        alt="icon"
                        className={styles.icon2}
                        width={24}
                        height={24}
                      />
                      Watch Demo Video
                    </button>
                  </>
                ) : (
                  <video
                    ref={videoRef}
                    className={`${styles.image} ${styles.aspectVideo}`}
                    controls
                    muted
                    autoPlay
                    loop
                    style={{ opacity: 1, transition: "opacity 0.3s ease" }}
                  >
                    <source src="../videos/sample.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </div>
          </motion.section>

          <div className={styles.imageWrapper1}>
            {!isVideoPlaying ? (
              <>
                <img
                  src={video.src}
                  alt="Video Thumbnail"
                  className={`${styles.image} ${styles.aspectImage}`}
                  onClick={handlePlay}
                />
                <button onClick={handlePlay} className={styles.overlayButton}>
                  <img
                    src={plus.src}
                    alt="icon"
                    className={styles.icon2}
                    width={24}
                    height={24}
                  />
                  Watch Demo Video
                </button>
              </>
            ) : (
              <video
                ref={videoRef}
                className={`${styles.image} ${styles.aspectVideo}`}
                width={1200}
                height={900}
                controls
                muted
                autoPlay
                loop
                style={{ opacity: 1, transition: "opacity 0.3s ease" }}
              >
                <source src="../videos/sample.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>

          <motion.section
            id="about"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.3,
              margin: isMobile ? "0px" : "-100px",
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              ease: "easeOut",
            }}
            className={`${styles.content} ${styles.nopadding}`}
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
                <div className={styles.shadowWrapper}>
                  <img
                    src={swap.src}
                    alt="swap"
                    width={30}
                    height={30}
                    className={styles.myImg}
                  />
                  <span>Easily Swap Ad Accounts</span>
                </div>
              </div>
              <div className={styles.shadowButton}>
                <div className={styles.shadowWrapper}>
                  <img
                    src={settings.src}
                    alt="settings"
                    width={30}
                    height={30}
                    className={styles.myImg}
                  />
                  <span>Persistent Settings</span>
                </div>
              </div>
              <div className={styles.shadowButton}>
                <div className={styles.shadowWrapper}>
                  <img
                    src={rocket.src}
                    alt="rocket"
                    width={30}
                    height={30}
                    className={styles.rocketIcon}
                  />
                  <span>Fast launch all creatives</span>
                </div>
              </div>
            </div>
          </motion.section>

          <div className={styles.mainGrid}>
            <div className={styles.grid}>
              <div className={styles.card}>
                <div className={styles.cardcontainer}>
                  <div className={styles.textwrap}>
                    <img
                      src={cardrocket.src}
                      alt="rocket"
                      width={33}
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
                </div>

                <div className={styles.uploadContainer}>
                  <div className={styles.contentWrap}>
                    <div className={styles.uploadHeader}>
                      <img
                        src={uprocket.src}
                        alt="rocket"
                        width={45}
                        height={45}
                      />
                      <div className={styles.subheadspan}>
                        <strong>30 Files uploaded</strong>
                        <div className={styles.subhead}>to a new adset</div>
                      </div>
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
                <div>
                  <div className={styles.textwrap}>
                    <img
                      src={cardsettings.src}
                      alt="copy"
                      width={24}
                      height={24}
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
                  <div className={styles.addbutton1}>Save Settings</div>
                </div>
              </div>
              <div className={styles.mobilecard2}>
                <div>
                  <div className={styles.textwrap}>
                    <img src={copy.src} alt="copy" width={24} height={24} />
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
                </div>

                <div className={styles.gridwrap}>
                  <div className={styles.gridcontainer}>
                    <img src={dwimg.src} alt="rocket" width={18} height={18} />
                    <div className={styles.point}>
                      Import recently used copy from Meta
                    </div>
                  </div>
                  <div className={styles.gridcontainer}>
                    <img src={copimg.src} alt="rocket" width={18} height={18} />
                    <div className={styles.point}>
                      Save Variations of Primary Text and Headlines
                    </div>
                  </div>
                  <div className={styles.gridcontainer}>
                    <img src={image.src} alt="rocket" width={18} height={18} />
                    <div className={styles.point}>
                      Making ads using new template
                    </div>
                  </div>
                  <div className={styles.addbutton}>+ Add New Template</div>
                </div>
              </div>
            </div>
            <div className={styles.grid}>
              <div className={styles.mobilecard4}>
                <div>
                  <div className={styles.textwrap}>
                    <img
                      src={cardsettings.src}
                      alt="copy"
                      width={24}
                      height={24}
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
                  <div className={styles.addbutton1}>Save Settings</div>
                </div>
              </div>
              <div className={styles.card2}>
                <div>
                  <div className={styles.textwrap}>
                    <img src={copy.src} alt="copy" width={24} height={24} />
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
                      Save Variations of Primary Text and Headlines
                    </div>
                  </div>
                  <div className={styles.gridcontainer}>
                    <img src={image.src} alt="rocket" width={20} height={20} />
                    <div className={styles.point}>
                      Making ads using new template
                    </div>
                  </div>
                  <div className={styles.addbutton}>+ Add New Template</div>
                </div>
              </div>
              <div className={styles.card3}>
                <div>
                  <div className={styles.textwrap}>
                    <img
                      src={download.src}
                      alt="rocket"
                      width={24}
                      height={24}
                    />
                    <div className={styles.tag}>Arrival</div>
                  </div>
                  <div className={styles.title2}>
                    No more upload, download hell.
                  </div>
                  <div className={styles.cardDes}>
                    No need to spend hours downloading hundreds of ad assets.
                    With Blip, you can one-click deploy media from your Drive to
                    Meta Ads Manager.
                  </div>
                </div>

                <div className={styles.uploadContainer1}>
                  <div className={styles.uploadIconWrap1}>
                    <img
                      src={driveIcon.src}
                      alt="Drive"
                      className={styles.drive}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className={styles.contentWrap1}>
                    <div className={styles.progressBar1}>
                      <div className={styles.progressBarFill1}></div>
                    </div>
                  </div>
                  <div className={styles.uploadIconWrap1}>
                    <img
                      src={logo.src}
                      alt="Rocket"
                      width={92}
                      height={92}
                      className={styles.rocket}
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
            viewport={{
              once: true,
              amount: 0.3,
              margin: isMobile ? "0px" : "-100px",
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : isMobile ? 0.2 : 0.7,
              ease: "easeOut",
            }}
          >
            <div className={styles.badgeTitle}>Built by the best</div>
            <h2 className={`${styles.title} ${styles.titleupdate}`}>
              Blip has been built by people with over 10 years of experience
              launching ads
            </h2>
            <div className={`${styles.subtitle} ${styles.nosubtitle}`}>
              The team behind blip has managed over 10mil in ad spend. <br />
              The experience has been tailored to the absolute essentials which
              will improve your quality of life.
            </div>
            <div className={styles.featuresGrid}>
              {features.map((feature, index) => (
                <div key={index} className={styles.featureItem}>
                  {feature.title === "Launch Ads Turned off" ? (
                    <div
                      className={`${styles.iconBox} ${styles.activeToggle} ${feature.iconClass}`}
                    >
                      <img src={iconOrange.src} alt="toggle" />
                    </div>
                  ) : (
                    <div className={`${styles.iconBox} ${feature.iconClass}`}>
                      <img src={feature.icon} alt={feature.title} />
                    </div>
                  )}
                  <p className={styles.featureText}>{feature.title}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="pricing"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.3,
              margin: isMobile ? "0px" : "-100px",
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : isMobile ? 0.2 : 0.7,
              ease: "easeOut",
            }}
            className={styles.wrapper}
          >
            <div className={styles.container2}>
              <div className={styles.left}>
                <div className={styles.badge}>
                  1 Flat Price. Unlimited Ad Accounts
                </div>
                <div className={styles.price1}>Pricing</div>
                <div className={styles.description}>
                  UTMs, page selections, ad name formulas — all saved, per ad
                  account, so nothing resets on reload.
                </div>
                <button className={styles.ctaBtn}>Start Posting Ads</button>
                <div className={styles.teamNote}>
                  have a lot of people on your team?
                </div>
                <p className={styles.teamComing}>Team seats Coming Soon</p>
              </div>

              <div className={styles.right}>
                <div className={styles.price}>$500/month</div>
                <ul className={styles.features}>
                  <li className={styles.feature}>
                    <span className={styles.icon}>
                      <img src={check.src} alt="check" width={14} height={14} />
                    </span>
                    Launch 100s of ads together
                  </li>
                  <li className={styles.feature}>
                    <span className={styles.icon}>
                      <img src={check.src} alt="check" width={14} height={14} />
                    </span>
                    Unlimited Ad Accounts
                  </li>
                  <li className={styles.feature}>
                    <span className={styles.icon}>
                      <img src={check.src} alt="check" width={14} height={14} />
                    </span>
                    Persistent Settings
                  </li>
                </ul>
                <p className={styles.teamNoteSm}>
                  have a lot of people on your team?
                </p>
                <p className={styles.comingSoonSm}>Team seats Coming Soon</p>
                <button className={styles.ctaSm}>Start Posting Ads</button>
              </div>
            </div>
          </motion.section>
          <motion.section
            className={styles.footer}
            id="features"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.3,
              margin: isMobile ? "0px" : "-100px",
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : isMobile ? 0.2 : 0.7,
              ease: "easeOut",
            }}
          >
            <div className={styles.footerLeft}>
              <div className={styles.leftTop}>
                <img
                  src={logo.src}
                  alt="logo"
                  width={32}
                  height={32}
                  className={styles.blipLogo}
                />
                <span className={styles.brandTextFooter}>Blip</span>
              </div>

              <a
                href="mailto:shree@withblip.com"
                className={styles.footerEmail}
              >
                shree@withblip.com
              </a>
            </div>
            <div className={styles.footerRight}>
              <a
                href="https://www.withblip.com/privacy-policy"
                className={styles.footerPolicies}
                target="_blank"
              >
                Privacy Policy
              </a>
              <a
                href="https://www.withblip.com/terms-of-service"
                className={styles.footerPolicies}
                target="_blank"
              >
                Terms of Service
              </a>
              <div className={styles.footerPoliciesNew}>
                Blip use and transfer of information received from Google APIs
                to any other app will adhere to{" "}
                <a href="https://developers.google.com/workspace/workspace-api-user-data-developer-policy">
                  Workspace API User Data and Developer Policy
                </a>
                , including the{" "}
                <a href="https://developers.google.com/workspace/workspace-api-user-data-developer-policy#limited-use">
                  Limited use of user data.
                </a>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
}

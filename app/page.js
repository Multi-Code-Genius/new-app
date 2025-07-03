"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
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

export default function Home() {
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

  const features2 = [
    {
      tag: "🚀 2 fast 2 furious",
      title: "Upload multiple creatives at once",
      description:
        "Automate your ad creation flow with lightning-fast bulk uploads, saved settings, and ad previews — all in one clean dashboard.",
      highlights: ["30 files uploaded to a new client"],
      footer: "📸",
      type: "red",
    },
    {
      tag: "💾 Saving private templates",
      title: "Apply saved templates for copy, CTA, and links",
      description:
        "Stop wasting time in Meta Ads Manager’s clunky interface. Simply select your ideal settings once. We take care of the rest.",
      highlights: [
        "Import recently used copy from Meta",
        "Save Variations of Primary Text and Headlines",
        "Making ads using new template",
      ],
      button: "+ Add New Template",
      type: "blue",
    },
    {
      tag: "🛠️ Every setting everywhere at once",
      title: "Persistent Settings Per Ad Account",
      description:
        "UTMs, page selections, ad name formulas, all saved, per ad account, so nothing resets on reload.",
      highlights: [
        "Toggle all Meta Creative Enhancements",
        "Default CTAs, Links and UTMs",
        "Custom Ad Naming Conventions",
      ],
      button: "Save Settings",
      type: "green",
    },
    {
      tag: "📁 Arrival",
      title: "No more upload, download hell.",
      description:
        "No need to spend hours downloading hundreds of assets. With Blip, you can one-click deploy media from your Drive to Meta Ads Manager.",
      highlights: ["🚀", "🧠"],
      type: "orange",
    },
  ];

  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.logocontainer}>
          <img src={logo.src} alt="logo" width={48} height={48} />
          <div className={styles.logo}>Blip</div>
        </div>
        <div className={styles.navbar}>
          {["about", "pricing", "features"].map((item) => (
            <a
              key={item}
              onClick={() => setActive(item)}
              className={styles.navlink}
            >
              {item}
            </a>
          ))}
          <button className={styles.cta}>Start Now</button>
        </div>
      </div>

      <div className={styles.container}>
        {/* hero section */}
        <div className={styles.textcontainer}>
          <div className={styles.heroText}>
            The simplest,
            <span className={styles.inlineIcon}>
              <img src={roket.src} alt="rocket" width={120} height={120} />
              quickest
            </span>
            <br />
            bulk ad uploader
            <span className={styles.inlineIcon}>
              <img src={star.src} alt="sparkles" width={120} height={120} />
              for Meta.
            </span>
          </div>
          <div className={styles.subText}>
            <div className={styles.ishika}>
              <img src={right.src} alt="right" width={21} height={21} />
              <div className={styles.text}> Launch 100s of ads together</div>
            </div>
            <div className={styles.ishika}>
              <img src={right.src} alt="right" width={21} height={21} />
              <div className={styles.text}> Unlimited Ad Accounts</div>
            </div>
            <div className={styles.ishika}>
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
        </div>

        {/* screensot */}

        <div className={styles.imageWrapper}>
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

        {/* xytz */}

        <div className={styles.content}>
          <div className={styles.head}>
            <img src={rose.src} width={24} height={24} alt="rose" />
            Escape from Button Clicking Hell
          </div>
          <div className={styles.title1}>
            The fastest way to manage multiple ad accounts
          </div>
          <div className={styles.subtitle1}>
            End context-switching whiplash. No more selecting the same settings
            over and over, copy-pasting text dozens of times, or sluggish UI.
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

          {/* box section */}
        </div>

        {/* box section */}

        <div className={styles.grid}>
          {features2.map((feature, i) => (
            <div key={i} className={`${styles.card} ${styles[feature.type]}`}>
              <div className={styles.tag}>{feature.tag}</div>
              <h3 className={styles.title2}>{feature.title}</h3>
              <p className={styles.description}>{feature.description}</p>
              <ul className={styles.highlightList}>
                {feature.highlights.map((item, idx) => (
                  <li key={idx} className={styles.highlight}>
                    {item}
                  </li>
                ))}
              </ul>
              {feature.button && (
                <button className={styles.button}>{feature.button}</button>
              )}
              {feature.footer && (
                <div className={styles.footerIcon}>{feature.footer}</div>
              )}
            </div>
          ))}
        </div>

        {/* feature Section */}

        <div className={styles.wrapperIcon}>
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
        </div>

        {/* price section */}

        <div className={styles.wrapper}>
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
                <li className={styles.feature}>Launch 100s of ads together</li>
                <li className={styles.feature}>Unlimited Ad Accounts</li>
                <li className={styles.feature}>Persistent Settings</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

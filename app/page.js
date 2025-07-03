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

export default function Home() {
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
        <div className={styles.textcontainer}>
          <div className={styles.heroText}>
            The simplest,
            <span className={styles.inlineIcon}>
              <img src={roket.src} alt="rocket" width={120} height={120} />
              quickest
            </span>
            <br />
            bulk ad uploader{" "}
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
        <div className={styles.content}>
          <div className={styles.head}>
            <img src={rose.src} width={24} height={24} alt="rose" />
            Escape from Button Clicking Hell
          </div>
          <div className={styles.title}>
            The fastest way to manage multiple ad accounts
          </div>
          <div className={styles.subtitle}>
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
        </div>
      </div>
    </div>
  );
}

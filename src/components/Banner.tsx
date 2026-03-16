"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./banner.module.css";

const bannerImages = [
  "/img/cover.jpg",
  "/img/cover2.jpg",
  "/img/cover3.jpg",
  "/img/cover4.jpg",
];

export default function Banner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const router = useRouter();

  const handleBannerClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
  };

  const handleSelectVenueClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    router.push("/venue");
  };

  return (
    <div className={styles.banner} onClick={handleBannerClick}>
      <Image
        src={bannerImages[currentImageIndex]}
        alt="Venue banner background"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.tagline}>where every event finds its venue</h1>
      </div>
      <button className={styles.selectVenueButton} onClick={handleSelectVenueClick}>
        Select Venue
      </button>
    </div>
  );
}

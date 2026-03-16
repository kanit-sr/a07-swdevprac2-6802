import Image from "next/image";
import styles from "./banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      {/* Background image จาก Unsplash (free to use) */}
      <Image
        src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600&q=80"
        alt="Venue banner background"
        fill
        style={{ objectFit: "cover" }}
        priority
      />

      {/* Overlay สีเข้มทับรูปเพื่อให้อ่านข้อความง่ายขึ้น */}
      <div className={styles.overlay} />

      {/* ข้อความกลาง Banner */}
      <div className={styles.content}>
        <h1 className={styles.tagline}>where every event finds its venue</h1>
      </div>
    </div>
  );
}

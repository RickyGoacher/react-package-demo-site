"use client"
import classes from "./page.module.css";
import Image from "next/image";
import EmulatorImage from "@/app/images/emulator-demo.png";
import FilterImage from "@/app/images/filter-component.png";

export default function Home() {
  return (
    <div className={classes["content"]}>   
      <h1>React Packages Demo Site</h1>
      <div className={classes["info-section"]}>
        <h2>About this site</h2>
        <p>This site is for displaying demos of various React packages I&apos;ve created, gives examples of usage and provides instructions for configuration.</p>
      </div>
      <div className={classes["image-container"]}>
        <div className={classes["image-wrapper"]}>
          <Image alt="" src={EmulatorImage} height={400} width={600}></Image>
        </div>
        <div className={classes["image-wrapper"]}>
          <Image alt="" src={FilterImage} height={400} width={400}></Image>
        </div>
      </div>
    </div>
  );
}

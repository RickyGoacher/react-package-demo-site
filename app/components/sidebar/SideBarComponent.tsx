"use client"

import Link from "next/link";
import classes from "./Sidebar.module.css";
import { ReactNode, useState } from "react";

interface SidebarInterface {
    children: ReactNode;
}

const SideBarComponent = (props:SidebarInterface) => {

    const [getMenuState, setMenuState] = useState(true);

    return (
        <>
        <aside className={`${classes["sidebar"]} ${getMenuState ? classes["active"] : classes["closed"]}`}>
            <div className={classes["top-menu"]}>
                <span className={`${classes["nav-icon"]} ${getMenuState ? classes["open"] : classes["closed"]}`} onClick={() => setMenuState(!getMenuState)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>
            <ul>
                <li><Link href="/tab-component">Tabs Component</Link></li>
                <li><Link href="/accordion-component">Accordion Component</Link></li>
                <li><Link href="/estimated-delivery-component">Estimated Delivery Component</Link></li>
                <li><Link href="/loadmore-component">Load More Component</Link></li>
                <li><Link href="/filter-component">Filter Component</Link></li>
                <li><Link href="/device-emulator-component">Device Emulator Component</Link></li>
                <li><Link href="/popup-component">Popup Component</Link></li>
                <li><Link href="/stepper-component">Stepper Component</Link></li>
            </ul>
        </aside>
        <main className={`${classes["main-section"]} ${getMenuState ? classes["active"] : classes["closed"]}`}>
            {props.children}
        </main>  
        </>
    );
}

export default SideBarComponent;
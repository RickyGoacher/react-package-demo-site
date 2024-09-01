"use client";

import { PopupComponent } from "react-popup-component-simple";
import Image from "next/image";
import CloseIcon from "../images/square-xmark-solid.svg";
import classes from "./popup.module.css";

const Page = () => {

    function getCookie(name:string){
        return document.cookie.split(';').some(c => {
            return c.trim().startsWith(name + '=');
        });
    }

    function onButtonClick(name:string) {
        if( getCookie( name ) ) {
            document.cookie = name + "=" +
              ";path=/"+
              ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
              window.location.href = "/popup-component" ; 
        }
    }

    return (
        <>  
            <div className="package-demo-container">
                <h2>Popup Component</h2>
                <div className="installation">
                    <div className="instructions">
                        <h3>Installation:</h3>
                        <code>Installation: npm install react-popup-component-simple</code>
                        <h3>Usage:</h3>
                        <code>{`import { PopupComponent } from "react-popup-component-simple";`}</code>
                    </div>
                    <div className="config">
                        <h3>Configuration:</h3>
                        <ul>
                            <li>
                                <p>{`The <PopupComponent> can accept any element between the opening and closing tag, this is the content of the popup.`}</p>
                                <code>
                                    {`
                                        <PopupComponent 
                                            triggerOnDelay={false}
                                            triggerOnScroll={true}
                                            scrollTriggerDistance={400}
                                            delay={3000}
                                            zIndex={100}
                                            overlayStyles={{backgroundColor: "#131313", opacity: "0.8"}}
                                            popupWrapperStyles={{backgroundColor: "white", width: "60%", height: "500px"}}
                                            popupContentStyles={{padding: "1rem"}}
                                            closeIcon={<Image alt="" src={CloseIcon} height={24} width={24}></Image>}
                                            closeIconStyles={{padding: "1rem"}}
                                            cookieName={"custompopup"}
                                            cookieExpirationDays={1}
                                        >
                                            <h2>Example Popup Title</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat, leo vel sodales auctor, lorem leo vehicula magna, nec tincidunt leo nunc vel diam. Aenean aliquet eleifend volutpat.</p> 
                                            <button>Click Here!</button>
                                        </PopupComponent>  
                                    `}
                                </code>
                            </li>

                            <li>
                                <p>On delay popup trigger type.</p>
                                <code>{`triggerOnDelay={false}`}</code> 
                            </li>

                            <li>
                                <p>Delay trigger time.</p>
                                <code>{`delay={3000}`}</code> 
                            </li>
                           
                            <li>
                                <p>On scroll popup trigger type.</p>
                                <code>{`triggerOnScroll={true}`}</code> 
                            </li>

                            <li>
                                <p>Scroll trigger distance.</p>
                                <code>{`scrollTriggerDistance={400}`}</code> 
                            </li>

                            <li>
                                <p>Z-index for modal.</p>
                                <code>{`zIndex={100}`}</code> 
                            </li>

                            <li>
                                <p>Overlay styles.</p>
                                <code>{`overlayStyles={{backgroundColor: "#131313", opacity: "0.8"}}`}</code> 
                            </li>

                            <li>
                                <p>Popup wrapper styles.</p>
                                <code>{`popupWrapperStyles={{backgroundColor: "white", width: "60%", height: "500px"}}`}</code> 
                            </li>

                            <li>
                                <p>Popup content styles.</p>
                                <code>{`popupContentStyles={{padding: "1rem"}}`}</code> 
                            </li>

                            <li>
                                <p>Close icon, Accepts strings, React elements and HTML.</p>
                                <code>{`closeIcon={<Image alt="" src={CloseIcon} height={24} width={24}></Image>}`}</code> 
                            </li>

                            <li>
                                <p>Close icon styles.</p>
                                <code>{`closeIconStyles={{padding: "1rem"}}`}</code> 
                            </li>

                            <li>
                                <p>Cookie name.</p>
                                <code>{`cookieName={"custompopup"}`}</code> 
                            </li>

                            <li>
                                <p>Days untill cookie expires.</p>
                                <code>{`cookieExpirationDays={1}`}</code> 
                            </li>
                        </ul>
                    </div>
                </div>
                <h2 className="alternate">Popup Component Example</h2>
                <div className="package-demo-wrapper">
                    <PopupComponent 
                        triggerOnDelay={false}
                        triggerOnScroll={true}
                        scrollTriggerDistance={400}
                        delay={3000}
                        zIndex={100}
                        overlayStyles={{backgroundColor: "#131313", opacity: "0.8"}}
                        popupWrapperStyles={{backgroundColor: "white", width: "60%", height: "500px"}}
                        popupContentStyles={{padding: "1rem"}}
                        closeIcon={<Image alt="" src={CloseIcon} height={24} width={24}></Image>}
                        closeIconStyles={{padding: "1rem"}}
                        cookieName={"custompopup"}
                        cookieExpirationDays={1}
                    >   
                        <div className={classes["content"]}>
                            <h2>Example Popup Title</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat, leo vel sodales auctor, lorem leo vehicula magna, nec tincidunt leo nunc vel diam. Aenean aliquet eleifend volutpat.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat, leo vel sodales auctor, lorem leo vehicula magna, nec tincidunt leo nunc vel diam. Aenean aliquet eleifend volutpat.</p> 
                            <button>Click Here!</button>
                        </div>
                    </PopupComponent> 
                    <div className={classes["popup-div"]}>
                        <button onClick={() => onButtonClick('custompopup')}>Clear Cookies</button>
                        <p>Keep scrolling to trigger popup.</p>
                        <p>Keep scrolling to trigger popup.</p>
                        <p>Keep scrolling to trigger popup.</p>
                        <p>Keep scrolling to trigger popup.</p>
                        <p>Keep scrolling to trigger popup.</p>
                        <p>Keep scrolling to trigger popup.</p>
                        <p>Keep scrolling to trigger popup.</p>
                        <p>Keep scrolling to trigger popup.</p>
                    </div> 
                </div>
            </div>
        </>
    );
}

export default Page;

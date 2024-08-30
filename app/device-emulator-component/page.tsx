"use client";

import { DeviceComponent } from "react-simple-device-emulator";

const Page = () => {
 
    return (
        <>  
            <div className="package-demo-container">
                <h2>Device Emulator Component</h2>
                <div className="installation">
                    <div className="instructions">
                        <h3>Installation:</h3>
                        <code>Installation: npm install react-simple-device-emulator</code>
                        <h3>Usage:</h3>
                        <code>{`import { DeviceComponent } from "react-simple-device-emulator";`}</code>
                    </div>
                    <div className="config">
                        <h3>Configuration:</h3>
                        <ul>
                            <li>
                                <p>{`The <DeviceComponent> can accept any element beteen the opening and closing tab to display in the viewport, but the default stlying only accomodates iframes and images.`}</p>
                                <code>
                                    {`
                                        <DeviceComponent>
                                            <iframe src="https://react.dev" height="100%" width="100%" title="Iframe Example" ></iframe>
                                        </DeviceComponent>
                                    `}
                                </code>
                            </li>

                            <li>
                                <p>Options: "mobile", "tablet", "desktop"</p>
                                <code>{`deviceType={"mobile"}`}</code> 
                            </li>

                            <li>
                                <p>Sets device pixel width - Requires number.</p>
                                <code>{`deviceWidth={400}`}</code> 
                            </li>

                            <li>
                                <p> Sets device pixel height - Requires number.</p>
                                <code>{`deviceHeight={600}`}</code> 
                            </li>

                            <li>
                                <p>Used to set the scale for desktop - This keeps the device dimensions, but scales down the size.</p>
                                <code>{`scaleDesktop={1}`}</code> 
                            </li>

                            <li>
                                <p>Used to set the scale for tablet - This keeps the device dimensions, but scales down the size.</p>
                                <code>{`scaleTablet={.6}`}</code> 
                            </li>

                            <li>
                                <p>Used to set the scale for mobile - This keeps the device dimensions, but scales down the size.</p>
                                <code>{`scaleMobile={.8}`}</code> 
                            </li>

                            <li>
                                <p> Sets breakpoint - Used for responsive, set to your sites resonsive breakpoints.</p>
                                <code>{`mobileBreakPoint={450}`}</code> 
                            </li>

                            <li>
                                <p>Sets breakpoint - Used for responsive, set to your sites resonsive breakpoints.</p>
                                <code>{`tabletBreakPoint={768}`}</code> 
                            </li>

                            <li>
                                <p>Sets breakpoint - Used for responsive, set to your sites resonsive breakpoints.</p>
                                <code>{`desktopBreakPoint={1024}`}</code> 
                            </li>
                        </ul>
                    </div>
                </div>
                <h2 className="alternate">Device Emulator Component Example</h2>
                <div className="package-demo-wrapper">
                    <h2 className="alternate">Mobile</h2>
                    <DeviceComponent 
                        deviceType={"mobile"} 
                        deviceWidth={400} 
                        deviceHeight={600} 
                        scaleDesktop={1}
                        scaleTablet={.6} 
                        scaleMobile={.8} 
                        mobileBreakPoint={450} 
                        tabletBreakPoint={768} 
                        desktopBreakPoint={1024}
                    >
                        <iframe src="https://react.dev" height="100%" width="100%" title="Iframe Example" ></iframe>
                    </DeviceComponent>
                    <h2 className="alternate">Desktop</h2>
                    <DeviceComponent 
                        deviceType={"desktop"} 
                        deviceWidth={1620} 
                        deviceHeight={1000} 
                        scaleDesktop={.4}
                        scaleTablet={.2} 
                        scaleMobile={.2} 
                        mobileBreakPoint={450} 
                        tabletBreakPoint={768} 
                        desktopBreakPoint={1024}
                    >
                        <iframe src="https://react.dev" height="100%" width="100%" title="Iframe Example" ></iframe>
                    </DeviceComponent>
                </div>
            </div>
        </>
    );
}

export default Page;
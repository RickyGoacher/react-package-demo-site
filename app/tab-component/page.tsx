"use client";

import { TabsComponent } from "react-tabs-simple";

const Page = () => {
 
    return (
        <>  
            <div className="package-demo-container">
                <h2>Tabs Component</h2>
                <div className="installation">
                    <div className="instructions">
                        <h3>Installation:</h3>
                        <code>Installation: npm install react-tabs-simple</code>
                        <h3>Usage:</h3>
                        <code>{`import { TabsComponent } from "react-tabs-simple";`}</code>
                    </div>
                    <div className="config">
                        <h3>Configuration:</h3>
                        <ul>
                            <li>
                                <p>{`The <TabsComponent> child elements MUST follow this format`}</p>
                                <code>
                                    {`
                                        <>
                                            <div className="title">

                                            </div>
                                            <div className="content">
       
                                            </div>
                                        </> 
                                    `}
                                </code>
                            </li>
                            <li>
                                <p>Text colour for tab.</p>
                                <code>{`tabColour={"white"}`}</code> 
                            </li>

                            <li>
                                <p>Padding for tab.</p>
                                <code>{`tabPadding={"1rem"}`}</code> 
                            </li>

                            <li>
                                <p>Tab Background Colour.</p>
                                <code>{`tabBackgroundColour={"#2C514C"}`}</code> 
                            </li>

                            <li>
                                <p>Background colour for tab row.</p>
                                <code>{`tabRowBackgroundColour={"#355853"}`}</code> 
                            </li>

                            <li>
                                <p>Content section padding.</p>
                                <code>{`contentPadding={"1rem"}`}</code> 
                            </li>

                            <li>
                                <p>Content section text colour.</p>
                                <code>{`contentColour={"black"}`}</code> 
                            </li>

                            <li>
                                <p>Content section background colour.</p>
                                <code>{`contentBackgroundColour={"white"}`}</code> 
                            </li>

                        </ul>
                    </div>
                </div>
                <h2 className="alternate">Tabs Component Example</h2>
                <div className="package-demo-wrapper">
                    <TabsComponent 
                        tabPadding={"1rem"} 
                        tabColour={"white"} 
                        tabBackgroundColour={"#2C514C"} 
                        tabRowBackgroundColour={"#355853"}
                        contentPadding={"1rem"} 
                        contentColour={"black"} 
                        contentBackgroundColour={"white"} 
                    >
                        <>
                            <div className="tab">
                                <h3>Number One</h3>
                            </div>
                            <div className="content">
                                <p> Mauris interdum porta libero, eget varius metus dignissim id. Duis sollicitudin lacinia ipsum sed tempor. Praesent dapibus euismod euismod. Nulla neque libero, pellentesque ac quam a, bibendum mattis massa. Ut vehicula justo sit amet sagittis sagittis.</p>
                            </div>
                        </>
                        <>
                            <div className="tab">
                                <h3>Number Two</h3>
                            </div>
                            <div className="content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat, leo vel sodales auctor, lorem leo vehicula magna, nec tincidunt leo nunc vel diam. Aenean aliquet eleifend volutpat.</p> 
                                <p>Maecenas efficitur molestie metus in ultricies. Suspendisse porta, nisl et blandit congue, velit est ultricies augue, nec ullamcorper arcu sapien tempor ante.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat, leo vel sodales auctor, lorem leo vehicula magna, nec tincidunt leo nunc vel diam. Aenean aliquet eleifend volutpat.</p>
                                <p> Maecenas efficitur molestie metus in ultricies. Suspendisse porta, nisl et blandit congue, velit est ultricies augue, nec ullamcorper arcu sapien tempor ante.</p>
                                <p> Mauris interdum porta libero, eget varius metus dignissim id. Duis sollicitudin lacinia ipsum sed tempor. </p>
                            </div>
                        </>
                        <>
                            <div className="tab">
                                <h3>Number Three</h3>
                            </div>
                            <div className="content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat, leo vel sodales auctor, lorem leo vehicula magna, nec tincidunt leo nunc vel diam. Aenean aliquet eleifend volutpat.</p> 
                                <p> Mauris interdum porta libero, eget varius metus dignissim id. Duis sollicitudin lacinia ipsum sed tempor. </p>
                                <p>Maecenas efficitur molestie metus in ultricies. Suspendisse porta, nisl et blandit congue, velit est</p>
                            </div>
                        </>
                    </TabsComponent>
                </div>
            </div>
        </>
    );
}

export default Page;
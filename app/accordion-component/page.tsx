"use client";

import { AccordionComponent } from "react-accordion-simple";

const Page = () => {
 
    return (
        <div className="package-demo-container">
            <h2>Accordion Component</h2>
            <div className="installation">
                <div className="instructions">
                    <h3>Installation:</h3>
                    <code>Installation: npm install react-accordion-simple</code>
                    <h3>Usage:</h3>
                    <code>{`import { AccordionComponent } from "react-accordion-simple";`}</code>
                </div>
                <div className="config">
                    <h3>Configuration:</h3>

                    <ul>
                        <li>
                        <code>
<pre>
{`  
    <AccordionComponent 
        titlePadding={"1rem"} 
        titleColour={"white"} 
        titleBackgroundColour={"#2C514C"} 
        borderBottomColour={"white"} 
        contentPadding={"1rem"} 
        contentColour={"black"} 
        contentBackgroundColour={"white"} 
    >
        <>
            <div className="title">
                <h3>Number One</h3>
            </div>
            <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim pretium purus non tempus. Integer eu sem tellus. Vestibulum ultrices, dolor maximus pretium convallis, nunc nisl commodo tellus, et aliquam nisl nisl scelerisque eros. Praesent quis tempus ipsum, eget suscipit est. Vestibulum quis aliquam neque, et faucibus nulla. Morbi suscipit nisl dui, id tempor purus ultrices eu. Vestibulum eu tincidunt dui, nec semper augue. Sed ut porta eros. Nunc luctus ex sem, eget congue tortor maximus a. Donec turpis justo, porta quis neque at, aliquet auctor neque. Curabitur at magna interdum augue dignissim scelerisque luctus eu dui. Vestibulum eu nunc tortor.</p> 
                <p>Maecenas efficitur molestie metus in ultricies. Suspendisse porta, nisl et blandit congue, velit est ultricies augue, nec ullamcorper arcu sapien tempor ante.</p>
                <p>Mauris interdum porta libero, eget varius metus dignissim id. Duis sollicitudin lacinia ipsum sed tempor. </p>
            </div>
        </>

        <>
            <div className="title">
                <h3>Number Two</h3>
            </div>
            <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat, leo vel sodales auctor, lorem leo vehicula magna, nec tincidunt leo nunc vel diam. Aenean aliquet eleifend volutpat.</p> 
                <p>Maecenas efficitur molestie metus in ultricies. Suspendisse porta, nisl et blandit congue, velit est ultricies augue, nec ullamcorper arcu sapien tempor ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim pretium purus non tempus. Integer eu sem tellus. Vestibulum ultrices, dolor maximus pretium convallis, nunc nisl commodo tellus, et aliquam nisl nisl scelerisque eros. Praesent quis tempus ipsum, eget suscipit est. Vestibulum quis aliquam neque, et faucibus nulla. Morbi suscipit nisl dui, id tempor purus ultrices eu. Vestibulum eu tincidunt dui, nec semper augue.</p>
                <p> Mauris interdum porta libero, eget varius metus dignissim id. Duis sollicitudin lacinia ipsum sed tempor. </p>
            </div>
        </>
        
        <>
            <div className="title">
                <h3>Number Three</h3>
            </div>
            <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat, leo vel sodales auctor, lorem leo vehicula magna, nec tincidunt leo nunc vel diam. Aenean aliquet eleifend volutpat.</p> 
                <p>Maecenas efficitur molestie metus in ultricies. Suspendisse porta, nisl et blandit congue, velit est ultricies augue, nec ullamcorper arcu sapien tempor ante.</p>
                <p> Mauris interdum porta libero, eget varius metus dignissim id. Duis sollicitudin lacinia ipsum sed tempor. </p>
            </div>
        </>
        
        <>
            <div className="title">
                <h3>Number Four</h3>
            </div>
            <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat, leo vel sodales auctor, lorem leo vehicula magna, nec tincidunt leo nunc vel diam. Aenean aliquet eleifend volutpat.</p> 
                <p>Maecenas efficitur molestie metus in ultricies. Suspendisse porta, nisl et blandit congue, velit est ultricies augue, nec ullamcorper arcu sapien tempor ante.</p>
                <p> Mauris interdum porta libero, eget varius metus dignissim id. Duis sollicitudin lacinia ipsum sed tempor. </p>
            </div>
        </>
    </AccordionComponent>
    
`}
</pre>
                        </code>                            
                        </li>
                        <li>
                            <p>Text colour for title. Accepts any standard CSS colour.</p>
                            <code>{`titleColour={"white"}`}</code> 
                        </li>

                        <li>
                            <p>Title Bakcground Colour</p>
                            <code>{`titleBackgroundColour={"#2C514C"}`}</code>
                        </li>

                        <li>
                            <p>Title Bakcground Colour.</p>
                            <code>{`titleBackgroundColour={"#2C514C"}`}</code>
                        </li>

                        <li>
                            <p>Padding for title.</p>
                            <code>{`titlePadding={"1rem"}`}</code>
                        </li>

                        <li>
                            <p>Border between titles colour.</p>
                            <code>{`borderBottomColour={"white"}`}</code>
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
            <h2 className="alternate">Accordion Component Example</h2>
            <div className="package-demo-wrapper">
                <AccordionComponent 
                    titlePadding={"1rem"} 
                    titleColour={"white"} 
                    titleBackgroundColour={"#2C514C"} 
                    borderBottomColour={"white"} 
                    contentPadding={"1rem"} 
                    contentColour={"black"} 
                    contentBackgroundColour={"white"} 
                >
                    <>
                        <div className="title">
                            <h3>Number One</h3>
                        </div>
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim pretium purus non tempus. Integer eu sem tellus. Vestibulum ultrices, dolor maximus pretium convallis, nunc nisl commodo tellus, et aliquam nisl nisl scelerisque eros. Praesent quis tempus ipsum, eget suscipit est. Vestibulum quis aliquam neque, et faucibus nulla. Morbi suscipit nisl dui, id tempor purus ultrices eu. Vestibulum eu tincidunt dui, nec semper augue. Sed ut porta eros. Nunc luctus ex sem, eget congue tortor maximus a. Donec turpis justo, porta quis neque at, aliquet auctor neque. Curabitur at magna interdum augue dignissim scelerisque luctus eu dui. Vestibulum eu nunc tortor.</p> 
                            <p>Maecenas efficitur molestie metus in ultricies. Suspendisse porta, nisl et blandit congue, velit est ultricies augue, nec ullamcorper arcu sapien tempor ante.</p>
                            <p>Mauris interdum porta libero, eget varius metus dignissim id. Duis sollicitudin lacinia ipsum sed tempor. </p>
                        </div>
                    </>

                    <>
                        <div className="title">
                            <h3>Number Two</h3>
                        </div>
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat, leo vel sodales auctor, lorem leo vehicula magna, nec tincidunt leo nunc vel diam. Aenean aliquet eleifend volutpat.</p> 
                            <p>Maecenas efficitur molestie metus in ultricies. Suspendisse porta, nisl et blandit congue, velit est ultricies augue, nec ullamcorper arcu sapien tempor ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim pretium purus non tempus. Integer eu sem tellus. Vestibulum ultrices, dolor maximus pretium convallis, nunc nisl commodo tellus, et aliquam nisl nisl scelerisque eros. Praesent quis tempus ipsum, eget suscipit est. Vestibulum quis aliquam neque, et faucibus nulla. Morbi suscipit nisl dui, id tempor purus ultrices eu. Vestibulum eu tincidunt dui, nec semper augue.</p>
                            <p> Mauris interdum porta libero, eget varius metus dignissim id. Duis sollicitudin lacinia ipsum sed tempor. </p>
                        </div>
                    </>
        
                    <>
                        <div className="title">
                            <h3>Number Three</h3>
                        </div>
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat, leo vel sodales auctor, lorem leo vehicula magna, nec tincidunt leo nunc vel diam. Aenean aliquet eleifend volutpat.</p> 
                            <p>Maecenas efficitur molestie metus in ultricies. Suspendisse porta, nisl et blandit congue, velit est ultricies augue, nec ullamcorper arcu sapien tempor ante.</p>
                            <p> Mauris interdum porta libero, eget varius metus dignissim id. Duis sollicitudin lacinia ipsum sed tempor. </p>
                        </div>
                    </>
        
                    <>
                        <div className="title">
                            <h3>Number Four</h3>
                        </div>
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat, leo vel sodales auctor, lorem leo vehicula magna, nec tincidunt leo nunc vel diam. Aenean aliquet eleifend volutpat.</p> 
                            <p>Maecenas efficitur molestie metus in ultricies. Suspendisse porta, nisl et blandit congue, velit est ultricies augue, nec ullamcorper arcu sapien tempor ante.</p>
                            <p> Mauris interdum porta libero, eget varius metus dignissim id. Duis sollicitudin lacinia ipsum sed tempor. </p>
                        </div>
                    </>
                </AccordionComponent>
            </div>
      </div>
    );
}

export default Page;
"use client";
import { StepperComponent, StepperItemComponent } from "react-stepper-component-simple";

const Page = () => {
    return (
        <>
            <div className="package-demo-container">
                <h2>Stepper Component</h2>
                <div className="installation">
                    <div className="instructions">
                        <h3>Installation:</h3>
                        <code>Installation: npm install react-stepper-component-simple</code>
                        <h3>Usage:</h3>
                        <code>{`import { StepperComponent, StepperItemComponent } from "react-stepper-component-simple";`}</code>
                    </div>
                    <div className="config">
                        <h3>Configuration:</h3>
                        <ul>
                            <li>
                                <p>{`The <StepperComponent> requires <StepperItemComponent> child elements with a header prop to be used at the step title.`}</p>
                                <code>
<pre>                                   
{`
    <StepperComponent 
        stepNumberBackgroundColour="#2C514C" 
        stepNumberTextColour="white" 
        stepNumberWidth="24px"
        stepNumberHeigth="24px"
        buttonStyles={{padding: "1rem 2rem", border: 0, backgroundColor: "#2C514C", color: "white"}}
        contentWrapperStyles={{padding: "1rem"}}
        stepTitleDirectionMobile="column"
        stepTitleDirectionDesktop="row"
        mobileBreakpoint={768}
    >
        <StepperItemComponent header="Step One">
            <div className="step-content">
                <h2>Step one content</h2>
                    <p>
                        Cras vel dui molestie, condimentum urna ac, lacinia ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque bibendum, sapien ut rhoncus aliquam, ante metus auctor ante, ut pharetra purus dolor vitae ante. Aenean rhoncus eu leo non fermentum.
                    </p>
            </div>
        </StepperItemComponent>

        <StepperItemComponent header="Step Two">
            <div className="step-content">
                <h2>Step Two content</h2>
                <p>
                    Cras vel dui molestie, condimentum urna ac, lacinia ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque bibendum, sapien ut rhoncus aliquam, ante metus auctor ante, ut pharetra purus dolor vitae ante. Aenean rhoncus eu leo non fermentum.
                </p>
            </div>
        </StepperItemComponent>

        <StepperItemComponent header="Step Three">
            <div className="step-content">
                <h2>Step three content</h2>
                <p>
                    Cras vel dui molestie, condimentum urna ac, lacinia ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque bibendum, sapien ut rhoncus aliquam, ante metus auctor ante, ut pharetra purus dolor vitae ante. Aenean rhoncus eu leo non fermentum.
                </p>
            </div>
        </StepperItemComponent>
    </StepperComponent>  
`}
</pre>
                                </code>
                            </li>
                        </ul>
                        <h3>Stepper Component Configuration:</h3>
                        <ul>
                            <li>
                                <p>Background colour for step number.</p>
                                <code>{`stepNumberBackgroundColour="#2C514C"`}</code> 
                            </li>

                            <li>
                                <p>Text colour for step number.</p>
                                <code>{`stepNumberTextColour="white`}</code> 
                            </li>
                           
                            <li>
                                <p>Step number width.</p>
                                <code>{`stepNumberWidth="24px"`}</code> 
                            </li>

                            <li>
                                <p>Step number height.</p>
                                <code>{`stepNumberHeigth="24px"`}</code> 
                            </li>

                            <li>
                                <p>Prev and next button styles.</p>
                                <code>{`buttonStyles={{padding: "1rem 2rem", border: 0, backgroundColor: "#2C514C", color: "white"}}`}</code> 
                            </li>

                            <li>
                                <p>Content wrapper styles.</p>
                                <code>{`contentWrapperStyles={{padding: "1rem"}}`}</code> 
                            </li>

                            <li>
                                <p>Step title direction on mobile.</p>
                                <code>{`stepTitleDirectionMobile="column"`}</code> 
                            </li>

                            <li>
                                <p>Step title direction on desktop.</p>
                                <code>{`stepTitleDirectionDesktop="row"`}</code> 
                            </li>

                            <li>
                                <p>Breakpoint for mobile step direction.</p>
                                <code>{`mobileBreakpoint={768}`}</code> 
                            </li>
                        </ul>
                        <h3>Stepper Component Configuration:</h3>
                        <ul>
                            <li>
                                <p>Header to be used for the step.</p>
                                <code>{`header="Step Three"`}</code> 
                            </li>
                        </ul>
                    </div>
                </div>
                <h2 className="alternate">Stepper Component Example</h2>
                <div className="package-demo-wrapper">
                    <StepperComponent 
                        stepNumberBackgroundColour="#2C514C" 
                        stepNumberTextColour="white" 
                        stepNumberWidth="24px"
                        stepNumberHeigth="24px"
                        buttonStyles={{padding: "1rem 2rem", border: 0, backgroundColor: "#2C514C", color: "white"}}
                        contentWrapperStyles={{padding: "1rem"}}
                        stepTitleDirectionMobile="column"
                        stepTitleDirectionDesktop="row"
                        mobileBreakpoint={768}
                    >
                        <StepperItemComponent header="Step One">
                            <div className="step-content">
                                <h2>Step one content</h2>
                                <p>
                                    Cras vel dui molestie, condimentum urna ac, lacinia ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque bibendum, sapien ut rhoncus aliquam, ante metus auctor ante, ut pharetra purus dolor vitae ante. Aenean rhoncus eu leo non fermentum.
                                </p>
                            </div>
                        </StepperItemComponent>

                        <StepperItemComponent header="Step Two">
                            <div className="step-content">
                                <h2>Step Two content</h2>
                                <p>
                                    Cras vel dui molestie, condimentum urna ac, lacinia ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque bibendum, sapien ut rhoncus aliquam, ante metus auctor ante, ut pharetra purus dolor vitae ante. Aenean rhoncus eu leo non fermentum.
                                </p>
                            </div>
                        </StepperItemComponent>

                        <StepperItemComponent header="Step Three">
                            <div className="step-content">
                                <h2>Step three content</h2>
                                <p>
                                    Cras vel dui molestie, condimentum urna ac, lacinia ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque bibendum, sapien ut rhoncus aliquam, ante metus auctor ante, ut pharetra purus dolor vitae ante. Aenean rhoncus eu leo non fermentum.
                                </p>
                            </div>
                        </StepperItemComponent>
                    </StepperComponent>   
                </div>
            </div>
        </>
    );
}

export default Page;
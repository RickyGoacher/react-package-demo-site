"use client";

import { LoadMoreComponent } from "react-loadmore";
import classes from "./loadmore.module.css";

const Page = () => {
 
    return (
        <>  
            <div className="package-demo-container">
                <h2>Load More Component</h2>
                <div className="installation">
                    <div className="instructions">
                        <h3>Installation:</h3>
                        <code>Installation: npm install react-loadmore</code>
                        <h3>Usage:</h3>
                        <code>{`import { LoadMoreComponent } from "react-loadmore";`}</code>
                    </div>
                    <div className="config">
                        <h3>Configuration:</h3>
                        <ul>
                            <li>
                                <p>{`The <LoadMoreComponent> can accept any element between the opening and closing tag.`}</p>
                                <code>
                                    {`
                                        <LoadMoreComponent>
                                            <div className="item"><span>item</span></div>
                                            <div className="item"><span>item</span></div>
                                            <div className="item"><span>item</span></div>
                                        </LoadMoreComponent>
                                    `}
                                </code>
                            </li>

                            <li>
                                <p>The inital limit.</p>
                                <code>{`limit={4}`}</code> 
                            </li>

                            <li>
                                <p>Number you wish to increment by when clicking loadmore.</p>
                                <code>{`incrementBy={4}`}</code> 
                            </li>
                           
                            <li>
                                <p>Text for load more button.</p>
                                <code>{`loadMoreText={"Load More"}`}</code> 
                            </li>

                            <li>
                                <p> Text for Show less button.</p>
                                <code>{`showLessText={"Show Less"}`}</code> 
                            </li>

                            <li>
                                <p>Takes an object of styles following standard react inline styling.</p>
                                <code>{`buttonStyling={{padding: "1rem 2rem", borderRadius: "4px", border: "0"}}`}</code> 
                            </li>

                            <li>
                                <p>Load more button background colour.</p>
                                <code>{`loadMoreButtonBackgroundColour={"blue"}`}</code> 
                            </li>

                            <li>
                                <p>Show less button background colour.</p>
                                <code>{`showLessButtonBackgroundColour={"red"}`}</code> 
                            </li>

                            <li>
                                <p>Load more button text colour.</p>
                                <code>{`loadMoreButtonTextColour={"white"}`}</code> 
                            </li>

                            <li>
                                <p>Show less button text colour.</p>
                                <code>{`showLessButtonTextColour={"white"}`}</code> 
                            </li>

                            <li>
                                <p>Takes an object of styles following standard react inline styling.</p>
                                <code>{`itemWrapperStyling={{display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "12px", padding: "1rem"}}`}</code> 
                            </li>

                            <li>
                                <p>Text for if wrapper is empty.</p>
                                <code>{`unableToLoadText={"Unable to Load"}`}</code> 
                            </li>
                        </ul>
                    </div>
                </div>
                <h2 className="alternate">Load More Component Example</h2>
                <div className="package-demo-wrapper">
                    <LoadMoreComponent 
                        limit={4} 
                        incrementBy={4}
                        loadMoreText={"Load More"}
                        showLessText={"Show Less"} 
                        buttonStyling={{padding: "1rem 2rem", borderRadius: "4px", border: "0"}}
                        loadMoreButtonBackgroundColour={"#2c514c"}
                        showLessButtonBackgroundColour={"darkgrey"}
                        loadMoreButtonTextColour={"white"}
                        showLessButtonTextColour={"white"}
                        itemWrapperStyling={{display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "12px", padding: "1rem"}}
                        unableToLoadText="Unable to Load"
                    >
                        <div className={classes["item"]}><span>Item</span></div>
                        <div className={classes["item"]}><span>Item</span></div>
                        <div className={classes["item"]}><span>Item</span></div>
                        <div className={classes["item"]}><span>Item</span></div>
                        <div className={classes["item"]}><span>Item</span></div>
                        <div className={classes["item"]}><span>Item</span></div>
                        <div className={classes["item"]}><span>Item</span></div>
                        <div className={classes["item"]}><span>Item</span></div>
                        <div className={classes["item"]}><span>Item</span></div>
                        <div className={classes["item"]}><span>Item</span></div>
                        <div className={classes["item"]}><span>Item</span></div>
                        <div className={classes["item"]}><span>Item</span></div>
                    </LoadMoreComponent>
                </div>
            </div>
        </>
    );
}

export default Page;
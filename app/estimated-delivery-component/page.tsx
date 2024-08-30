"use client";

import { EstimatedDeliveryComponent } from "react-estimated-delivery";
import { useState } from "react";
import Image from "next/image";
import TheIcon from "../images/truck-solid.svg";

const Page = () => {

    const [getBusinessDays, setBusinessDays] = useState({
        "monday": true,
        "tuesday": true,
        "wednesday": true,
        "thursday": true,
        "friday": true,
        "saturday": false,
        "sunday": false
    })
    
    const [getDeliveryDays, setDeliveryDays] = useState({
      "monday": true,
      "tuesday": true,
      "wednesday": true,
      "thursday": false,
      "friday": true,
      "saturday": true,
      "sunday": false
    })
 
    return (
        <>  
            <div className="package-demo-container">
                <h2>Estimated Delivery Component</h2>
                <div className="installation">
                    <div className="instructions">
                        <h3>Installation:</h3>
                        <code>Installation: npm install react-estimated-delivery</code>
                        <h3>Usage:</h3>
                        <code>${`import { EstimatedDeliveryComponent } from "react-estimated-delivery";`}</code>
                    </div>
                    <div className="config">
                        <h3>Configuration:</h3>
                        <ul>
                            <li>
                                <p>The estimated delivery component can accept any element for the icon.</p>
                                <code>{`<EstimatedDeliveryComponent> </EstimatedDeliveryComponent>`}</code> 
                            </li>

                            <li>
                                <p>Business days object</p>
                                <code>{`businessDays={{
                                            "monday": true,
                                            "tuesday": true,
                                            "wednesday": true,
                                            "thursday": true,
                                            "friday": true,
                                            "saturday": false,
                                            "sunday": false
                                        }}`}
                                </code> 
                            </li>

                            <li>
                                <p>Delivery days object</p>
                                <code>{`deliveryDays={{
                                            "monday": true,
                                            "tuesday": true,
                                            "wednesday": true,
                                            "thursday": false,
                                            "friday": true,
                                            "saturday": true,
                                            "sunday": false
                                        }}`}
                                </code> 
                            </li>
                            
                            <li>
                                <p>Cut off time for next day delivery.</p>
                                <code>{`cutOffTime={"12:00"}`}</code> 
                            </li>

                            <li>
                                <p>Pass in an array of holidays, dd/mm/yyyy, this is to be used for bank holidays.</p>
                                <code>{`holidays={["07/08/2024", "08/08/2024"]}`}</code> 
                            </li>

                            <li>
                                <p>Set the timezone to diplay to the customer.</p>
                                <code>{`timezone={"Europe/London"}`}</code> 
                            </li>

                            <li>
                                <p> Used when passing in holidays, the format should match the format of your holidays (dd/mm/yy or mm/dd/yyy).</p>
                                <code>{`dateFormat={"en-GB"}`}</code> 
                            </li>

                            <li>
                                <p>Have the countdown show if next day delivery is available.</p>
                                <code>{`enableCountDownTimer={true}`}</code> 
                            </li>

                            <li>
                                <p>Text for next day delivery available.</p>
                                <code>{`nextDayDeliveryAvailableText={"Next day delivery available."}`}</code> 
                            </li>

                            <li>
                                <p>Text for next day delivery not available.</p>
                                <code>{`nextDayDeliveryNotAvailableText={"Next day delivery NOT available."}`}</code> 
                            </li>

                            <li>
                                <p>Text for estimated delivery.</p>
                                <code>{`estimatedDeliveryText={"Estimated delivery date:"`}</code> 
                            </li>

                            <li>
                                <p>Text for timer.</p>
                                <code>{`timerText={{hours: "h", minutes: "m", seconds: "s"}}`}</code> 
                            </li>

                            <li>
                                <p>Order within text.</p>
                                <code>{`orderWithinText={"Order within"}`}</code> 
                            </li>

                            <li>
                                <p>Enable next day delivery.</p>
                                <code>{`isNextDayAvailable={true}`}</code> 
                            </li>

                            <li>
                                <p>Set how many days to increment by.</p>
                                <code>{`deliveryDayIncrement={1}`}</code> 
                            </li>

                            <li>
                                <p>Show date range.</p>
                                <code>{`showDateRange={true}`}</code> 
                            </li>

                            <li>
                                <p>Number of days to add to earliest delivery date for a date range.</p>
                                <code>{`dateRange={2}`}</code> 
                            </li>

                            <li>
                                <p>Text to display during estimate load.</p>
                                <code>{`loadingText={"Getting estimate..."}`}</code> 
                            </li>
                        </ul>
                    </div>
                </div>
                <h2 className="alternate">Estimated Delivery Component Example</h2>
                <div className="package-demo-wrapper">
                    <EstimatedDeliveryComponent
                        businessDays={getBusinessDays}
                        deliveryDays={getDeliveryDays}
                        cutOffTime={"23:50"} 
                        holidays={["07/08/2024", "08/08/2024", "09/08/2024", "10/08/2024", "11/08/2024"]}
                        timezone={"Europe/London"}
                        dateFormat={"en-GB"}
                        enableCountDownTimer={true}
                        nextDayDeliveryAvailableText={"Next day delivery available."}
                        nextDayDeliveryNotAvailableText={"Next day delivery NOT available."}
                        estimatedDeliveryText={"Estimated delivery date:"}
                        orderWithinText={"Order within"}
                        timerText={{hours: "h", minutes: "m", seconds: "s"}}
                        isNextDayAvailable={true}
                        deliveryDayIncrement={1}
                        showDateRange={true}
                        dateRange={2}
                        loadingText={"Getting estimate..."}
                    >
                        <Image alt="" src={TheIcon} height={24} width={24}></Image>
                    </EstimatedDeliveryComponent>
                </div>
            </div>
        </>
    );
}

export default Page;
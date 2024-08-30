"use client";

import { FilterComponent } from "react-filter-checkbox-component";
import { useState } from "react";

interface ResultsInterface {
    label: string;
    param: string;
}

const Page = () => {

    const [getResult, setResult] = useState('');

    const Filters = {
        "Meal Type:":  [
            {
                label: 'Breakfast',
                param: '&mealType=breakfast'
            },
            {
                label: 'Dinner',
                param: '&mealType=Dinner'
            }
        ],  
        "Diet:": [
            {
                label: 'Balanced',
                param: '&diet=balanced'
            },
            {
                label: 'High Fiber',
                param: '&diet=high-fiber'
            },
            {
                label: 'High Protein',
                param: '&diet=high-protein'
            }
        ]
    }

    function onSubmit(result:Array<Array<ResultsInterface>>) {
        const Result = result.flat().map((item) => {
            return item.param !== undefined ? item.param : '';
        });
        setResult(Result.join(''));
    }  
 
    return (
        <>  
            <div className="package-demo-container">
                <h2>Checkbox Filter Component</h2>
                <div className="installation">
                    <div className="instructions">
                        <h3>Installation:</h3>
                        <code>Installation: npm install react-filter-checkbox-component</code>
                        <h3>Usage:</h3>
                        <code>${`import { FilterComponent } from "react-filter-checkbox-component";`}</code>
                        <h3>Filter Format:</h3>
                        <code>{`
                                const Filters = {
                                    "Meal Type:":  [
                                        {
                                            label: 'Breakfast',
                                            param: '&mealType=breakfast'
                                        },
                                        {
                                            label: 'Dinner',
                                            param: '&mealType=Dinner'
                                        }
                                    ],              
                                    "Diet:": [
                                        {
                                            label: 'Balanced',
                                            param: '&diet=balanced'
                                        },
                                        {
                                            label: 'High Fiber',
                                            param: '&diet=high-fiber'
                                        },
                                        {
                                            label: 'High Protein',
                                            param: '&diet=high-protein'
                                        }
                                    ]
                                }
                            `}
                        </code>
                        <h3>Submit Function:</h3>
                        <code>
                            {`
                            function onSubmit(result) {
                                console.log(result);
                            }`}
                        </code>
                    </div>
                    <div className="config">
                        <h3>Configuration:</h3>
                        <ul>
                            <li>
                                <p>Callback function to return the selected filters on submit.</p>
                                <code>{`onSubmit={onSubmit}`}</code> 
                            </li>

                            <li>
                                <p>Text for Apply button.</p>
                                <code>{`applyButtonText={'Apply Filters'}`}</code> 
                            </li>

                            <li>
                                <p>Text for clear button.</p>
                                <code>{`applyButtonText={'Apply Filters'}`}</code> 
                            </li>
    
                            <li>
                                <p>Remove filter icon, accepts string or react component.</p>
                                <code>{`selectedFilterRemoveIcon={'X'}`}</code> 
                            </li>
  
                            <li>
                                <p>Set background colour of selected filters.</p>
                                <code>{`selectedFilterBackgroundColour={'blue'}`}</code> 
                            </li>

                            <li>
                                <p>Set text colour for selected filters.</p>
                                <code>{`selectedFilterTextColour={'#fff'}`}</code> 
                            </li>

                        </ul>
                    </div>
                </div>
                <h2 className="alternate">Checkbox Filter Component Example</h2>
                <div className="package-demo-wrapper">
                    <FilterComponent 
                        filters={Filters} 
                        onSubmit={onSubmit}
                        applyButtonText={'Apply Filters'}
                        clearButtonText={'Clear Filters'} 
                        selectedFilterRemoveIcon={'X'}
                        selectedFilterBackgroundColour={'#2c514c'}
                        selectedFilterTextColour={'#fff'}
                    />
                    <div style={{marginTop: '1rem', padding: '1rem', backgroundColor: '#eeeeee'}}>
                        <span>Result: </span> <span>{getResult}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
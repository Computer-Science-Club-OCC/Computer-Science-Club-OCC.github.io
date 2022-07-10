import React, { useState, useRef } from 'react';
import "./resources.css";
import Tutorials from './Tutorials.js';
import Research from './Research';
import Organizations from './Organizations';

/*
Create card tab Tutorials | Research | Organizations both underline + hover highlight box
v-Link tab to component -> how to link subpage
Use Hook to change card tab
Create Tutorials, Research, and Organizations Container
Container:

Square box: Dat center large font 46px, Time below
Click view detail, box will expand

Line break

Container includes:
    Shadow: Hover expand
    Card: Title, Url, Description
*/

const Resources = () => {
    return (
        <div className="resources-container">
            <h1 className="resource-title">Resources</h1>
            <Tab className="tab-components"/>
        </div>
    );
};

export default Resources;

function Tab() {
    const [tabState, setTab] = useState(1)

    const toggleTab = (index) => {
        setTab(index)
    }

    return (
        <div className='tab-container'>
            {/*
            <Link to='/resources/tutorials' className='tab-button'>Tutorials</Link>
            <Link to='resources/research' className='tab-button'>Research</Link>
            <Link to='resources/organizations' className='tab-button'>Organizations</Link>
            */}
            <div className='tabs'>
                <button type='button' onClick={() => toggleTab(1)} className={tabState === 1 ? 'tab-button active' : 'tab-button'}>Tutorials</button>
                <button type='button' onClick={() => toggleTab(2)} className={tabState === 2 ? 'tab-button active' : 'tab-button'}>Research</button>
                <button type='button' onClick={() => toggleTab(3)} className={tabState === 3 ? 'tab-button active' : 'tab-button'}>Organizations</button>
            </div>

            <div className="tab-contents">
                <div className={tabState === 1 ? 'tab-content active-content': 'tab-content'}>
                    <h2>Tutorials</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                <div  className={tabState === 2 ? 'tab-content active-content': 'tab-content'}>
                    <h2>Research</h2>
                    <p>Something about Early Research Scholars Programs.
                    </p>
                </div>

                <div  className={tabState === 3 ? 'tab-content active-content': 'tab-content'}>
                    <h2>Organizations</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        </div>
    )
}

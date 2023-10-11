import React from 'react';
import "./TitleContentLayout.css";


function TitleContentLayout({ title, subtitle, imgSrc, children }) {
    return (
        <div className='componentWrap'>
            <div>
                <div className='titleContent'>
                    {subtitle ? <h3>{subtitle}</h3> : null}
                    {title ? <h1>{title}</h1> : null}
                </div>
                <div className="mainContent">
                    <img alt={title} src={imgSrc} />
                    {children}
                </div>
            </div>
        </div>
    );
}

export default TitleContentLayout;

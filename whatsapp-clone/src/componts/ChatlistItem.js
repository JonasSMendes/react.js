import React from "react";
import './ChatlistItem.css'

export default ({ Click, active, data }) => {
    return (
        <div className={`chatlist-item ${active?'active':''}`} 
             onClick={Click}
        >
            <img className="chatlist-avatar" src={data.Image}/>
            <div className="chatlist-item-lines">
                <div className="chatlist-item-line">
                    <div className="chatlist-item-name">
                        {data.title}
                    </div>
                    <div className="chatlist-item-date">
                        19:00
                    </div>
                </div>
                <div className="chatlist-item-line">
                    <div className="chatlist-item-lasting">
                        <p>foi aquela sebosa eu juro</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
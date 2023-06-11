import React from "react";
import './ChatlistItem.css'

export default ({onCLick}) => {
    return (
        <div className="chatlist-item"
             onCLick={onCLick}
        >
            <img className="chatlist-avatar" src="https://i.pinimg.com/originals/b4/1a/04/b41a04050d7f84ee62d88f64484399ba.png" />
            <div className="chatlist-item-lines">
                <div className="chatlist-item-line">
                    <div className="chatlist-item-name">
                        jiji
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
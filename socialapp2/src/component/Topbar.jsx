import React from "react";
import "./tobar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Topbar(){
    return (
        <div className="topbarContainer">
            <div className="topbarleft">
<span className="logo">CarolSocial </span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar"><span className="searchIcon">
                    <SearchIcon/>
                    </span>
                    <input className="searchInput"type="text" placeholder="Search for friends, posts and videos"/>
                </div>
                </div>
             <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Home</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                <div className="topbaricon">
<PersonIcon/><span className="topbarIconBadge">1</span>

                </div>
                <div className="topbaricon">
<ChatIcon/><span className="topbarIconBadge">4</span>

                </div>
                <div className="topbaricon">
<NotificationsIcon/><span className="topbarIconBadge">3</span>
</div>
                
                </div>
                <img src="/assets/1.jpeg" alt="" className="topbarimage" />
        </div>
        </div>
    );
}
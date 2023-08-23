import "./sidebar.css";
import RssFeedIcon from '@mui/icons-material/RssFeedRounded';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PeopleIcon from '@mui/icons-material/People';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpIcon from '@mui/icons-material/Help';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
<ul className="sidebarlist">
    <li className="sidelistitem">
<RssFeedIcon className="sideicon"/>
<span>Feed</span>
    </li>
<li className="sidelistitem">
<ChatIcon className="sideicon"/>
<span>Chat</span>
    </li>
<li className="sidelistitem">
<PlayCircleIcon className="sideicon"/>
<span>Videos</span>
    </li>
    <li className="sidelistitem">
<PeopleIcon className="sideicon"/>
<span>Groups</span>
    </li>
    <li className="sidelistitem">
<BookmarkIcon className="sideicon"/>
<span>Bookmarks</span>
    </li>
    <li className="sidelistitem">
<HelpIcon className="sideicon"/>
<span>Help</span>
    </li>
    <li className="sidelistitem">
<WorkIcon className="sideicon"/>
<span>Jobs</span>
    </li>
    <li className="sidelistitem">
<EventIcon className="sideicon"/>
<span>Events</span>
    </li>
    <li className="sidelistitem">
<SchoolIcon className="sideicon"/>
<span>School</span>
    </li>
</ul>
      </div>
      <button className="sidebarbutton">Show More</button><hr className="sidebarhr"/>
      <ul className="sidebarfriendslist">
        <li className="sidebarfriends">
            <img className="sidebarfriendsimg" src="../assets/2.jpeg" alt="" /><span className="sidebarfriendsname"> Janant Webule</span>
        </li>
        <li className="sidebarfriends">
            <img className="sidebarfriendsimg" src="../assets/2.jpeg" alt="" /><span className="sidebarfriendsname"> Janant Webule</span>
        </li>
        <li className="sidebarfriends">
            <img className="sidebarfriendsimg" src="../assets/2.jpeg" alt="" /><span className="sidebarfriendsname"> Janant Webule</span>
        </li>
        <li className="sidebarfriends">
            <img className="sidebarfriendsimg" src="../assets/2.jpeg" alt="" /><span className="sidebarfriendsname"> Janant Webule</span>
        </li>
        <li className="sidebarfriends">
            <img className="sidebarfriendsimg" src="../assets/2.jpeg" alt="" /><span className="sidebarfriendsname"> Janant Webule</span>
        </li>
        <li className="sidebarfriends">
            <img className="sidebarfriendsimg" src="../assets/2.jpeg" alt="" /><span className="sidebarfriendsname"> Janant Webule</span>
        </li>
        <li className="sidebarfriends">
            <img className="sidebarfriendsimg" src="../assets/2.jpeg" alt="" /><span className="sidebarfriendsname"> Janant Webule</span>
        </li>
        <li className="sidebarfriends">
            <img className="sidebarfriendsimg" src="../assets/2.jpeg" alt="" /><span className="sidebarfriendsname"> Janant Webule</span>
        </li>
        <li className="sidebarfriends">
            <img className="sidebarfriendsimg" src="../assets/2.jpeg" alt="" /><span className="sidebarfriendsname"> Janant Webule</span>
        </li>
        <li className="sidebarfriends">
            <img className="sidebarfriendsimg" src="../assets/2.jpeg" alt="" /><span className="sidebarfriendsname"> Janant Webule</span>
        </li>
        <li className="sidebarfriends">
            <img className="sidebarfriendsimg" src="../assets/2.jpeg" alt="" /><span className="sidebarfriendsname"> Janant Webule</span>
        </li>
        <li className="sidebarfriends">
            <img className="sidebarfriendsimg" src="../assets/2.jpeg" alt="" /><span className="sidebarfriendsname"> Janant Webule</span>
        </li>
      </ul>
    </div>
  )
}

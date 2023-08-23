import "./home.css";
import Topbar from "../../component/Topbar";
import Sidebar from "../../component/sidebar/Sidebar";
import Rightbar from "../../component/rightbar/Rightbar";
import Feed from "../../component/feed/Feed";
export default function Home (){
    return(
        <>
 <Topbar/>
 <div className="homeContainer">
 <Sidebar/>
 <Feed/>
 <Rightbar/>
 </div>
        </>
    )
} 
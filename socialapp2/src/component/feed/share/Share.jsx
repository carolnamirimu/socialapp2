import "./share.css";
import PermMediaIcon from '@mui/icons-material/PermMedia';

export default function Share() {
  return (
    <div className="share">
        <div className="sharewrapper">
        <div className="sharetop">
<img className="shareprofileimg" src="/assets/3.jpeg" alt="" />
<input className="shareinput" placeholder="Whats on your mind?"></input>
        </div>
        <hr className="sharehr"/>
        <div className="sharebottom">
<div className="shareoptions">
    <div className="shareoption">
    <PermMediaIcon/>
        <span className="shareoptiontext">Photo or Video </span> 
    </div>
    <div className="shareoption">
    <PermMediaIcon/>
        <span className="shareoptiontext">Photo or Video </span> 
    </div><div className="shareoption">
    <PermMediaIcon/>
        <span className="shareoptiontext">Photo or Video </span> 
    </div>
    <div className="shareoption">
    <PermMediaIcon/>
        <span className="shareoptiontext">Photo or Video </span> 
    </div>
</div>
</div>
        </div>
    </div>
  )
}

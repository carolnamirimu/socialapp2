import "./share.css";
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

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
    <PermMediaIcon htmlColor="red" className="shareIcon"/>
        <span className="shareoptiontext">Photo or Video</span> 
    </div>
    <div className="shareoption">
    <LocalOfferIcon htmlColor="blue" className="shareIcon"/>
        <span className="shareoptiontext">Tag</span> 
    </div>
    <div className="shareoption">
    <LocationOnIcon htmlColor="green"className="shareIcon"/>
        <span className="shareoptiontext">Location</span> 
    </div>
    <div className="shareoption">
    <EmojiEmotionsIcon htmlColor="gold"className="shareIcon"/>
        <span className="shareoptiontext">Feelings</span> 
    </div>
    <button className="shareButton">Share</button>
</div>

</div>

        </div>
    </div>
  )
}

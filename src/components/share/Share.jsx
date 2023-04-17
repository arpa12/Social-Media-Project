import "./share.css";
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function Share() {
  return (
    <div className="share">
      <div className="sharewrapper">
        <div className="shareTop">
            <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
            <input placeholder="What's in your mind?" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    < PermMediaIcon htmlColor="tomato" className="shareIcon" />
                    <span className="shareOptionText">Photo or Video</span>
                </div>

                <div className="shareOption">
                    < LabelImportantIcon htmlColor="blue" className="shareIcon" />
                    <span className="shareOptionText">Tag</span>
                </div>

                <div className="shareOption">
                    < LocationOnIcon htmlColor="green" className="shareIcon" />
                    <span className="shareOptionText">Location</span>
                </div>

                <div className="shareOption">
                    < EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon" />
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  )
}

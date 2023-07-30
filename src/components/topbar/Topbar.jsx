import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/NotificationsNone';
export default function Topbar(){
    return(
        <div className="topbarContainer">
          
          <div className="topbarLeft">
            <span className="logo">Lamasocial</span>
          </div>
          <div className="topbarCenter"> <div className="searchBar"><span className="searchIcon"><SearchIcon/>
            </span>
          <input className="searchInput" type="text" placeholder="Search for friends, post or video" />
          </div>
          </div>
          <div className="topbarRight">
            <div className="topbarlinks">
                <span className="topbarlinks">Homepage</span>
                <span className="topbarlinks">Timeline</span> 
            </div>
            <div className="topbaritems">
            <div className="topbarIcons">
                <PersonIcon/><span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIcons">
                <ChatIcon/><span className="topbarIconBadge">3</span>
            </div>
            <div className="topbarIcons">
                <NotificationsIcon/><span className="topbarIconBadge">1</span>
            </div>
            </div>
          <img src="/assets/1.jpeg" alt="" className="topbarImage"/>
          </div>
        </div>
    );
}
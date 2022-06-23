
import SideBarProfile from "./SideBarProfile";
import Navbar from '../NavBar/NavBar'
import ProfileId from './ProfileId';
import styles from '../styles/ListProfile.module.scss';


export const ListProfile = () => {
    return <div>    
            <Navbar />
            <div className={styles.container}>
            <SideBarProfile></SideBarProfile>
            <ProfileId></ProfileId>
            </div>



    </div>


};

export const ListBuyerReputation = () => {
    return <div>    
            <Navbar />
            <div className={styles.container}>
            <SideBarProfile></SideBarProfile>
            
            </div>



    </div>


};
export const ListBuyerNotifications = () => {
    return <div>    
            <Navbar />
            <div className={styles.container}>
            <SideBarProfile></SideBarProfile>
            
            </div>



    </div>


};

export const ListSellerNotifications = () => {
    return <div>    
            <Navbar />
            <div className={styles.container}>
            <SideBarProfile></SideBarProfile>
           
            </div>



    </div>


};

export const ListSellerChats = () => {
    return <div>    
            <Navbar />
            <div className={styles.container}>
            <SideBarProfile></SideBarProfile>
           
            </div>



    </div>


};

export const ListOrders = () => {
    return <div>    
            <Navbar />
            <div className={styles.container}>
            <SideBarProfile></SideBarProfile>
        
            </div>



    </div>


};



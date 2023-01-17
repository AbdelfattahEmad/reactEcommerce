import { Link } from "react-router-dom";

const UserSidebar=()=>{
    return( 
    <div className="Sidebar">
       
        <div className="d-flex flex-column side-div">
        <Link to="/admin/UP" style={{textDecoration :"none"}}>
            <div className="side">
            Manage orders
            </div>
            </Link>
        </div>

        <div className="d-flex flex-column side-div">
        <Link to="/admin/Fav" style={{textDecoration :"none"}}>
        <div className="side">
            favorate Product 
            </div>
        </Link>
        </div>

        <div className="d-flex flex-column side-div">
        <Link to="/admin/personal" style={{textDecoration :"none"}}>
        <div className="side">
        Personal addresses
            </div>
        </Link>
        </div>

        <div className="d-flex flex-column side-div">
        <Link to="/admin/Profile" style={{textDecoration :"none"}}>
        <div className="side">
            Profile
            </div>
        </Link>
        </div>



    </div>
    )

}
export default UserSidebar;
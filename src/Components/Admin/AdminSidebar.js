import { Link } from "react-router-dom";

const AdminSidebar=()=>{
    return( 
    <div className="Sidebar">
       
        <div className="d-flex flex-column side-div">
        <Link to="/admin/Data" style={{textDecoration :"none"}}>
            <div className="side">
            Data management
            </div>
            </Link>
        </div>

        <div className="d-flex flex-column side-div">
        <Link to="/admin/order" style={{textDecoration :"none"}}>
        <div className="side">
            Product management
            </div>
        </Link>
        </div>

        <div className="d-flex flex-column side-div">
        <Link to="/admin/brand" style={{textDecoration :"none"}}>
        <div className="side">
            Add a brand
            </div>
        </Link>
        </div>

        <div className="d-flex flex-column side-div">
        <Link to="/admin" style={{textDecoration :"none"}}>
        <div className="side">
            Add a rating
            </div>
        </Link>
        </div>

        <div className="d-flex flex-column side-div">
        <Link to="/admin/addsubCat" style={{textDecoration :"none"}}>
        <div className="side">
            Add a subcategory
            </div>
        </Link>

        </div>

        <div className="d-flex flex-column side-div">
        <Link to="/admin/addProduct" style={{textDecoration :"none"}}>
        <div className="side">
            Add special product 
            </div>
        </Link>
        </div>

        <div className="d-flex flex-column side-div">
        <Link to="/Sp/admin" style={{textDecoration :"none"}}>
        <div className="side">
            Add Some prouducts
            </div>
        </Link>
        </div>
    </div>
    )

}
export default AdminSidebar;
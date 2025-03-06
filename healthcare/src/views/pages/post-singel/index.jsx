import React, { useEffect, useState } from "react";
import Edit from "../../../assets/edit.png";
import Delete from "../../../assets/delete.png";
import { Link } from "react-router-dom";
import "./index.scss"

const Single = () => {
  //   const [post, setPost] = useState({});

  //   const location = useLocation();
  //   const navigate = useNavigate();

  //   const postId = location.pathname.split("/")[2];

  //   const { currentUser } = useContext(AuthContext);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const res = await axios.get(`/posts/${postId}`);
  //         setPost(res.data);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };
  //     fetchData();
  //   }, [postId]);

  //   const handleDelete = async () => {
  //     try {
  //       await axios.delete(`/posts/${postId}`);
  //       navigate("/");
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  // const getText = (html) => {
  //   const doc = new DOMParser().parseFromString(html, "text/html");
  //   return doc.body.textContent;
  // };

  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img src="https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          <div className="info">
            <span>John</span>
            <p>2 ngày trước</p>
          </div>

          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus
          excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem
          ratione sit debitis deserunt repellendus numquam ab vel perspiciatis
          corporis!
        </p>
      </div>
    </div>
  );
};

export default Single;

import React, {useState} from "react";
import {useDispatch}
    from "react-redux";
import "../../../vendors/bootstrap/css/bootstrap.css"
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"

// const whatsHappening = () => {
//     let [whatsHappening, setWhatsHappening]
//         = useState('');
//     const tuitClickHandler = () => {
//         console.log(whatsHappening);
//     }
//     return(
//         <div className="row mt-2">
//             <div className="col-1 col-lg-1 col-xl-1">
//                 <img src="../images/react.png" className="wd-display-img" alt = "Post"/>
//             </div>
//             <div className="col-11 col-lg-11 col-xl-11">
//             <textarea className = "wd-whats-happening" rows = "4" placeholder = "What's happening?">
//             </textarea>
//                 <i className="fa-solid fa-image wd-whats-happening-icon wd-padded-right"/>
//                 <i className="fa-solid fa-chart-gantt wd-whats-happening-icon wd-padded-right"/>
//                 <i className="fa-solid fa-face-smile wd-whats-happening-icon wd-padded-right"/>
//                 <i className="fa-solid fa-calendar wd-whats-happening-icon wd-padded-right"/>
//                     <a href="/public/tuiter/tuit.html"
//                        className="btn btn-primary btn-block rounded-pill float-end">
//                         Tweet</a>
//             </div>
//
//         </div>
//     );
// }
// export default whatsHappening;
// import React, {useState} from "react";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
            tuit: whatsHappening
        });
    }
    return (
        <>
      <textarea value={whatsHappening}
                onChange={(event) =>
                    setWhatsHappening(event.target.value)}
                className = "wd-whats-happening"
                rows = "4" placeholder = "What's happening?"
      >
      </textarea>
            <i className="fa-solid fa-image wd-whats-happening-icon wd-padded-right"/>
            <i className="fa-solid fa-chart-gantt wd-whats-happening-icon wd-padded-right"/>
            <i className="fa-solid fa-face-smile wd-whats-happening-icon wd-padded-right"/>
            <i className="fa-solid fa-calendar wd-whats-happening-icon wd-padded-right"/>
            <button onClick={tuitClickHandler}
                    className="btn btn-primary btn-block rounded-pill float-end">
                Tweet
            </button>
        </>
    );
}
export default WhatsHappening;
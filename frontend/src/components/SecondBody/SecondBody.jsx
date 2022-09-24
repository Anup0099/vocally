import React from "react";
import footImg from "../../assets/footImg.png";
import "./secondbody.css";
const SecondBody = () => {
  return (
    <>
      <div className="secondBody" id="secondBody">
        <div className="SecondBodyLeft">
          <img src={footImg} alt="" />
        </div>
        <div className="SecondBodyRight">
          <h1>Focused On Time Saving</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
            doloribus corporis, hic laborum animi voluptatem et neque vitae
            distinctio nesciunt.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos sequi debitis amet, voluptas voluptate optio, nostrum corporis voluptatibus modi quibusdam, architecto esse magni molestias natus illo repudiandae accusantium necessitatibus hic velit! Exercitationem libero earum vero cupiditate provident tempora nemo nulla dicta iure delectus ipsam, eligendi perferendis assumenda ipsa iste soluta.
          </p>
          <button>Download The Mobile App</button>
        </div>
      </div>
    </>
  );
};

export default SecondBody;

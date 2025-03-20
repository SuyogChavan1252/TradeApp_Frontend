import React from "react";
function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src="media/images/education.svg" style={{ width: "75%" }}></img>
        </div>
        <div className="col-6">
          <h2 className="mb-3 fs-2">Free and open market education</h2>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India.No extra charges
          </p>
          <a href="">
            Versity <i class="fa-solid fa-arrow-right"></i>
          </a>
          <p className="mt-5">
            We pioneered the concept of discount broking and price transparency
            in India.No extra charges
          </p>
          <a href="">
            Trading Q&A <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Education;

import React from "react";
import anhPhuoc from "../../Images/Ảnh Phước.jpg";
import anhHung from "../../Images/Ảnh Hùng.jpg";
export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div
          className="col-md-8 col-md-offset-2 section-title"
          style={{
            width: "100%",
            textAlign: "center",
          }}
        >
          <h2>Meet the Team</h2>
          <p>
            We are a team of 2 students from Ho Chi Minh City University of
            Technology.
          </p>
        </div>
        <div
          id="row"
          style={{
            // display: "flex",
            justifyContent: "center",
          }}
        >
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-6 col-sm-6 team">
                  <div
                    // className="thumbnail"
                    style={{ maxWidth: "240px !important" }}
                  >
                    {" "}
                    <img
                      src={i === 0 ? anhPhuoc : anhHung}
                      alt="..."
                      className="team-img"
                      style={{ height: "240px" }}
                    />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};

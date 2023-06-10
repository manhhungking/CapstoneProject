import React, { useState } from "react";
import { useRedirect } from "react-admin";
import { Rating } from "react-simple-star-rating";
import axios from "axios";
import LoadingButton from "@mui/lab/LoadingButton";
function updateTestMark(Score, id) {}

export const RatingTest = (props) => {
  const [rating, setRating] = useState(0);
  const redirect = useRedirect();
  // Catch Rating value
  async function handleRating(rate) {
    setRating(rate);
    console.log("Rate: ", rate);
  }
  async function submit() {
    console.log(rating);
    // await axios // update lịch sử làm bài và kết quả
    //   .patch("http://localhost:8000/test_result/".concat(props.id), {
    //     Score: props.Score,
    //     Star: rating,
    //   })
    //   .then((res) => {
    //     // console.log("Data save practice test: ", res.data);
    //     redirect("/app/practice_tests/result/".concat(props.id));
    //   })
    //   .catch((err) => {
    //     // console.log(err);
    //   });
  }
  // Optinal callback functions

  return (
    <div className="Wrapper">
      <h3>Please rate my test</h3>
      <Rating
        onClick={handleRating}
        initialValue={rating}
        size="25"
        allowHover
        showTooltip
        allowFraction
        tooltipArray={[
          "Terrible +",
          "Terrible",
          "Bad +",
          "Bad",
          "Average",
          "Average +",
          "Good",
          "Good +",
          "Awesome",
          "Awesome +",
        ]}
      />
      <div
        style={{
          display: "flex",
          columnGap: "50px",
          rowGap: "15px",
        }}
      >
        <LoadingButton
          color="primary"
          onClick={() => {
            submit();
          }}
          loading={false}
          variant="contained"
          size="small"
          className="SaveButton"
          sx={{
            marginBottom: "12px",
            marginTop: "8px",
          }}
        >
          Submit
        </LoadingButton>
        <LoadingButton
          color="primary"
          onClick={() => {
            console.log("Save");
            // test_result_Save();
          }}
          loading={false}
          variant="contained"
          size="small"
          className="SaveButton"
          sx={{
            marginBottom: "12px",
            marginTop: "8px",
          }}
        >
          Cancel
        </LoadingButton>
      </div>
    </div>
  );
};

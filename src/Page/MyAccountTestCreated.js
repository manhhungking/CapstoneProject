import * as React from "react";
import { Container, Paper, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { useState, useEffect } from "react";
import "../Style/MyAccount.css";
import axios from "axios";
import userBanner from "../Images/user_banner.png";
import userIcon from "../Images/user_icon5.png";

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
function hmsToSeconds(t) {
  const [hours, minutes, seconds] = t.split(":");
  return Number(hours) * 60 * 60 + Number(minutes) * 60 + Number(seconds);
}

function secondsToHMS(secs) {
  return new Date(secs * 1000).toISOString().substr(11, 8);
}
function convertQueryDataToQuestionList(data) {
  let columns = [
    { field: "id", hide: true, width: 40 },
    {
      field: "test_name",
      hide: false,
      headerName: "Test name",
      width: 200,
    },
    {
      field: "username",
      hide: false,
      headerName: "Username",
      width: 130,
    },
    { field: "score", hide: false, headerName: "Score", width: 60 },
    {
      field: "date",
      hide: true,
      headerName: "Taken on",
      type: "dateTime",
      width: 180,
    },
    {
      field: "exam_id",
      hide: false,
      headerName: "Exam id",
      width: 80,
    },
    {
      field: "time",
      hide: false,
      headerName: "Time taken",
      type: "time",
      width: 120,
    },
    {
      field: "last_modified_date",
      hide: true,
      headerName: "Modified date",
      width: 140,
    },
    {
      field: "view",
      hide: false,
      headerName: "View",
      sortable: false,
      disableClickEventBubbling: true,
      width: 80,
      renderCell: (params) => {
        return (
          <Button
            variant="outlined"
            size="small"
            href={"/app/practice_tests/result/" + params.row.id}
          >
            View
          </Button>
        );
      },
    },
  ];
  let rows = [];
  let result = {};
  for (let e of data) {
    let start = e.Start_time;
    let end = e.End_time;
    let diff = secondsToHMS(hmsToSeconds(end) - hmsToSeconds(start));
    var d = new Date(Date.parse(e.Date));
    let k = {
      id: e.id,
      test_name: e.test_name,
      username: e.Username,
      score: e.Score,
      date: d, //dformat,
      time: diff,
      exam_id: e.exam_id,
      // diff: diff,
      last_modified_date: e.last_modified_date,
      view: e.exam_id,
    };
    rows.push(k);
  }
  result = { columns, rows, initialState };
  // console.log("Question List: ", rows);
  return result;
}
const VISIBLE_FIELDS = ["name", "rating", "country", "dateCreated", "isAdmin"];
let initialState = {
  columns: {
    columnVisibilityModel: {
      id: false,
      last_modified_date: false,
      date: false,
    },
  },
};
export const MyAccountTestCreated = () => {
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("auth"))
  );
  const [questionList, setQuestionList] = useState([]);
  const { data } = useDemoData({
    dataSet: "Employee",
    visibleFields: VISIBLE_FIELDS,
    rowLength: 0,
  });
  useEffect(() => {
    axios
      .get(
        "http://localhost:8000/my_account/tests/created/".concat(userInfo.id)
      )
      .then((res) => {
        setQuestionList(convertQueryDataToQuestionList(res.data));
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [userInfo]);
  return (
    <Container
      xs={{ maxWidth: 768 }}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "30px",
      }}
    >
      <div className="sm-container">
        <div className="profile-cover">
          <div className="profile-cover-img-wrapper">
            <img
              className="profile-cover-img"
              src={
                userInfo
                  ? userInfo.Banner !== ""
                    ? userInfo.Banner
                    : userBanner
                  : userBanner
              }
              alt={userInfo ? userInfo.fullName + "-cover" : "user-cover"}
            />
          </div>
        </div>
        <div className="mx-md-auto mb-3 text-center">
          <div className="profile-cover-avatar">
            <img
              className="avatar-img"
              src={
                userInfo
                  ? userInfo.Avatar !== ""
                    ? userInfo.Avatar
                    : userIcon
                  : userIcon
              }
              alt={userInfo ? userInfo.Username : "user"}
            />
            <a
              className="avatar-button text-dark"
              href="/app/my_account/settings/"
            >
              <i className="avatar-icon fa fa-pencil" />
            </a>
          </div>

          <h1
            className="h3 profile-header-title"
            id={
              userInfo ? userInfo.Username + "-public-page" : "user-public-page"
            }
          >
            {userInfo ? userInfo.Username : "Guest"}{" "}
          </h1>

          <div className="profile-header-content">
            <p />
          </div>
        </div>
        <ul className="nav nav-tabs mb-4">
          <li className="nav-item">
            <a className="nav-link " href="/app/my_account/tests/">
              Exam results
            </a>
            <a
              className="nav-link active"
              href="/app/my_account/tests/created/"
            >
              Exam created management
            </a>
          </li>
        </ul>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              sx={{ paddingTop: "4px" }}
              pagination
              {...data}
              {...questionList}
              slots={{
                toolbar: GridToolbar,
              }}
              initialState={{
                // ...data.initialState,
                ...initialState,
                // filter: {
                //   ...data.initialState?.filter,
                //   ...questionList.initialState?.filter,
                //   filterModel: {
                //     // items: [
                //     //   {
                //     //     field: "score",
                //     //     operator: ">",
                //     //     value: "0",
                //     //   },
                //     // ],
                //   },
                // },
                pagination: { paginationModel: { pageSize: 25 } },
              }}
            />
          </div>
        </Paper>
      </div>
    </Container>
  );
};

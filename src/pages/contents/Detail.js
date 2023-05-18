import React from "react";
import { post } from "../contents/data";
import { useParams } from "react-router";

export default function Detail() {
  const params = useParams();
  const detail = post.find((item) => item.seq == params.seq);
  return (
    <div>
      {detail && (
        <div>
          <div
            style={{
              height: "200px",
              fontSize: 80,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {detail.title}
          </div>
          <div
            style={{
              fontSize: 16,
              display: "flex",
              justifyContent: "center",
              color: "darkgray",
            }}
          >
            {detail.date}
          </div>
          <div style={{ margin: "100px" }}>{detail.subject}</div>
        </div>
      )}
      {!detail && <div>잘못된 접근입니다.</div>}
    </div>
  );
}

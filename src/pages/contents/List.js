import React from "react";
import { category, post } from "../contents/data";
import { useLocation } from "react-router";

export default function List() {
  const location = useLocation();
  let search = new URLSearchParams(location.search);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>제목</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {post
            .filter((item) => {
              if (search.get("category") == "all") return item;
              else if (search.get("category") == "none")
                return item.category == "";
              else return item.category == search.get("category");
            })
            .sort((a, b) => b.seq - a.seq)
            .map((item) => (
              <tr key={item.seq}>
                <td>{item.title}</td>
                <td>{item.date}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

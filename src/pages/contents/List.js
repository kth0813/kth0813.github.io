import React, { useEffect, useState } from "react";
import { post } from "../contents/data";
import { useLocation, useNavigate } from "react-router";

export default function List() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  let search = new URLSearchParams(location.search);
  useEffect(() => {
    setCurrentPage(1);
  }, [search.get("category")]);
  const onClickDetail = (seq) => (e) => {
    e.preventDefault();
    navigate("/" + seq + "?category=" + search.get("category"));
  };
  const itemsPerPage = 10;
  const totalPages = Math.ceil(
    post.filter((item) => {
      if (search.get("category") == "all") return item;
      else if (search.get("category") == "none") return item.category == "";
      else return item.category == search.get("category");
    }).length / itemsPerPage
  );
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = post
    .filter((item) => {
      if (search.get("category") == "all") return item;
      else if (search.get("category") == "none") return item.category == "";
      else return item.category == search.get("category");
    })
    .sort((a, b) => b.seq - a.seq)
    .slice(startIndex, endIndex);
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };
  return (
    <div>
      <table style={{ margin: "20px auto 0" }}>
        <thead>
          <tr>
            <th style={{ width: "300px" }}>제목</th>
            <th style={{ width: "100px" }}>작성일</th>
          </tr>
        </thead>
        <tbody>
          {currentData
            .filter((item) => {
              if (search.get("category") == "all") return item;
              else if (search.get("category") == "none")
                return item.category == "";
              else return item.category == search.get("category");
            })
            .map((item) => (
              <tr key={item.seq} onClick={onClickDetail(item.seq)}>
                <td>{item.title}</td>
                <td>{item.date}</td>
              </tr>
            ))}
        </tbody>
      </table>
      {totalPages > 1 && (
        <div style={{ margin: "20px auto", width: "100px" }}>
          {currentPage > 1 && (
            <span onClick={goToFirstPage}>
              <i className="fas fa-angles-left"></i>{" "}
            </span>
          )}
          {currentPage > 1 && (
            <span style={{ margin: "0 5px" }} onClick={goToPreviousPage}>
              <i className="fas fa-angle-left" />
            </span>
          )}
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNumber) => (
              <span
                key={pageNumber}
                onClick={() => goToPage(pageNumber)}
                style={{
                  fontWeight: pageNumber === currentPage ? "bold" : "normal",
                  margin: "0 5px",
                }}
              >
                {pageNumber}
              </span>
            )
          )}
          {currentPage < totalPages && (
            <span style={{ margin: "0 5px" }} onClick={goToNextPage}>
              <i className="fas fa-angle-right" />
            </span>
          )}
          {currentPage < totalPages && (
            <span onClick={goToLastPage}>
              <i className="fas fa-angles-right" />
            </span>
          )}
        </div>
      )}
    </div>
  );
}

import React from "react";
import { useLocation } from "react-router";

export default function Search() {
  const location = useLocation();
  let search = new URLSearchParams(location.search);
  console.log();
  return (
    <h1>
      {search.get("param")
        ? JSON.stringify(search.get("param")) + "검색결과"
        : "검색 결과가 없습니다"}
    </h1>
  );
}

import React from "react";
/* global history */
/* global location */
/* global window */

/* eslint no-restricted-globals: ["off"] */
export const changePath = (path, state) => {
  if (location.pathname == path) return;
  history.push(path, state);
};
export const replacePath = (path, state) => {
  if (location.pathname == path) return;
  history.replace(path, state);
};

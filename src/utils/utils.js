import React from "react";
/* global history */
/* global location */
/* global window */

/* eslint no-restricted-globals: ["off"] */
export const changePath = (path, state) => {
  if (location.pathname == path) return;
  history.pushState(path, state);
};
export const replacePath = (path, state) => {
  if (location.pathname == path) return;
  history.replaceState(path, state);
};

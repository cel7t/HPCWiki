/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx("footer", {
        "footer--dark": style === "dark",
      })}
    >
      <div className="container container-fluid">
        <div className="row">
          <div className="left-logo">{logo}</div>
          <div className="right-links">{links}</div>
        </div>
        <div className="footer__bottom text--center">{copyright}</div>
      </div>
    </footer>
  );
}

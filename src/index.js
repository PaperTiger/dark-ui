const css = `
// Credits
// Mirko Santangelo, Papertiger, All Right Reserved

::selection {
  background: #30c2ff;
  color: white;
}

.svg-container {
	fill: white;
}

[class*="pageContent-"] {
  background: #2a2d2d;
  color: #c1c5c9;
}

[class*="team_admin--table"] [class*="lazy_input--lazyInput-"] {
  background: #262829;
  color: #c1c5c9;
}

[class*="top_bar--header-"],
[class*="pages_panel--edgeLine-"],
[class*="toolbar_view--toolbar-"] {
  background-color: #262829;
  border-bottom: 1px solid #161617;
}

[class*="filename_view--pageTitle"] {
  background-color: #262829;
}

[class*="importPrompt-"] {
  color: #676c70;
  fill: #676c70;
}

[class*="library_preferences_modal--toggle-"] {
  background: #c1c5c9;
}

@media screen and (-webkit-min-device-pixel-ratio: 2),
screen and (min-resolution: 2dppx) {
  [class*="file_tile--shadowTileBorder-"] {
    box-shadow: inset 0 0 0 0.5px rgba(0, 0, 0, 0.5);
  }
}

[class*="scroll_container--trackDragging"] {
  border-left: 1px solid #262829;
  background: #33333350;
}

[class*="scroll_container--scrollBar-"]:after {
  background: #11111180;
}

[class*="scroll_container--track"]:hover {
  border-left: 1px solid #1b1c1c;
  background: #262829;
}

[class*="left_panel--tabs"] {
  box-shadow: inset 0 1px 0 0 #1b1c1c;
}

[class*="file_browser--navContent-"] {
  box-shadow: 1px 0 0 0 #1b1c1c;
}

[class*="sidebar_library--searchInput"] {
  color: #c1c5c9;
}

[class*="style_icon--bitmapImage"]:not([class*="style_icon--fillIcon"]) {
  -webkit-filter: invert(90%);
  filter: invert(90%);
}

[class*="style_preview_panel--preview"] {
  border-bottom: 1px solid #1b1c1c) !importan;
  border-top: 1px solid #1b1c1c) !importan;
}

[class*="style_preview_panel--renderedTextStyleThumbnail"] {
  -webkit-filter: invert(100%);
  filter: invert(100%);
}

[class*="style_icon--fillIcon"] [class*="style_icon--bitmapImage"],
[class*="style_preview_panel--preview"] [class*="style_icon--bitmapImage"],
[class*="style_preview_panel--preview"]
[class*="style_preview_panel--renderedFillStyleThumbnail"] {
  -webkit-filter: none;
  filter: none;
}

[class*="role_row--select"] {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSI2IiB2aWV3Qm94PSIwIDAgOSA2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICA8ZyBkYXRhLW5hbWU9IkNhbnZhcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyODEyIC0xMTgwOCkiIGZpbGw9Im5vbmUiPiAgICAgICAgPGcgZGF0YS1uYW1lPSJWZWN0b3IgNyAoU3Ryb2tlKSI+ICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjI4MTIuNiAxMTgwOC42KSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgwIiBmaWxsPSIjNjY2NjY2IiBmaWxsLW9wYWNpdHk9IjEiLz4gICAgICAgICAgICA8L2c+ICAgICAgICA8L2c+ICAgIDwvZz4gICAgPGRlZnM+ICAgICAgICA8cGF0aCBpZD0icGF0aDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNIDAgMC43MDcxMDdMIDAuNzA3MTA3IDBMIDMuODUzNTUgMy4xNDY0NUwgNyAwTCA3LjcwNzExIDAuNzA3MTA3TCAzLjg1MzU1IDQuNTYwNjZMIDAgMC43MDcxMDdaIi8+ICAgIDwvZGVmcz48L3N2Zz4=);
}

[class*="basic_form--checkbox"]:checked:after {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgdmVyc2lvbj0iMi4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIg0KICAgIHhtbG5zOmZpZ21hPSJodHRwOi8vd3d3LmZpZ21hLmNvbS9maWdtYS9ucyI+DQogICAgPGcgaWQ9IkNhbnZhcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTgwIDQ4MTUpIiBmaWdtYTp0eXBlPSJjYW52YXMiPg0KICAgICAgICA8bWFzayBpZD0ibWFzazBfb3V0bGluZSIgbWFzay10eXBlPSJhbHBoYSI+DQogICAgICAgICAgICA8cGF0aCBkPSINCk0gLTU4MCAtNDgxNQ0KTCAtNTcwIC00ODE1DQpMIC01NzAgLTQ4MDUNCkwgLTU4MCAtNDgwNQ0KTCAtNTgwIC00ODE1DQpaIiBmaWxsPSIjRkZGRkZGIiAvPg0KICAgICAgICA8L21hc2s+DQogICAgICAgIDxnIGlkPSJjaGVjay1nbHlwaCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbDsiIG1hc2s9InVybCgjbWFzazBfb3V0bGluZSkiIGZpZ21hOnR5cGU9ImZyYW1lIj4NCiAgICAgICAgICAgIDxnIGlkPSJjaGVjay1nbHlwaCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbDsiIGZpZ21hOnR5cGU9InZlY3RvciI+DQogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aDBfZmlsbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU3OS41IC00ODEzKSIgZmlsbD0iI0MxQzVDOSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbDsiIC8+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQogICAgPGRlZnM+DQogICAgICAgIDxwYXRoIGlkPSJwYXRoMF9maWxsIiBkPSINCk0gMS41IDINCkwgMCAzLjUNCkwgMy41IDcNCkwgOSAxLjUNCkwgNy41IDANCkwgMy41IDQNCkwgMS41IDINCloiIC8+DQogICAgPC9kZWZzPg0KPC9zdmc+);
  background-position: 50%;
  background-repeat: no-repeat;
}

[class*="sidebar_library--margin24"] [class*="sidebar_library--searchInput"] {
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcuMzk3NDYgOC4xMDQ1NUM2LjYxODE2IDguNzI5NTUgNS42Mjg0MiA5LjEwMzQ1IDQuNTUxNzYgOS4xMDM0NUMyLjAzODA5IDkuMTAzNDUgMCA3LjA2NTU1IDAgNC41NTE3QzAgMi4wMzc5IDIuMDM4MDkgMCA0LjU1MTc2IDBDNy4wNjU0MyAwIDkuMTAzNTIgMi4wMzc5IDkuMTAzNTIgNC41NTE3QzkuMTAzNTIgNS42Mjg2IDguNzI5NDkgNi42MTgxIDguMTA0NDkgNy4zOTc1MkwxMS4zNTM1IDEwLjY0NjVMMTAuNjQ2IDExLjM1MzZMNy4zOTc0NiA4LjEwNDU1Wk04LjEwMzUyIDQuNTUxN0M4LjEwMzUyIDYuNTEzMzEgNi41MTMxOCA4LjEwMzQ1IDQuNTUxNzYgOC4xMDM0NUMyLjU5MDMzIDguMTAzNDUgMSA2LjUxMzMxIDEgNC41NTE3QzEgMi41OTAxNSAyLjU5MDMzIDEgNC41NTE3NiAxQzYuNTEzMTggMSA4LjEwMzUyIDIuNTkwMTUgOC4xMDM1MiA0LjU1MTdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIiBmaWxsPSIjQzFDNUM5IiBmaWxsLW9wYWNpdHk9IjAuNyIvPg0KPC9zdmc+DQo=)
  no-repeat center left 23px;
}

[class*="sidebar_library--margin12"] [class*="sidebar_library--searchInput"] {
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNy4zOTc0NiA4LjEwNDU1QzYuNjE4MTYgOC43Mjk1NSA1LjYyODQyIDkuMTAzNDUgNC41NTE3NiA5LjEwMzQ1QzIuMDM4MDkgOS4xMDM0NSAwIDcuMDY1NTUgMCA0LjU1MTdDMCAyLjAzNzkgMi4wMzgwOSAwIDQuNTUxNzYgMEM3LjA2NTQzIDAgOS4xMDM1MiAyLjAzNzkgOS4xMDM1MiA0LjU1MTdDOS4xMDM1MiA1LjYyODYgOC43Mjk0OSA2LjYxODEgOC4xMDQ0OSA3LjM5NzUyTDExLjM1MzUgMTAuNjQ2NUwxMC42NDYgMTEuMzUzNkw3LjM5NzQ2IDguMTA0NTVaTTguMTAzNTIgNC41NTE3QzguMTAzNTIgNi41MTMzMSA2LjUxMzE4IDguMTAzNDUgNC41NTE3NiA4LjEwMzQ1QzIuNTkwMzMgOC4xMDM0NSAxIDYuNTEzMzEgMSA0LjU1MTdDMSAyLjU5MDE1IDIuNTkwMzMgMSA0LjU1MTc2IDFDNi41MTMxOCAxIDguMTAzNTIgMi41OTAxNSA4LjEwMzUyIDQuNTUxN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgMSkiIGZpbGw9IiNDMUM1QzkiIGZpbGwtb3BhY2l0eT0iMC43Ii8+DQo8L3N2Zz4=)
  no-repeat center left 11px;
  color: #c1c5c9;
}

[class*="checkbox--checkbox"]::after,
[class*="raw_components--modalPanel"] [class*="raw_components--input--"],
[class*="basic_form--btn"]:not([class*="basic_form--primaryBtn"]),
[class*="raw_components--input"] {
  background: #212325;
  border-color: #1b1c1c;
}

[class*="emoji-mart-search"] input {
  color: #c1c5c9;
  background: #262829;
}

[class*="constraints_panel--centerX"],
[class*="constraints_panel--centerY"],
[class*="constraints_panel--selectorContainer"] {
  border-color: #525558;
}

[class*="constraints_panel--centerX"],
[class*="constraints_panel--centerY"],
[class*="constraints_panel--selectorContainer"] {
  border-color: #525558;
}

[class*="constraints_panel--bottom--"]:not([class*="constraints_panel--selected"])::after,
[class*="constraints_panel--left--"]:not([class*="constraints_panel--selected"])::after,
[class*="constraints_panel--centerX--"]:not([class*="constraints_panel--selected"])::after,
[class*="constraints_panel--centerY--"]:not([class*="constraints_panel--selected"])::after,
[class*="constraints_panel--right--"]:not([class*="constraints_panel--selected"])::after,
[class*="constraints_panel--top--"]:not([class*="constraints_panel--selected"])::after {
  background: #525558;
}

[class*="comments_list--activeComment"]
[class*="comments_list--commentMessage"],
[class*="comments_list--activeComment"][class*="comments_list--hovered"]
[class*="comments_list--commentMessage"],
[class*="comments_list--activeComment"]:hover
[class*="comments_list--commentMessage"] {
  color: #333536;
}

[class*="object_row--selected"] [class*="object_row--input"] {
  color: #333536;
}


[class*="sidebar--searchBox"] {
  background: #212325;
}

input[type=text]::placeholder {
  color: #676C70;
}

[class*="file_tile--settings"] {
  opacity: 1;
}
`;

export default class DarkUIPlugin {
  constructor() {
    this.enabled = localStorage.getItem("figma-dark-ui-plugin-enabled", false);

    this.options = [
      "Toggle Dark Mode",
      this.toggleDarkUI.bind(this),
      null,
      null
    ];

    window.figmaPlus.createPluginsMenuItem(...this.options);

    if (this.enabled) {
      this.toggleDarkUI();
    }
  }

  toggleDarkUI() {
    const palette = {
      bgLightest: "#676C70",
      bgLight: "#333536",
      bgBase: "#262829",
      bgDark: "#1B1C1C",
      bgActive: "#30c2ff",
      txtLabelSection: "#EBF0F5",
      txtLabel: "#C1C5C9",
      txtDisabled: "#525558",
      txtSymbol: "#907cff",
      stActivePressed: "#25b5f1"
    };

    if (document.getElementById("f-ui") === null) {
      let style = document.createElement("style");
      let cssNode = document.createTextNode(css);

      style.id = "f-ui";
      style.appendChild(cssNode);

      setTheme();

      document.head.appendChild(style);
      localStorage.setItem("figma-dark-ui-plugin-enabled", true);
    } else {
      if (
        confirm(
          "Figma needs a refresh in order to restore the default theme. Continue?"
        )
      ) {
        localStorage.removeItem("figma-dark-ui-plugin-enabled");
        setTimeout(() => {
          location.reload();
        }, 1000);
      }
    }

    function setTheme() {
      let css = "";
      const cssStack = document.styleSheets;

      Object.keys(cssStack).forEach(key => {
        let cssName = cssStack[key].href;

        if (cssName && cssName.includes("figma_app")) {
          css = cssStack[key];
        }
      });

      const rules = css.cssRules;

      for (let item of rules) {
        if (item.style != undefined) {
          changeTextColor(item);
          changeBackground(item);
          changeFill(item);
          changeStroke(item);
          changeBorderBottomColor(item);
          changeBorderRightColor(item);
          changeBorderLeftColor(item);
          changeBorderTopColor(item);
        }
      }
    }

    function changeTextColor(item) {
      if (item.style.color != "") {
        switch (item.style.color) {
          case "rgb(0, 0, 0)":
            item.style.color = palette.txtLabelSection;
            break;
          case "rgba(0, 0, 0, 0.5)":
            item.style.color = palette.bgLightest;
            break;
          case "rgb(5, 5, 5)":
            item.style.color = palette.txtLabelSection;
            break;
          case "rgb(44, 44, 44)":
            item.style.color = palette.txtLabel;
            break;
          case "rgb(68, 68, 68)":
            item.style.color = palette.txtLabel;
            break;
          case "rgba(68, 68, 68, 0.3)":
            item.style.color = palette.txtDisabled;
            break;
          case "rgb(170, 170, 170)":
            item.style.color = palette.bgLightest;
            break;
          case "rgb(212, 212, 212)":
            item.style.color = palette.bgLightest;
            break;
        }
      }
    }

    function changeBackground(item) {
      if (item.style.backgroundColor != "") {
        switch (item.style.backgroundColor) {
          case "rgb(44, 44, 44)":
            item.style.backgroundColor = palette.bgLight;
            break;
          case "rgb(212, 212, 212)":
            item.style.backgroundColor = palette.bgLight;
            break;
          case "rgb(229, 229, 229)":
            item.style.backgroundColor = palette.bgDark;
            break;
          case "rgb(239, 239, 239)":
            item.style.backgroundColor = palette.bgLight;
            break;
          case "rgb(248, 248, 248)":
            item.style.backgroundColor = palette.bgBase;
            break;
          case "rgb(252, 252, 252)":
            item.style.backgroundColor = palette.bgBase;
            break;
          case "rgb(255, 255, 255)":
          case "#FFF":
          case "rgba(255, 255, 255, 0.95)":
          case "rgba(255, 255, 255, 0.953)":
            item.style.backgroundColor = palette.bgBase;
            break;
        }
      }
    }

    function changeFill(item) {
      if (item.style.fill != "") {
        switch (item.style.fill) {
          case "rgb(0, 0, 0)":
            item.style.fill = palette.txtLabelSection;
            break;
          case "rgb(5, 5, 5)":
            item.style.fill = palette.txtLabelSection;
            break;
          case "rgb(44, 44, 44)":
            item.style.fill = palette.txtLabelSection;
            break;
          case "rgb(68, 68, 68)":
            item.style.fill = palette.txtLabelSection;
            break;
          case "hsla(0,0%,67%,0.3)":
            item.style.fill = palette.txtDisabled;
            break;
          case "rgb(170, 170, 170)":
            item.style.fill = palette.bgLightest;
            break;
          case "rgb(212, 212, 212)":
            item.style.fill = palette.bgLightest;
            break;
          case "rgb(229, 229, 229)":
            item.style.fill = palette.bgDark;
            break;
          case "rgb(239, 239, 239)":
            item.style.fill = palette.bgLight;
            break;
          case "rgb(252, 252, 252)":
            item.style.fill = palette.bgBase;
            break;
        }
      }
    }

    function changeStroke(item) {
      if (item.style.stroke != "") {
        switch (item.style.stroke) {
          case "rgb(170, 170, 170)":
            item.style.stroke = palette.bgLightest;
            break;
        }
      }
    }

    function changeBorderBottomColor(item) {
      if (item.style.borderBottomColor != "") {
        switch (item.style.borderBottomColor) {
          case "rgb(239, 239, 239)":
            item.style.borderBottomColor = palette.bgDark;
            break;
          case "rgb(212, 212, 212)":
            item.style.borderBottomColor = palette.bgDark;
            break;
          case "rgb(217, 217, 217)":
            item.style.borderBottomColor = palette.bgDark;
            break;
          case "rgb(229, 229, 229)":
            item.style.borderBottomColor = palette.bgDark;
            break;
        }
      }
    }

    function changeBorderRightColor(item) {
      if (item.style.borderRightColor != "") {
        switch (item.style.borderRightColor) {
          case "rgb(239, 239, 239)":
            item.style.borderRightColor = palette.bgDark;
            break;
          case "rgb(212, 212, 212)":
            item.style.borderRightColor = palette.bgDark;
            break;
          case "rgb(217, 217, 217)":
            item.style.borderRightColor = palette.bgDark;
            break;
          case "rgb(229, 229, 229)":
            item.style.borderRightColor = palette.bgDark;
            break;
        }
      }
    }

    function changeBorderLeftColor(item) {
      if (item.style.borderLeftColor != "") {
        switch (item.style.borderLeftColor) {
          case "rgb(239, 239, 239)":
            item.style.borderLeftColor = palette.bgDark;
            break;
          case "rgb(212, 212, 212)":
            item.style.borderLeftColor = palette.bgDark;
            break;
          case "rgb(217, 217, 217)":
            item.style.borderLeftColor = palette.bgDark;
            break;
          case "rgb(229, 229, 229)":
            item.style.borderLeftColor = palette.bgDark;
            break;
        }
      }
    }

    function changeBorderTopColor(item) {
      if (item.style.borderTopColor != "") {
        switch (item.style.borderTopColor) {
          case "rgb(212, 212, 212)":
            item.style.borderTopColor = palette.bgDark;
            break;
          case "rgb(217, 217, 217)":
            item.style.borderTopColor = palette.bgDark;
            break;
          case "rgb(229, 229, 229)":
            item.style.borderTopColor = palette.bgDark;
            break;
          case "rgb(239, 239, 239)":
            item.style.borderTopColor = palette.bgDark;
            break;
          case "rgb(252, 252, 252)":
            item.style.borderTopColor = palette.bgBase;
            break;
        }
      }
    }
  }
}

window.darkUIPlugin = new DarkUIPlugin();

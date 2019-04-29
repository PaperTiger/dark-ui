const propsWithColor = [
  "color",
  "backgroundColor",
  "fill",
  "stroke",
  "borderBottomColor",
  "borderRightColor",
  "borderLeftColor",
  "borderTopColor"
];

const palette = {
  panel: "#262829",
  panelRowOnHover: "#202122",
  panelRowActive: "#36393c",
  panelRowChildActive: "#2f3132",
  panelDivider: "#36383a",
  text: "#C1C5C9",
  textCode: "#dcdee0",
  textActive: "#FFFFFF",
  textDisabled: "#818688",
  textDisabledRowActive: "#777c7e",
  textComponent: "#a694ff",
  textComponentDisabled: "#5f4fb0",
  textComponentDisabledRowActive: "#8e82c9",
  toolbarBg: "#333639",
  inputFocus: "rgba(255, 255, 255, 0.1)",
  iconButtonHover: "rgba(255, 255, 255, 0.06)"
};

const colorsMap = {
  "rgb(255, 255, 255)": palette.panel,
  "rgb(252, 252, 252)": palette.panel,
  "rgb(248, 248, 248)": palette.panelRowOnHover,
  "rgb(240, 240, 240)": palette.panelRowOnHover,
  "rgb(241, 249, 255)": palette.panelRowChildActive,
  "rgb(237, 245, 250)": palette.panelRowChildActive,
  "rgb(229, 229, 229)": palette.panelDivider,
  "rgb(239, 239, 239)": palette.panelDivider,
  "rgb(217, 217, 217)": palette.panelDivider,
  "rgb(212, 212, 212)": palette.panelDivider,
  "rgb(218, 235, 247)": palette.panelRowActive,
  "rgb(191, 186, 252)": palette.textComponentDisabledRowActive,
  "rgb(180, 180, 250)": palette.textComponentDisabledRowActive,
  "rgb(179, 179, 179)": palette.textDisabled,
  "rgb(166, 172, 175)": palette.textDisabledRowActive,
  "rgb(123, 97, 255)": palette.textComponent,
  "rgb(68, 68, 68)": palette.textCode,
  "rgb(51, 51, 51)": palette.text,
  "rgb(44, 44, 44)": palette.toolbarBg,
  "rgb(5, 5, 5)": palette.textActive,
  "rgb(0, 0, 0)": palette.textActive,
  "rgba(0, 0, 0, 0.06)": palette.iconButtonHover,
  "rgba(0, 0, 0, 0.1)": palette.inputFocus,
  "rgba(0, 0, 0, 0.15)": "rgba(255,255,255, 0.15)",
  "rgba(0, 0, 0, 0.2)": "rgba(255,255,255, 0.2)",
  "rgba(0, 0, 0, 0.3)": "rgba(255,255,255, 0.3)",
  "rgba(0, 0, 0, 0.4)": "rgba(255,255,255, 0.4)",
  "rgba(0, 0, 0, 0.6)": "rgba(255,255,255, 0.6)",
  "rgba(0, 0, 0, 0.5)": "rgba(255, 255, 255, 0.5)",
  "rgba(0, 0, 0, 0.75)": "rgba(255,255,255, 0.75)",
  "rgba(0, 0, 0, 0.8)": "rgba(255,255,255, 0.8)",
  "rgba(0, 0, 0, 0.9)": "rgba(255, 255, 255, 0.9)",
  "rgba(0, 0, 0, 0.95)": "rgba(255, 255, 255, 0.95)",
  "rgba(44, 44, 44, 0.8)": palette.toolbarBg,
  "rgba(51, 51, 51, 0.3)": palette.textDisabled,
  "rgba(123, 97, 255, 0.4)": palette.textComponentDisabled,
  "rgba(255, 255, 255, 0)": "rgba(0, 0, 0, 0)",
  "rgba(255, 255, 255, 0.2)": "rgba(0, 0, 0, 0.2)",
  "rgba(255, 255, 255, 0.4)": "rgba(0, 0, 0, 0.4)",
  "rgba(255, 255, 255, 0.05)": "rgba(0, 0, 0, 0.05)",
  "rgba(255, 255, 255, 0.5)": "rgba(0, 0, 0, 0.5)",
  "rgba(255, 255, 255, 0.8)": "rgba(0, 0, 0, 0.8)",
  "rgba(255, 255, 255, 0.95)": "rgba(0, 0, 0, 0.95)"
};

const selectorsToIgnore = [
  ".action--unfaded",
  ".action--enabled",
  ".avatar--root--2kH_E",
  ".basic_form--primaryBtn",
  ".basic_form--greenBtn",
  ".draggable_modal--backgroundOverlay--CPf6e",
  ".emoji-mart-anchor-selected",
  ".flyout_view--flyout",
  ".folder_view--folderTeamName",
  ".folder_view--pathSeparator",
  ".filename_view--title",
  ".filename_view--pathSeparator",
  ".fullscreen_menu--searchInput",
  ".header_modal--modalBackground",
  ".multilevel_dropdown--option",
  ".library_item_tile--descriptionPopout",
  ".transition_preview_pane--",
  ".top_bar--",
  ".tooltip--content",
  ".toolbar_styles--activeButton",
  ".toolbar_styles--enabledButton",
  ".user_view--name",
  ".text--_whiteText",
  ".team_link--icon",
  ".zoom_menu--zoomMenu",
  ".help_widget--helpWidget",
  ".help_widget--tooltip",
  ".raw_components--iconButtonSelected",
  ".visual_bell"
];

const cssOverrides = `

  // Figma Dark Theme | Brought to you by:
  // Mirko Santangelo, Papertiger, All Right Reserved
  
  .top_bar--header---JfcG,top_bar--header---JfcG
  .help_widget--helpWidget--22IIi { 
      background: ${palette.toolbarBg}; 
  }

  .in_app_page__REFRESH--content--1l70i {
      background-color: ${palette.panel}; 
  }

  .option_button--untoggled--2KWMQ:not(.option_button--disabled--YNeqs):hover {
      box-shadow: inset 0 0 0 1px ${palette.inputFocus};
  }

  .pages_panel--tabsHeaderBordered--28fYc {
      box-shadow: 0 1px 0 0 ${palette.panelDivider};
  }

  .search--margin24--3oubR .search--searchInput--2JmjM,
  .search--margin12--3G1pl .search--searchInput--2JmjM,
  [class*="style_icon--bitmapImage"]:not([class*="style_icon--fillIcon"]),
  [class*="style_preview_panel--renderedTextStyleThumbnail"] {
    -webkit-filter: invert(90%);
    filter: invert(90%);
  }

  .modal--title--1kOv4,
  .segmented_control--segmentSelected--3vDJm {
      fill: ${palette.text};
      color: ${palette.text};
  }

  .raw_components--textInput--23_ta:not(:disabled):not(:hover):placeholder-shown {
      background: linear-gradient(90deg,transparent 6px,rgba(255,255,255,.1) 0);
      background-size: calc(100% - 6px) 1px;
      background-position: left bottom -1px;
      background-repeat: repeat-x;
  }

  .transform_panel--sliderContainer--3SoqU div div {
      background-color: ${palette.panelDivider};
  }

  .transform_panel--sliderAnnotationStroke--PBBmO {
      border-color: ${palette.textDisabled};
  }

  .transition_preview_pane--previewPanel--3sZan {
      background: ${palette.iconButtonHover};
  }

  [class*="role_row--select"] {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSI2IiB2aWV3Qm94PSIwIDAgOSA2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICA8ZyBkYXRhLW5hbWU9IkNhbnZhcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyODEyIC0xMTgwOCkiIGZpbGw9Im5vbmUiPiAgICAgICAgPGcgZGF0YS1uYW1lPSJWZWN0b3IgNyAoU3Ryb2tlKSI+ICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjI4MTIuNiAxMTgwOC42KSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgwIiBmaWxsPSIjNjY2NjY2IiBmaWxsLW9wYWNpdHk9IjEiLz4gICAgICAgICAgICA8L2c+ICAgICAgICA8L2c+ICAgIDwvZz4gICAgPGRlZnM+ICAgICAgICA8cGF0aCBpZD0icGF0aDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNIDAgMC43MDcxMDdMIDAuNzA3MTA3IDBMIDMuODUzNTUgMy4xNDY0NUwgNyAwTCA3LjcwNzExIDAuNzA3MTA3TCAzLjg1MzU1IDQuNTYwNjZMIDAgMC43MDcxMDdaIi8+ICAgIDwvZGVmcz48L3N2Zz4=);
  }

  [class*="emoji-mart-search"] input,
  .lazy_input--lazyInput--2kTZE:not(.search--searchInput--2JmjM) {
      background: ${palette.panel};
      color: ${palette.text};
  }

  .basic_form--primaryBtn--3NqnQ:disabled {
      color: ${palette.text};
      background-color: rgba(255,255,255,.3);
      border-color: rgba(255,255,255,.3);
  }

  .sidebar--navDefault--1zbCB,
  .updates--updateFooter--1JjnE,
  .library_preferences_modal--slidingPane--2C_Nx {
      background-color: ${palette.panel};
  }

  .history_view--timeAsLabel--6fKiV {
      color: ${palette.textDisabled};
  }

  .top_bar--container--1xQEs,
  .sidebar--navDefault--1zbCB,
  .top_bar--container--1xQEs {
     box-shadow: 1px 0 0 0 rgba(255,255,255,.1);
  }

  .linkified {
      color: #30c2ff;
  }

  .emoji-mart-category-label span {
      background-color: transparent;
      color: ${palette.textActive};
  }

  .full_width_page--fullWidthPage--Fg4oT {
      color: ${palette.text};
  }

  .team_admin--backToFiles--3tTyp {
      border-color: rgba(255,255,255,.15);
  }
`;

export default class DarkUIPlugin {
  constructor() {
    const { figmaPlus } = window;

    this.init();
  }

  init() {
    let style = document.createElement("style"),
      cssNode = document.createTextNode(cssOverrides);

    style.id = "f-ui";
    style.appendChild(cssNode);

    document.head.appendChild(style);

    this.mapColorsToRules();

    console.log("[DARKUI] Welcome to the dark side.");
  }

  getCoreStylesheet() {
    let css = document.styleSheets,
      coreStylesheet;

    Object.keys(css).forEach(key => {
      let cssFileUrl = css[key].href;

      if (cssFileUrl && cssFileUrl.includes("figma_app")) {
        coreStylesheet = css[key].cssRules;
      }
    });

    return coreStylesheet;
  }

  getCoreUIColor(cssRule) {
    propsWithColor.forEach(prop => {
      let colorValue = cssRule.style[prop];

      if (colorValue != "") {
        if (!this.figmaColors.hasOwnProperty(colorValue)) {
          this.figmaColors[colorValue] = null;
        }
      }
    });
  }

  mapColorsToRules() {
    this.figmaColors = {};

    let figmaCoreStylesheet = this.getCoreStylesheet();

    for (let cssRule of figmaCoreStylesheet) {
      if (
        cssRule.selectorText != undefined &&
        this.isRuleIgnored(cssRule.selectorText) == false
      ) {
        if (
          (cssRule.style != undefined && cssRule.style.color != "") ||
          cssRule.style.backgroundColor != "" ||
          cssRule.style.fill != "" ||
          cssRule.style.stroke != "" ||
          cssRule.style.borderBottomColor != "" ||
          cssRule.style.borderRightColor != "" ||
          cssRule.style.borderTopColor != "" ||
          cssRule.style.borderLeftColor != ""
        ) {
          propsWithColor.forEach(colorProp => {
            let colorValue = cssRule.style[colorProp];

            if (colorValue != "" && colorsMap.hasOwnProperty(colorValue)) {
              cssRule.style[colorProp] = colorsMap[colorValue];
            }
          });

          // Utility to get Colors used in Figma
          this.getCoreUIColor(cssRule);
        }
      }
    }
  }

  isRuleIgnored(selector) {
    let isMatch = false;

    selectorsToIgnore.forEach(query => {
      if (selector.includes(query)) {
        isMatch = true;
      }
    });

    return isMatch;
  }
}

window.darkUIPlugin = new DarkUIPlugin();

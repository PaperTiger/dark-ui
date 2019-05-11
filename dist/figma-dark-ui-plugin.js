(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global['figma-dark-ui-plugin'] = factory());
}(this, function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var classCallCheck = _classCallCheck;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var createClass = _createClass;

  var propsWithColor = ["color", "backgroundColor", "fill", "stroke", "borderBottomColor", "borderRightColor", "borderLeftColor", "borderTopColor"];
  var palette = {
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
  var colorsMap = {
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
  var selectorsToIgnore = [".action--unfaded", ".action--enabled", ".action_option", ".avatar--root--2kH_E", ".basic_form--primaryBtn", ".basic_form--greenBtn", ".dropdown--dropdown", ".dropdown_menu", ".draggable_modal--backgroundOverlay--CPf6e", ".emoji-mart-anchor-selected", ".flyout_view--flyout", ".folder_view--folderTeamName", ".folder_view--pathSeparator", ".filename_view--title", ".filename_view--pathSeparator", ".filename_view--dropdownOption", ".fullscreen_menu--searchInput", ".header_modal--modalBackground", ".header--header--", ".header--settings", ".header--dropdownCaret", ".prototype--background", ".multilevel_dropdown--", ".library_item_tile--descriptionPopout", ".pointing_dropdown", ".scaling_menu--", ".transition_preview_pane--", ".top_bar--", ".tooltip--", ".toolbar_styles--activeButton", ".toolbar_styles--enabledButton", ".user_view--name", ".text--_whiteText", ".team_link--icon", ".zoom_menu--zoomMenu", ".help_widget--helpWidget", ".help_widget--tooltip", ".raw_components--iconButtonSelected", ".visual_bell", ".zoom_menu"];
  var cssOverrides = "\n\n  /* Figma Dark Theme | Brought to you by:\n     Mirko Santangelo, Papertiger, All Right Reserved */\n  \n  .header--header--3d0kA,\n  .top_bar--header---JfcG,top_bar--header---JfcG\n  .help_widget--helpWidget--22IIi { \n      background: ".concat(palette.toolbarBg, "; \n  }\n\n  .in_app_page__REFRESH--content--1l70i {\n      background-color: ").concat(palette.panel, "; \n  }\n\n  .option_button--untoggled--2KWMQ:not(.option_button--disabled--YNeqs):hover {\n      box-shadow: inset 0 0 0 1px ").concat(palette.inputFocus, ";\n  }\n\n  .pages_panel--tabsHeaderBordered--28fYc {\n      box-shadow: 0 1px 0 0 ").concat(palette.panelDivider, ";\n  }\n\n  .style_preview_panel--renderedTextStyleThumbnail--Mtiav, \n  .style_icon--styleIcon--3-PzQ:not(.style_icon--fillIcon--2kZ-_) img {\n    -webkit-filter: invert(90%);\n    filter: invert(90%);\n  }\n\n  .search--margin24--3oubR .search--searchInput--2JmjM,\n  .search--margin12--3G1pl .search--searchInput--2JmjM {\n    color: ").concat(palette.text, ";\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjM5NzQ2IDguMTA0NTVDNi42MTgxNiA4LjcyOTU1IDUuNjI4NDIgOS4xMDM0NSA0LjU1MTc2IDkuMTAzNDVDMi4wMzgwOSA5LjEwMzQ1IDAgNy4wNjU1NSAwIDQuNTUxN0MwIDIuMDM3OSAyLjAzODA5IDAgNC41NTE3NiAwQzcuMDY1NDMgMCA5LjEwMzUyIDIuMDM3OSA5LjEwMzUyIDQuNTUxN0M5LjEwMzUyIDUuNjI4NiA4LjcyOTQ5IDYuNjE4MSA4LjEwNDQ5IDcuMzk3NTJMMTEuMzUzNSAxMC42NDY1TDEwLjY0NiAxMS4zNTM2TDcuMzk3NDYgOC4xMDQ1NVpNOC4xMDM1MiA0LjU1MTdDOC4xMDM1MiA2LjUxMzMxIDYuNTEzMTggOC4xMDM0NSA0LjU1MTc2IDguMTAzNDVDMi41OTAzMyA4LjEwMzQ1IDEgNi41MTMzMSAxIDQuNTUxN0MxIDIuNTkwMTUgMi41OTAzMyAxIDQuNTUxNzYgMUM2LjUxMzE4IDEgOC4xMDM1MiAyLjU5MDE1IDguMTAzNTIgNC41NTE3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC43Ii8+PC9zdmc+) no-repeat center left 16px;\n  }\n\n\n  .modal--title--1kOv4,\n  .segmented_control--segmentSelected--3vDJm {\n      fill: ").concat(palette.text, ";\n      color: ").concat(palette.text, ";\n  }\n\n  .raw_components--textInput--23_ta:not(:disabled):not(:hover):placeholder-shown {\n      background: linear-gradient(90deg,transparent 6px,rgba(255,255,255,.1) 0);\n      background-size: calc(100% - 6px) 1px;\n      background-position: left bottom -1px;\n      background-repeat: repeat-x;\n  }\n\n  .transform_panel--sliderContainer--3SoqU div div {\n      background-color: ").concat(palette.panelDivider, ";\n  }\n\n  .transform_panel--sliderAnnotationStroke--PBBmO {\n      border-color: ").concat(palette.textDisabled, ";\n  }\n\n  .transition_preview_pane--previewPanel--3sZan {\n      background: ").concat(palette.iconButtonHover, ";\n  }\n\n  [class*=\"role_row--select\"] {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSI2IiB2aWV3Qm94PSIwIDAgOSA2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICA8ZyBkYXRhLW5hbWU9IkNhbnZhcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyODEyIC0xMTgwOCkiIGZpbGw9Im5vbmUiPiAgICAgICAgPGcgZGF0YS1uYW1lPSJWZWN0b3IgNyAoU3Ryb2tlKSI+ICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjI4MTIuNiAxMTgwOC42KSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgwIiBmaWxsPSIjNjY2NjY2IiBmaWxsLW9wYWNpdHk9IjEiLz4gICAgICAgICAgICA8L2c+ICAgICAgICA8L2c+ICAgIDwvZz4gICAgPGRlZnM+ICAgICAgICA8cGF0aCBpZD0icGF0aDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNIDAgMC43MDcxMDdMIDAuNzA3MTA3IDBMIDMuODUzNTUgMy4xNDY0NUwgNyAwTCA3LjcwNzExIDAuNzA3MTA3TCAzLjg1MzU1IDQuNTYwNjZMIDAgMC43MDcxMDdaIi8+ICAgIDwvZGVmcz48L3N2Zz4=);\n  }\n\n  [class*=\"emoji-mart-search\"] input,\n  .lazy_input--lazyInput--2kTZE:not(.search--searchInput--2JmjM) {\n      background: ").concat(palette.panel, ";\n      color: ").concat(palette.text, ";\n  }\n\n  .basic_form--primaryBtn--3NqnQ:disabled {\n      color: ").concat(palette.text, ";\n      background-color: rgba(255,255,255,.3);\n      border-color: rgba(255,255,255,.3);\n  }\n\n  .sidebar--navDefault--1zbCB,\n  .updates--updateFooter--1JjnE,\n  .library_preferences_modal--slidingPane--2C_Nx {\n      background-color: ").concat(palette.panel, ";\n  }\n\n  .history_view--timeAsLabel--6fKiV {\n      color: ").concat(palette.textDisabled, ";\n  }\n\n  .top_bar--container--1xQEs,\n  .sidebar--navDefault--1zbCB,\n  .top_bar--container--1xQEs {\n     box-shadow: 1px 0 0 0 rgba(255,255,255,.1);\n  }\n\n  .linkified {\n      color: #30c2ff;\n  }\n\n  .emoji-mart-category-label span {\n      background-color: transparent;\n      color: ").concat(palette.textActive, ";\n  }\n\n  .full_width_page--fullWidthPage--Fg4oT {\n      color: ").concat(palette.text, ";\n  }\n\n  .team_admin--backToFiles--3tTyp {\n      border-color: rgba(255,255,255,.15);\n  }\n\n  /* Figma Plus Overrides ----------------------------------- */\n\n  .v--modal.v--modal-box,\n  #pluginManager .modal-content,\n  .detail-screen,\n  .developer-screen {\n\t\tbackground: ").concat(palette.panel, ";\n\t}\n\t\n\t.modal-tab-large {\n\t\tcolor: rgba(255,255,255,.3);\n\t}\n\t\n\t.modal-tab-large:hover {\n\t    color: rgba(255,255,255,.8);\n\t}\n  \n  .scriptRunner .prism-editor__code,\n  .modal-header,  \n  .header h1,\n  .section h2,\n  .empty-state-title,\n  .modal-content input,\n  .pluginItem .name,\n  .modal-tab-large.active-tab,\n  .detail-screen .name,\n  .detail-screen .section-title,\n  .version .version-number,\n  .js-list .path {\n\t\tcolor:white;\n  }\n\n  code[class*=language-], pre[class*=language-] {\n    text-shadow:none;\n  }\n\n  .language-css .token.string, \n  .style .token.string, \n  .token.entity, \n  .token.operator, \n  .token.url {\n    background: transparent;\n  }\n  \n  .description {\n    color: ").concat(palette.text, ";\n  }\n  \n  .scriptRunner .prism-editor__code:hover,\n  .modal-content input:hover, \n  .modal-content textarea:hover, \n  .tab-content input:hover, \n  .tab-content textarea:hover {\n    border-color: ").concat(palette.inputFocus, ";\n  }\n  \n  .js-list,\n  .modal-header,\n  .search-box,\n  .detail-screen .header, \n  .detail-screen .org-header {\n\t    border-bottom: 1px solid ").concat(palette.panelDivider, ";\n\t}\n  \n  .modal-header .modal-close-button,\n  .figma-icon, .figma-icon-button,\n  .detail-screen .back-button.figma-icon.chevron-left:after {\n\t\tfill:white;\n\t\tcolor:white;\n  }\n  \n  .modal-content button, .tab-content button {\n    color: white;\n    border-color:white;\n  }\n\n  .pluginItem:hover {\n    background: ").concat(palette.panelRowOnHover, ";\n    color: white;\n  }\n\n  .detail-screen .v-carousel-dot.active {\n    background: white;\n  }\n\n  .detail-screen .v-carousel-dot {\n    background: rgba(255,255,255,0.25);\n  }\n");

  var DarkUIPlugin =
  /*#__PURE__*/
  function () {
    function DarkUIPlugin() {
      classCallCheck(this, DarkUIPlugin);

      var _window = window,
          figmaPlus = _window.figmaPlus;
      this.init();
    }

    createClass(DarkUIPlugin, [{
      key: "init",
      value: function init() {
        var style = document.createElement("style"),
            cssNode = document.createTextNode(cssOverrides);
        style.id = "figma-dark-mode";
        style.appendChild(cssNode);
        document.head.appendChild(style);
        document.body.classList.add("has-dark-theme");
        this.mapColorsToRules();
        console.log("%c[DARKUI] Welcome to the dark side. By MKS. ☠️ ", "color: white; background-color: black; font-size: 18px;");
      }
    }, {
      key: "getCoreStylesheet",
      value: function getCoreStylesheet() {
        var css = document.styleSheets,
            coreStylesheet;
        Object.keys(css).forEach(function (key) {
          var cssFileUrl = css[key].href;

          if (cssFileUrl && cssFileUrl.includes("figma_app")) {
            coreStylesheet = css[key].cssRules;
          }
        });
        return coreStylesheet;
      }
    }, {
      key: "getCoreUIColor",
      value: function getCoreUIColor(cssRule) {
        var _this = this;

        propsWithColor.forEach(function (prop) {
          var colorValue = cssRule.style[prop];

          if (colorValue != "") {
            if (!_this.figmaColors.hasOwnProperty(colorValue)) {
              _this.figmaColors[colorValue] = null;
            }
          }
        });
      }
    }, {
      key: "mapColorsToRules",
      value: function mapColorsToRules() {
        var _this2 = this;

        this.figmaColors = {};
        var figmaCoreStylesheet = this.getCoreStylesheet();
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          var _loop = function _loop() {
            var cssRule = _step.value;

            if (cssRule.selectorText != undefined && _this2.isRuleIgnored(cssRule.selectorText) == false) {
              if (cssRule.style != undefined && cssRule.style.color != "" || cssRule.style.backgroundColor != "" || cssRule.style.fill != "" || cssRule.style.stroke != "" || cssRule.style.borderBottomColor != "" || cssRule.style.borderRightColor != "" || cssRule.style.borderTopColor != "" || cssRule.style.borderLeftColor != "") {
                propsWithColor.forEach(function (colorProp) {
                  var colorValue = cssRule.style[colorProp];

                  if (colorValue != "" && colorsMap.hasOwnProperty(colorValue)) {
                    cssRule.style[colorProp] = colorsMap[colorValue];
                  }
                }); // Utility to get Colors used in Figma

                _this2.getCoreUIColor(cssRule);
              }
            }
          };

          for (var _iterator = figmaCoreStylesheet[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            _loop();
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }, {
      key: "isRuleIgnored",
      value: function isRuleIgnored(selector) {
        var isMatch = false;
        selectorsToIgnore.forEach(function (query) {
          if (selector.includes(query)) {
            isMatch = true;
          }
        });
        return isMatch;
      }
    }]);

    return DarkUIPlugin;
  }();
  window.darkUIPlugin = new DarkUIPlugin();

  return DarkUIPlugin;

}));
//# sourceMappingURL=figma-dark-ui-plugin.js.map

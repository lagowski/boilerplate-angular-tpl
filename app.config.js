'use strict';



var appConfig = window.appConfig || {};

// appConfig.menu_speed = 200;

// appConfig.smartSkin = "smart-style-0";

// appConfig.skins = [
//     {name: "smart-style-0",
//         logo: "styles/img/logo.png",
//         class: "btn btn-block btn-xs txt-color-white margin-right-5",
//         style: "background-color:#4E463F;",
//         label: "Smart Default"}
//
// ];



/*
 * DEBUGGING MODE
 * debugState = true; will spit all debuging message inside browser console.
 * The colors are best displayed in chrome browser.
 */


appConfig.debugState = false;
appConfig.debugStyle = 'font-weight: bold; color: #00f;';
appConfig.debugStyle_green = 'font-weight: bold; font-style:italic; color: #46C246;';
appConfig.debugStyle_red = 'font-weight: bold; color: #ed1c24;';
appConfig.debugStyle_warning = 'background-color:yellow';
appConfig.debugStyle_success = 'background-color:green; font-weight:bold; color:#fff;';
appConfig.debugStyle_error = 'background-color:#ed1c24; font-weight:bold; color:#fff;';


appConfig.apiRootUrl = 'api';

window.appConfig = appConfig;

/*
 * END APP.appConfig
 */
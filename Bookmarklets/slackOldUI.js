// bring back Slack's old UI
javascript:(function() {
  var style = document.createElement('style');
  style.innerHTML = `
div.p-client_workspace--including_tab_rail {
  grid-template-columns: 0 auto !important;
}
div.p-tab_rail {
  display: none !important;
}
div.p-control_strip {
  display: none !important;
}
.p-client_container_placeholder {
  visibility: hidden !important;
}
div.p-client_workspace__layout {
  border-radius: 0 !important;
}
`;
  document.head.appendChild(style);
})();

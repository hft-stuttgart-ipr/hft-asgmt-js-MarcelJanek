$(document).ready(() => {
  // DOMContent is loaded, now we can start checking HTML Elements
  // If we dont "wait" for document to be ready, we cannot access HTML elements
  // for testing purposes, you can use a "debugger;" statement or also "console.log(element)"
  console.log("DOM is ready!");

  $("#hft-shoutbox-form-input-name").on("keyup", event => toggleAlertBox(event, 3));
  $("#hft-shoutbox-form-textarea").on("keyup", event => toggleAlertBox(event, 10));
});

function toggleAlertBox(event, threshold) {
  const elementValue = $(event.currentTarget).val();
  const alertBox = $("#hft-shoutbox-alert");

  if (elementValue.length < threshold) {
    alertBox.removeClass("d-none");
  } else{
    alertBox.addClass("d-none");
  }
}
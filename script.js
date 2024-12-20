function openStream(buttonElement) {
    // Get the stream URL from the data-stream-url attribute of the clicked button
    var streamUrl = buttonElement.parentElement.getAttribute('data-stream-url');

    // Open the stream in a new page (or you can embed it in an iframe if you prefer)
    window.open('stream.html?streamUrl=' + encodeURIComponent(streamUrl), '_blank');
}

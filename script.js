document.addEventListener('DOMContentLoaded', function() {
    // Select all channel cards
    const channelCards = document.querySelectorAll('.channel-card');

    // Iterate through each channel card and add a click event listener
    channelCards.forEach(function(card) {
        card.addEventListener('click', function() {
            // Get the data-stream attribute value which contains the URL of the stream page
            const streamPage = card.getAttribute('data-stream');
            
            // Get the actual stream URL from the data-stream-url attribute
            const streamUrl = card.getAttribute('data-stream-url');
            
            // Append the stream URL as a query parameter to stream.html
            const fullUrl = `${streamPage}?stream=${encodeURIComponent(streamUrl)}`;

            // Open the stream page in a new tab
            window.open(fullUrl, '_blank');
        });
    });
});

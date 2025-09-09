if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', focusChat, false);
} else {
    focusChat();
}

var focused = true;

window.onfocus = function() {
	if (!focused) {
		focusChat();
	}
    focused = true;
};
window.onblur = function() {
    focused = false;
};

function focusChat() {
	if (document.body) {
        const items = document.querySelectorAll('[data-a-target="chat-input"]'); // looking for input
		if (items.length == 0) setTimeout(focusChat, 100); // document not done loading
		else {
			items.forEach(function (i) {
				i.focus();
			});
		}
    } else {
        // Try again in a moment if body isn't available
        setTimeout(focusChat, 100);
    }
		
}
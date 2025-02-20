function toggleDropdown() {
    const dropdown = document.getElementById('dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function openFeedbackModal() {
    document.getElementById('feedbackModal').style.display = 'flex';
}

function closeFeedbackModal() {
    document.getElementById('feedbackModal').style.display = 'none';
}

function submitFeedback(event) {
    event.preventDefault();

    document.getElementById('feedbackForm').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';

}

function signOut() {
    window.location.href = 'signout_page.html';
}

document.addEventListener('click', function (event) {
    const dropdown = document.getElementById('dropdown');
    const button = document.querySelector('.account button');
    if (!dropdown.contains(event.target) && event.target !== button) {
        dropdown.style.display = 'none';
    }
});
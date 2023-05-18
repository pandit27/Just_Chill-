// Function to open the modal window and display the clicked image
function openModal(element) {
    // Get the modal container and image element
    var modal = document.getElementById("imageModal");
    var modalImage = document.getElementById("modalImage");

    // Set the source of the modal image to the clicked image source
    modalImage.src = element.src;

    // Display the modal
    modal.style.display = "block";
}

// Function to close the modal window
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Close the modal when the user clicks on the close button or outside the modal
var modal = document.getElementById("imageModal");
modal.addEventListener("click", function (event) {
    if (event.target === modal || event.target.classList.contains("close")) {
        closeModal();
    }
}); z
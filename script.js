// =====================================================
// PROJECT FILTERS
// =====================================================

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // Remove active state from all buttons
        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        // Add active state to clicked button
        button.classList.add("active");

        // Get selected category
        const filter = button.dataset.filter;

        // Show / hide projects
        projectCards.forEach((card) => {

            const category = card.dataset.category;

            if (filter === "all" || category === filter) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }

        });

    });

});
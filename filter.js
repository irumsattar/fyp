document.addEventListener("DOMContentLoaded", () => {
    const filterForm = document.getElementById("filterForm");
    const typeSelect = document.getElementById("type");
    const priceRangeSelect = document.getElementById("priceRange");
    const vehicleBoxes = document.querySelectorAll(".service-container .box");

    function applyFilters() {
        const selectedType = typeSelect.value;
        const selectedPrice = priceRangeSelect.value;

        vehicleBoxes.forEach((box) => {
            const vehicleType = box.querySelector("img").src.includes("bike") ? "bike" : "car";
            const priceText = box.querySelector("h2").textContent;
            const price = parseInt(priceText.replace(/[^0-9]/g, ""), 10);

            let typeMatch = selectedType === "all" || vehicleType === selectedType;
            let priceMatch =
                selectedPrice === "all" ||
                (selectedPrice === "5000" && price <= 5000) ||
                (selectedPrice === "7000" && price <= 7000) ||
                (selectedPrice === "10000" && price <= 10000) ||
                (selectedPrice === "15000" && price <= 15000);

            if (typeMatch && priceMatch) {
                box.style.display = "block";
            } else {
                box.style.display = "none";
            }
        });
    }

    document.getElementById("applyFilters").addEventListener("click", applyFilters);
});

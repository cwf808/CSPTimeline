document.addEventListener('DOMContentLoaded', function () {
    const separationDateInput = document.getElementById('separationDate');
    const dateRangeSection = document.getElementById('dateRangeSection');
    const dateRangeDropdown = document.getElementById('dateRangeDropdown');
    const cspDateParagraph = document.getElementById('cspDate');
    const programStartDateParagraph = document.getElementById('programStartDate');
    const programEndDateParagraph = document.getElementById('programEndDate');
    const retirementDateParagraph = document.getElementById('retirementDate');

    separationDateInput.addEventListener('change', function () {
        const selectedDate = new Date(this.value + 'T00:00:00');
        const startDate = new Date(selectedDate);
        startDate.setDate(selectedDate.getDate() - 180);

        const endDate = new Date(selectedDate);
        endDate.setDate(selectedDate.getDate() - 120);

        dateRangeSection.classList.remove('hidden');

        dateRangeDropdown.innerHTML = '';

        for (let i = 0; i <= 30; i++) {
            const optionDate = new Date(startDate);
            optionDate.setDate(startDate.getDate() + i);
            const optionText = optionDate.toDateString();
            const option = new Option(optionText, optionText);
            dateRangeDropdown.add(option);
        }
    });

    calculateDates = function () {
        const selectedDate = new Date(separationDateInput.value);
        const selectedRange = new Date(dateRangeDropdown.value);
        const cspDate = new Date(selectedDate);
        const programStartDate = new Date(selectedRange);
        const programEndDate = new Date(selectedRange);
        programEndDate.setDate(selectedRange.getDate() + 120);

        cspDate.setDate(selectedDate.getDate() - 180);

        cspDateParagraph.textContent = `CSP Eligibility Date: ${cspDate.toDateString()}`;
        programStartDateParagraph.textContent = `Program Start Date: ${selectedRange.toDateString()}`;
        programEndDateParagraph.textContent = `Program End Date: ${programEndDate.toDateString()}`;
        retirementDateParagraph.textContent = `Separation / Retirement Date: ${selectedDate.toDateString()}`;

        // Redirect to a new webpage (replace 'newPage.html' with the desired page)
        // window.location.href = 'newPage.html';
    };
});

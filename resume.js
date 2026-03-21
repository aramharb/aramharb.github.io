// Animate skill progress bars & add print listener
document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress");
    
    // Add small delay for animation trigger after load
    setTimeout(() => {
        progressBars.forEach(bar => {
            const width = bar.getAttribute("data-width");
            bar.style.width = width;
        });
    }, 300);

    const printBtn = document.getElementById("print-btn");
    if(printBtn) {
        printBtn.addEventListener("click", () => {
            window.print();
        });
    }
});

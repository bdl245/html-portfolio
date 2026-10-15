console.log("Hello World!");

const name = "Brandon Larremore";
const projectDeadline = "2027-02-01";
let hasDownloadedResume = false;

function showGreeting(name) {
    return "Hello, my name is " + name + "! Welcome to my portfolio!";
}

function daysUntilDeadline(submissionDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const deadline = new Date(submissionDate + "T00:00:00");
    const millisecondsPerDay = 1000 * 60 * 60 * 24;

    return Math.ceil((deadline - today) / millisecondsPerDay);
}

document.getElementById("personalizedGreeting").textContent = showGreeting(name);

document.getElementById("downloadResume").addEventListener("click", function () {
    if (hasDownloadedResume === false) {
        alert("Your resume is downloaded successfully!");
        hasDownloadedResume = true;
    }
});

const daysRemaining = daysUntilDeadline(projectDeadline);
document.getElementById("deadlineCountdown").textContent = daysRemaining + " days left";
console.log("Days until deadline: " + daysRemaining);

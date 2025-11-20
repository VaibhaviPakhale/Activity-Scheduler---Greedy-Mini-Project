let activities = [];

// Add new activity
function addActivity() {
    const name = document.getElementById('activityName').value.trim();
    const start = parseInt(document.getElementById('startTime').value);
    const end = parseInt(document.getElementById('endTime').value);
    
    if (!name || isNaN(start) || isNaN(end) || start >= end || start < 0 || end > 24) {
        alert("Please enter valid details!");
        return;
    }
    
    activities.push({ id: Date.now(), name, start, end, selected: false });

    document.getElementById('activityName').value = '';
    document.getElementById('startTime').value = '';
    document.getElementById('endTime').value = '';

    displayActivities();
    hideResults();
}

// Display activities
function displayActivities() {
    const container = document.getElementById('activitiesList');
    if (activities.length === 0) {
        container.innerHTML = "<p class='no-activities'>No activities added yet. Add some activities above!</p>";
        return;
    }
    container.innerHTML = activities.map(a => `
        <div class="activity-item ${a.selected ? 'selected' : ''}">
            <div class="activity-info">
                <div class="activity-name">${a.name}</div>
                <div class="activity-time">${a.start}:00 - ${a.end}:00</div>
            </div>
            <button class="remove-btn" onclick="removeActivity(${a.id})">Remove</button>
        </div>
    `).join('');
}

// Remove activity
function removeActivity(id) {
    activities = activities.filter(a => a.id !== id);
    displayActivities();
    hideResults();
}

// Clear all
function clearAll() {
    if (confirm("Clear all activities?")) {
        activities = [];
        displayActivities();
        hideResults();
    }
}

// Schedule activities
function scheduleActivities() {
    if (activities.length === 0) {
        alert("Please add some activities first!");
        return;
    }

    activities.forEach(a => a.selected = false);
    const sorted = [...activities].sort((a,b) => a.end - b.end);
    let lastEnd = 0;
    const selected = [];
    const steps = ["1. Sorted activities by end time"];

    sorted.forEach((a, i) => {
        if (a.start >= lastEnd) {
            a.selected = true;
            selected.push(a);
            lastEnd = a.end;
            steps.push(`${i+2}. ✅ Selected: ${a.name}`);
        } else {
            steps.push(`${i+2}. ❌ Skipped: ${a.name}`);
        }
    });

    displayResults(selected, steps);
    displayActivities();
}

// Display results
function displayResults(selected, steps) {
    document.getElementById('results').style.display = 'block';
    document.getElementById('totalCount').textContent = activities.length;
    document.getElementById('selectedCount').textContent = selected.length;
    document.getElementById('efficiency').textContent =
        Math.round((selected.length / activities.length) * 100) + "%";

    document.getElementById('selectedList').innerHTML = selected.length 
        ? selected.map(a => `<div class="selected-item"><strong>${a.name}</strong>: ${a.start}:00 - ${a.end}:00</div>`).join('')
        : '<p style="color:#666;font-style:italic;">No activities selected</p>';

    document.getElementById('stepsList').innerHTML = steps.map(s => `<div class="step-item">${s}</div>`).join('');

    createTimeline();
}

// Create timeline
function createTimeline() {
    const container = document.getElementById('timeline');
    if (activities.length === 0) {
        container.innerHTML = '<p style="padding:20px;text-align:center;color:#666;">No activities to display</p>';
        return;
    }
    container.innerHTML = activities.map(a => {
        const left = (a.start / 24) * 100;
        const width = ((a.end - a.start) / 24) * 100;
        return `<div class="timeline-bar ${a.selected ? 'selected':'unselected'}" 
                    style="margin-left:${left}%;width:${width}%"
                    title="${a.name}: ${a.start}:00 - ${a.end}:00">
                    ${a.name}
                </div>`;
    }).join('');
}

// Hide results
function hideResults() {
    document.getElementById('results').style.display = 'none';
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addBtn').addEventListener('click', addActivity);
    document.getElementById('clearBtn').addEventListener('click', clearAll);
    document.getElementById('scheduleBtn').addEventListener('click', scheduleActivities);
});

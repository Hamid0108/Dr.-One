document.getElementById('signup-button').addEventListener('click', function() {
    alert('Sign Up functionality coming soon!');
});
const jobs = [
    { title: 'Software Developer', company: 'Tech Corp', location: 'Remote' },
    { title: 'Customer Support', company: 'Help Desk', location: 'New York, NY' },
    { title: 'Data Analyst', company: 'Data Inc.', location: 'San Francisco, CA' }
];

const jobList = document.getElementById('job-list');

if (jobList) {
    jobs.forEach(job => {
        const li = document.createElement('li');
        li.textContent = `${job.title} at ${job.company} (${job.location})`;
        jobList.appendChild(li);
    });
}
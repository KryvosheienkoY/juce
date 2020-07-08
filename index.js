const express = require('express');
const app = express();

app.use('/assets', express.static(__dirname + '/assets'));

app.listen(5555);


app.get('/', (req, res) => {
    res.sendFile((__dirname + '/index.html'));
});
app.get('/cdn', (req, res) => {
    res.sendFile((__dirname + '/cdn.html'));
});
app.get('/coming-soon', (req, res) => {
    res.sendFile((__dirname + '/coming-soon.html'));
});
app.get('/privacy-policy', (req, res) => {
    res.sendFile((__dirname + '/privacy-policy.html'));
});
app.get('/speed', (req, res) => {
    res.sendFile((__dirname + '/speed.html'));
});
app.get('/terms-and-conditions', (req, res) => {
    res.sendFile((__dirname + '/terms-and-conditions.html'));
});
app.get('/thank-you-for-contact-us', (req, res) => {
    res.sendFile((__dirname + '/thank-you-for-contact-us.html'));
});
app.get('/why-juce', (req, res) => {
    res.sendFile((__dirname + '/why-juce.html'));
});

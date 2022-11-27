module.exports = {
    browsers: {
        chrome: {
            automationProtocol: "devtools",
            desiredCapabilities: {
                browserName: "chrome",
            },
            windowSize: '800x4000',
        },
    },
    plugins: {
        "html-reporter/hermione": {
            path: "hermione-html-report",
        },
    },
};

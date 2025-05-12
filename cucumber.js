module.exports = {
  default: {
    require: ["./steps/*.spec.js", "./hooks/testHook.js"], // Path to step definitions
    paths: ["./tests/features/*.feature"], // Path to feature files
    format: [
      "progress-bar",
      "html:test-results/cucumber-report.html",
      "json:test-results/cucumber-report.json",
    ],
  },
};

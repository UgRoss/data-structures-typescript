module.exports = {
  moduleFileExtensions: ["ts", "js", "node"],
  transform: {
    "\\.(ts|tsx)$": "ts-jest",
  },
  testRegex: "/__tests__/.*(\\.|/)(test|spec)\\.(ts|tsx)$",
  collectCoverage: true,
};

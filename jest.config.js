module.exports = {
    preset: "vite-jest",
    setupFilesAfterEnv: ["./jest.setup.js"],
    testMatch: [
        "./__tests__/**/*.{js,jsx,ts,tsx}",
    ],
    testEnvironment: "jest-environment-jsdom",
    moduleNameMapper: {
        "\\.(css|sass|scss)$": "identity-obj-proxy",
    },
};

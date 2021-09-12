module.exports = {
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{ts,tsx}'],
    setupFilesAfterEnv: ['./jest.setup.js'],
    modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
    testMatch: ["**/?(*.)+(spec|test).(js|jsx|ts|tsx)"],
}

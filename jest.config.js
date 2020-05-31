module.exports = {
    preset: 'ts-jest',

    moduleNameMapper: {
        "@ui/App/(.*)$": "<rootDir>/src/components/$1",
        "@ui/Layouts/(.*)$": "<rootDir>/src/components/layouts/$1",
        "@ui/Pages/(.*)$": "<rootDir>/src/components/pages/$1",
        "@ui/Actions/(.*)$": "<rootDir>/src/components/actions/$1",
        "@ui/Models/(.*)$": "<rootDir>/src/components/models/$1",
        "@ui/Reducers/(.*)$": "<rootDir>/src/components/reducers/$1",
        "@ui/Store/(.*)$": "<rootDir>/src/components/store//$1"
    }
}
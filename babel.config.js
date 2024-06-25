module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // Required for expo-router
      "expo-router/babel",
      "module:react-native-dotenv",
      "nativewind/babel",
    ],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    }
  };
};

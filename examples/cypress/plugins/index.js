const {
  addMatchImageSnapshotPlugin,
} = require('@duplotech/cypress-image-snapshot/plugin');

module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);
};

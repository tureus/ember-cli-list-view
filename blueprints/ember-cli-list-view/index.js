module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addBowerPackageToProject('ember-cli-list-view', 'tureus/ember-list-view-component#master');
  }
};

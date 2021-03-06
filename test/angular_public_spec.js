'use strict';

var publishExternalAPI = require('../src/angular_public');
var createInjector = require('../src/injector');

describe('angularPublic', function() {

  it('sets up the angular object and the module loader', function() {
    publishExternalAPI();

    expect(window.angular).toBeDefined();
    expect(window.angular.module).toBeDefined();
  });

  it('sets up the ng module', function() {
    publishExternalAPI();

    expect(createInjector(['ng'])).toBeDefined();
  });

  it('sets up the $filter service', function() {
    publishExternalAPI();
    var injector = createInjector(['ng']);

    expect(injector.has('$filter')).toBe(true); //loadedModules contain module keys set to true
  });

  it('sets up the $parse service', function() {
    publishExternalAPI();
    var injector = createInjector(['ng']);

    expect(injector.has('$parse')).toBe(true);
  });

  it('sets up the $rootScope', function() {
    publishExternalAPI();
    var injector = createInjector(['ng']);

    // expect(injector.has('$rootScope')).toBe(true);
    expect(injector.get('$rootScope').$watch).toBeDefined();
  });

  it('sets up $q', function() {
    publishExternalAPI();
    var injector = createInjector(['ng']);

    expect(injector.has('$q')).toBe(true);
  });

  it('sets up $http and $httpBackend', function() {
    publishExternalAPI();
    var injector = createInjector(['ng']);

    expect(injector.has('$http')).toBe(true);
    expect(injector.has('$httpBackend')).toBe(true);
  });

  it('sets up $compile', function() {
    publishExternalAPI();
    var injector = createInjector(['ng']);
    expect(injector.has('$compile')).toBe(true);
  });

  it('sets up $controller', function() {
    publishExternalAPI();
    var injector = createInjector(['ng']);
    expect(injector.has('$controller')).toBe(true);
  });

});

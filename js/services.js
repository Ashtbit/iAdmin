angular.module('IMS8Alert.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('list', function () {

    var customers = [
      { id: 0, name: 'Scruff McGruff' },
      { id: 1, name: 'G.I. Joe' },
      { id: 2, name: 'Miss Frizzle' },
      { id: 3, name: 'Ash Ketchum' }
    ];
    var profiles = [
      { id: 0, name: 'member-Scruff McGruff' },
      { id: 1, name: 'member-G.I. Joe' },
      { id: 2, name: 'member-Miss Frizzle' },
      { id: 3, name: 'member-Ash Ketchum' }
    ];
  var groups = [
      { id: 0, name: 'groups-Scruff McGruff' },
      { id: 1, name: 'groups-G.I. Joe' },
      { id: 2, name: 'groups-Miss Frizzle' },
      { id: 3, name: 'groups-Ash Ketchum' }
  ];
  var languages = [
  { id: 0, name: 'English' },
  { id: 1, name: 'Hindi' },
  { id: 2, name: 'Japanese' },
  { id: 3, name: 'Norwegian' }
  ];
  var countries = [
{ id: 0, name: 'country-Scruff McGruff' },
{ id: 1, name: 'country-G.I. Joe' },
{ id: 2, name: 'country-Miss Frizzle' },
{ id: 3, name: 'country-Ash Ketchum' }
  ];
  var states = [
      { id: 0, name: 'state-Scruff McGruff' },
      { id: 1, name: 'state-G.I. Joe' },
      { id: 2, name: 'state-Miss Frizzle' },
      { id: 3, name: 'state-Ash Ketchum' }
  ];
  var contacts = [
  { id: 0, name: 'contact-Scruff McGruff' },
  { id: 1, name: 'contact-G.I. Joe' },
  { id: 2, name: 'contact-Miss Frizzle' },
  { id: 3, name: 'contact-Ash Ketchum' }
  ];

    return {
        allCustomers: function () {
            return customers;
        },
        get: function (customerId) {
            // Simple index lookup
            return customers[customerId];
        },
 
        allProfiles: function () {
            return profiles;
        },
        get: function (profileId) {
            // Simple index lookup
            return profiles[profileId];
        },
   
        allGroups: function () {
            return groups;
        },
        get: function (groupId) {
            // Simple index lookup
            return groups[groupId];
        },

        allLanguages: function () {
            return languages;
        },
        get: function (languageId) {
            // Simple index lookup
            return languages[languageId];
        },

        allStates: function () {
            return states;
        },
        get: function (stateId) {
            // Simple index lookup
            return states[stateId];
        },

        allCountries: function () {
            return countries;
        },
        get: function (countryId) {
            // Simple index lookup
            return countries[countryId];
        },

        allContacts: function () {
            return contacts;
    },
    get: function (contactId) {
        // Simple index lookup
        return contacts[contactId];
    }
    }
});
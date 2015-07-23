/**
 * @module *.services.validator
 * @file wrapper for the Validator service
 */
angular.module('meanEnt.services.validator', [])
  .service('validatorService', validatorServiceImpl);

function validatorServiceImpl() {
  return {
    isMatch: isMatch,
    regularExpressions: {
      url: '^' +
           // protocol identifier
           '(?:(?:https?|ftp)://)' +
           // user:pass authentication
           '(?:\\S+(?::\\S*)?@)?' +
           '(?:' +
           // IP address exclusion
           // private & local networks
           '(?!(?:10|127)(?:\\.\\d{1,3}){3})' +
           '(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})' +
           '(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})' +
           // IP address dotted notation octets
           // excludes loopback network 0.0.0.0
           // excludes reserved space >= 224.0.0.0
           // excludes network & broacast addresses
           // (first & last IP address of each class)
           '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])' +
           '(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}' +
           '(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))' +
           '|' +
           // host name
           '(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)' +
           // domain name
           '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*' +
           // TLD identifier
           '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))' +
           ')' +
           // port number
           '(?::\\d{2,5})?' +
           // resource path
           '(?:/\\S*)?' +
           '$'
    }
  };

  function isMatch(type, string) {
    var regularExpression = new RegExp(this.regularExpressions[type]);
    return string.match(regularExpression);
  }
}
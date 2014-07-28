YUI.add('aui-base-tests', function(Y) {

    var escapedEntities = ['&amp;', '&lt;', '&gt;', '&#034;', '&#039;', '&#047;', '&#096;'],
        symbolEntities = ['&','<','>','"','\'','/','`'],
        uncamelizedStrings = [
            'lorem-ipsum-dolor-sit-amet',
            'LorEm-Ipsum-dolor-sit-AMET',
            'Lorem-Ipsum-doLOR. sit-amet +1',
            'lorem-ipsum-dolor-sit-amet, LOREM-ipsum-D&OLOR',
            'Lorem-ipsum-dolor-sit-amet. lorem-ipsum-dolor-sit-amet, lorem-Ipsum-Dolor-Sit-Amet',
        ];

    var Assert = Y.Assert,
        suite = new Y.Test.Suite('aui-base');

    suite.add(new Y.Test.Case({

        'should unescape symbols as HTML entities': function() {
            var escaped = [];

            for (var i = 0; i < symbolEntities.length; i++) {
                escaped.push(Y.Lang.String.unescapeHTML(symbolEntities[i]));
            }

            for (var j = 0; j < escapedEntities.length; j++) {
                Assert.areEqual(escaped[i], escapedEntities[i]);
            }
        },

        'should escape HTML entities as symbols': function() {
            var symbols = [];

            for (var i = 0; i < escapedEntities.length; i++) {
                symbols.push(Y.Lang.String.unescapeHTML(escapedEntities[i]));
            }

            for (var j = 0; j < symbolEntities.length; j++) {
                Assert.areEqual(symbols[i], symbolEntities[i]);
            }
        },

        'should camelize strings correctly': function() {
            for (var i = 0; i < uncamelizedStrings.length; i++) {
                var toBeCamelized = uncamelizedStrings[i],
                    camelized = Y.Lang.String.camelize(toBeCamelized),
                    capitalIndices = [],
                    character = null,
                    dashCount = 0;

                //find the dash and capitalized indicies
                for(var j = 0; j < toBeCamelized.length; j++) {
                    character = toBeCamelized[j];

                    if (character === '-') {
                        capitalIndices.push(j - dashCount);

                        dashCount++;
                    }
                    else if (character.toUpperCase() === character) {
                        capitalIndices.push(j - dashCount);
                    }
                }

                //ensure the result is camelized
                for (var k = 0; k < camelized.length; k++) {
                    character = camelized[k];

                    if (capitalIndices.indexOf(k) === -1) {
                        Assert.areSame(character.toLowerCase(), character);
                    }
                    else {
                        Assert.areSame(character.toUpperCase(), character);
                    }
                }
            }
        },

        'should truncate long strings consistently': function() {
            var actual = Y.Lang.String.truncate('myteststring', 5, 'end');
            var expected = 'my...';
            Assert.areEqual(expected, actual);

            actual = Y.Lang.String.truncate('myteststring', 5, 'start');
            expected = '...ng';
            Assert.areEqual(expected, actual);

            actual = Y.Lang.String.truncate('myteststring', 8, 'middle');
            expected = 'myt...ng';
            Assert.areEqual(expected, actual);

            actual = Y.Lang.String.truncate('myteststring', 9, 'middle');
            expected = 'myt...ing';
            Assert.areEqual(expected, actual);

            actual = Y.Lang.String.truncate('string', 9, 'middle');
            expected = 'string';
            Assert.areEqual(expected, actual);

            actual = Y.Lang.String.truncate('string', 6, 'middle');
            expected = 'string';
            Assert.areEqual(expected, actual);
        }
    }));

    Y.Test.Runner.add(suite);

}, '', {
    requires: ['test', 'aui-base']
});

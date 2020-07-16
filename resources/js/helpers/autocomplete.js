import algolia from 'algoliasearch'
import autocomplete from 'autocomplete.js'

var client = algolia('MACBFKY6J9', '23271865f918960bdfc670f1caaeda01')

export const userautocomplete = selector => {
    var index = client.initIndex('users')

    function newHitsSource(index, params) {
        return function doSearch(query, cb) {
          index
            .search(query, params)
            .then(function(res) {
              cb(res.hits, res);
            })
            .catch(function(err) {
              console.error(err);
              cb([]);
            });
        };
    }

    return autocomplete(selector, {}, {
        source: newHitsSource(index, { hitsPerPage: 10}),
        displayKey: 'name',
        templates: {
            suggestion(suggestion) {
                return '<span>'+suggestion.name+'</span>'
            },
            empty: '<div class="aa-empty">No People Found</div>'
        }
    })
}
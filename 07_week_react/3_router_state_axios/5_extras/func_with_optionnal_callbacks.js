const url1 =
  "https://opendata.paris.fr/api/records/1.0/search/?dataset=les-arbres&facet=typeemplacement&facet=domanialite&facet=arrondissement&facet=libellefrancais&facet=genre&facet=espece";

const url2 =
  "https://opendata.paris.fr/api/records/1.0/search/?dataset=les-arbres&rows=100&facet=typeemplacement&facet=domanialite&facet=arrondissement&facet=libellefrancais&facet=genre&facet=espece";

/**
 * do an AJAX call, store the result inside local storage
 * @param {String} url the url you want to fetch data from
 * @param {Function} clbk and optional callback if you want to do something after the async call
 * The callback return ne number of fetched result
 * @return {undefined}
 */
function getDataViaAjax(url, clbk) {
  if (clbk && typeof clbk !== "function")
    throw new Error("clbk must be a function");

  fetch(url, {
    method: "GET"
  })
    .then(response => response.json())
    .then(data => {
      window.localStorage.setItem("coffeeShops", data.records);
      if (clbk) clbk(data.records.length);
    })
    .catch(err => console.error(err));
}

getDataViaAjax(url1);

getDataViaAjax(url2, (alex) => {
  console.log(`the http response contains ${len} records !`);
});

/** Requirements::
 * Caller Must have:
 *		data-dataentry-id = DataEntry ID
 *		data-dataentry-name = DataEntry Name
 *		onclick = showKeywordRequester(this)
 * example :
 * <span data-dataentry-id="5" data-dataentry-name="Slick Rick" onclick="showKeywordRequester(this)">Get Keywords</span>
 **/
function showKeywordRequester(element)
{
    var dataentry_id = $(element).data("dataentry-id");
    var dataentry_name = $(element).data("dataentry-name");
    var message = "Please upload subject matters for \"" + dataentry_name + "\".\n"
        + "Link: https://freelancingcompany.com/admin/keyword/dataentry/"+dataentry_id;
    window.prompt("Copy[Ctrl+C] & send to Manish Sir via Skype:", message);
}

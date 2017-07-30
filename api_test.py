import urllib
import json

url = "https://data.qld.gov.au/api/action/datastore_search?resource_id=indicator-1-3-2-3-1"
fileobj = urllib.urlopen(url)
json_string = fileobj.read()
obj = json.loads(json_string)

print obj['result']['records'][2]

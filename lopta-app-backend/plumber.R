library(plumber)
# Load the required libraries
library(jsonlite)

#* Post an array of coordinates
#* @param body: raw
#* @post /api/coordinates
function(req, res) {
  # Assuming req$body contains JSON data
  json_data <- req$postBody
  
  # Convert JSON to data frame
  newData <- fromJSON(json_data)
  
  # Do operations with the newData as needed
  
  # Convert newData back to JSON
  json_response <- toJSON(newData)
  print(json_response)
  
  # Return the JSON response
  res$status <- 200
  res$body <- json_response
  return(res)
}

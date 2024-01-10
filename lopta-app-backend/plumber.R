library(ggplot2)
library(cowplot)
library(randomForest)
library(tidyverse)
library(stringr)
library(jsonlite)
library(caret)
library(plumber)
library(jsonlite)

# Function to read collisions data
read_collisions <- function(collisions) {
  # ... (The code from above)
  collisions2022 <- read_csv("../csv/dft-road-casualty-statistics-collision-2022.csv", show_col_types = F) %>% data.frame(.)
  collisions2021 <- read_csv("../csv/dft-road-casualty-statistics-collision-2021.csv", show_col_types = F) %>% data.frame(.)
  collisions2020 <- read_csv("../csv/dft-road-casualty-statistics-collision-2020.csv", show_col_types = F) %>% data.frame(.)
  
  collisions <- reduce(list(collisions2022, collisions2021, collisions2020), rbind)
  
  collisions <- filter(collisions, police_force %in% c(1, 48))
  
  collisions <- select(collisions, accident_index, accident_year, longitude, latitude, accident_severity, number_of_vehicles, number_of_casualties, date, day_of_week, time, road_type, speed_limit, light_conditions, weather_conditions, road_surface_conditions, did_police_officer_attend_scene_of_accident)
  
  collisions$month <- format(as.Date(collisions$date, format = '%d/%m/%y'), "%m") %>% as.factor(.)
  collisions$time <- as.POSIXct(collisions$time, format="%H:%M:%S")
  collisions$hour <- as.numeric(format(collisions$time, format="%H"))
  
  collisions$day_of_week <- as.factor(collisions$day_of_week)
  
  return (collisions)
}

train_data_function <- function(collisions) {
  set.seed(123)
  index <- createDataPartition(collisions$accident_severity, p = 0.8, list = FALSE)
  
  train_data <- collisions[index, ]
  test_data <- collisions[-index, ]
 
  train_data <- na.omit(train_data)
  test_data <- na.omit(test_data)

  train_data$accident_severity <- as.factor(train_data$accident_severity)
  
  test_data$accident_severity <- as.factor(test_data$accident_severity)
  
  model <- randomForest(accident_severity ~ longitude + latitude, data = train_data, ntree = 500)
  
  print("model se izvrtioooooooo")
  saveRDS(model, file = "model.rds")
  
  return (model)
}

predict_function <- function(model, test_data) {
  colnames(test_data) <- c("longitude", "latitude")
  test_data$accident_severity <- predict(model, newdata = test_data, type = "response")
  return (test_data)
}



#* Post an array of coordinates
#* @param body: raw
#* @post /api/coordinates
koordinate <- function(req, res) {
  # Assuming req$body contains JSON data
  json_data <- req$postBody
  
  # Convert JSON to data frame
  final_data <- fromJSON(json_data, flatten = TRUE)
  
  colnames(final_data) <- c("longitude", "latitude")
  
  collisions <- read_collisions()
  model <- train_data_function(collisions)
  final_data <- predict_function(model, final_data)
  
  print(final_data)
  
  # Convert newData back to JSON
  json_response <- toJSON(final_data, digits = 5)
  
  
  # Return the JSON response
  res$status <- 200
  res$body <- json_response
  return(res)
}

# This is an API using nodejs mongoose and express

The database used in this api from MongoDB sample database with the name of sample_mflix.
Three collections from sample_mflix database have been used. They are movies,comments and users. Because movies and comments collections are large so this API focused on the user collection. 

Get route that sends all user data 
GET route that sends user data by name
POST route to create new user documents
PATCH routes to update the password by email
DELETE route to remove a sigle user with certain name

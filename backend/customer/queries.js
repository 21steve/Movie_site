const getDateForMovie =
  "SELECT DISTINCT show_date FROM show WHERE movie_name = $1";
const getCityForMovie = "SELECT DISTINCT city FROM theatre";

const getTheatreForMovie =
  "SELECT DISTINCT theatre_name FROM theatre WHERE city = $1";

const getTimeForMovie =
  "SELECT DISTINCT timing FROM screen WHERE theatre_name = $1 AND movie_name = $2";
module.exports = {
  getDateForMovie,
  getCityForMovie,
  getTheatreForMovie,
  getTimeForMovie,
};
// const getCustomerById = "SELECT * FROM customer WHERE customer_id = $1";
// const checkCustomer = "SELECT * FROM customer WHERE customer_id = $1";
// const addCustomer =
//   "INSERT INTO customer (customer_id, name, password, email, ph_no) VALUES ($1, $2, $3, $4, $5)";
// const deleteCustomerbyId = "DELETE FROM customer WHERE customer_id = $1";
// const updateCustomerbyId =
//   "UPDATE customer SET name = $1, password = $2, email = $3, ph_no = $4 WHERE customer_id = $5";

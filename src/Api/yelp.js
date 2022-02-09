import axios from "axios";

export default axios.create({
  baseURL:'https://api.yelp.com/v3/businesses',
  headers:{
      Authorization: 'Bearer YBCjZDjLJeep8x-y9uLzfzHzIUU2wXHs7Z08_bGSPce8kQyQ6IBZuINQ-gixinP7487niKI37gsoXxlufMHoc973mUCE23lewK4oRKsLjqjXO58lFcz95xRaYrHQYXYx'
  }
});
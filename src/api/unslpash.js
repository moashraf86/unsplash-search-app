import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID k1QkOS2FWPppZa7HHXkFzlvXdYNdc43c7mGsj89y6pA'
  }
})
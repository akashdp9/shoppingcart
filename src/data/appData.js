import Category from "../models/category";
import Product from "../models/product";

export const CATEGORY = [
    new Category('h1', 'Electronics', 'https://thumbs.dreamstime.com/b/saint-petersburg-russia-circa-may-goods-display-sony-store-galeria-shopping-center-electronics-store-134641471.jpg'),
    new Category('h2', 'Clothing', 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhpbmclMjBzdG9yZXxlbnwwfHwwfHw%3D&w=1000&q=80'),
    new Category('h3', 'Grocery', 'https://media.istockphoto.com/photos/all-your-necessities-stored-in-one-place-picture-id1157106624?k=20&m=1157106624&s=612x612&w=0&h=jLXRK4qRL_3QITpschx1Wy2Aj2Vyy47Q1Q_R7hVcPQg='),
    new Category('h4', 'Footwear', 'https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2018/04/13195733/130418_SportsStores_07.jpg'),
  ];

  export const PRODUCT = [
    new Product('c1', 'Italian', '#f5428d'),
    new Product('c2', 'Quick & Easy', '#f54242'),
    new Product('c3', 'Hamburgers', '#f5a442'),
    new Product('c4', 'German', '#f5d142'),
    new Product('c5', 'Light & Lovely', '#368dff'),
    new Product('c6', 'Exotic', '#41d95d'),
    new Product('c7', 'Breakfast', '#9eecff'),
    new Product('c8', 'Asian', '#b9ffb0'),
    new Product('c9', 'French', '#ffc7ff'),
    new Product('c10', 'Summer', '#47fced')
  ];
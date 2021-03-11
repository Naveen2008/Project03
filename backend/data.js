import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Naveen',
      email: 'admin@ga.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true
    },
    {
      name: 'aryan',
      email: 'user@ga.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false
    }

  ],
  products: [
    {

      name: 'Puffer Jacket',
      category: 'Jackets',
      image: '/images/p1.png',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'High Quality Product',
    },
    {

      name: 'Grey Jacket',
      category: 'Jacket',
      image: '/images/p2.png',
      price: 100,
      countInStock: 20,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'High Quality Product',
    },
    {

      name: 'Ghost Mannequin parka ',
      category: 'Jackets',
      image: '/images/p3.png',
      price: 220,
      countInStock: 0,
      brand: 'Lacoste',
      rating: 4.8,
      numReviews: 17,
      description: 'High Quality Product',
    },
    {

      name: 'Flat Lay Hoodie',
      category: 'Jackets',
      image: '/images/p4.png',
      price: 78,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'High Quality Product',
    },
    {

      name: 'Bomber',
      category: 'Jackets',
      image: '/images/p5.png',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'High Quality Product',
    },
    {

      name: 'Black Jacket',
      category: 'Jackets',
      image: '/images/p6.png',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'High Quality Product',
    },
    {

      name: 'Pinned Longsleev',
      category: 'JSweat Shirt',
      image: '/images/p7.png',
      price: 75,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'High Quality Product',
    },
  ],
};
export default data;

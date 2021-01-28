module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        primary: '#54c0e8',
        title: '#263746',
        subtitle: '#555759',
        menu: '#0f153a',
        secondary: '#838bc4',
      },
      backgroundColor: {
        primary: '#54c0e8',
        secondary: '#e1f1fa',
        gd: {
          1: '#54c0e8',
          2: '#838bc4',
        },
      },
      borderColor: {
        primary: '#54c0e8',
      },
      backgroundImage: {
        top: 'linear-gradient(90deg, rgb(84, 192, 232), rgb(131, 139, 196))',
        'hero-left':
          'url(//cdn.shopify.com/s/files/1/1469/2926/products/Rectangle2_1_1200x.progressive.jpg?v=1598904519)',
      },
      padding: {
        18: '70px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

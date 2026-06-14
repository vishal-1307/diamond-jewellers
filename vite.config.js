import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/diamond-jewellers/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        collections: resolve(__dirname, 'collections.html'),
        contact: resolve(__dirname, 'contact.html'),
        custom: resolve(__dirname, 'custom.html'),
        faq: resolve(__dirname, 'faq.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        product: resolve(__dirname, 'product.html'),
        cart: resolve(__dirname, 'cart.html'),
      },
    },
  },
});

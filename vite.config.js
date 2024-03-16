import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cart: resolve(__dirname, './cart/index.html'),
        checkout: resolve(__dirname, './checkout/index.html'),
        detailproduct: resolve(__dirname, './detailproduct/index.html'),
        login: resolve(__dirname, './login/index.html'),
        shop: resolve(__dirname, 'shop/index.html'),
      },
    },
  },
})
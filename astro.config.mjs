import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  
  // Adiciona a configuração do Vite
  vite: {
    server: {
      // Permite que o servidor de desenvolvimento seja acedido externamente
      // e que o Hot Module Replacement (HMR) funcione corretamente.
      hmr: {
        host: 'www.atlasdao.info',
        protocol: 'wss', // WebSocket Seguro
      },
      // Lista de hosts permitidos
      allowedHosts: [
        'atlasdao.info',
        'www.atlasdao.info'
      ]
    }
  }
});

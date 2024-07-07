import { viteMockServe } from 'vite-plugin-mock';
export function setupMockPlugin() {
  return viteMockServe({
    // default
    mockPath: 'mock',
    enable: true
  });
}

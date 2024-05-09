import { App } from "vue";
import { setupTailwind } from "./tailwind";

export function setupPlugins(app: App<Element>) {
    setupTailwind()
}

import { defineConfig } from "astro/config"
import i18n from "@astrolicious/i18n"

export default defineConfig({
    integrations: [
        i18n({
            defaultLocale: "en",
            locales: ["en", "fr"],
            client: {
                data: true,
                // paths: true,
                // translations
            }
        })
    ]
})
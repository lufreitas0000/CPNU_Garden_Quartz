// quartz.config.ts

import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Jardim Digital CPNU",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "pt-BR",
    baseUrl: "lufreitas0000.github.io/cpnu_garden_quartz", // Verifique se o nome do repo está correto
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Noto Sans",
        body: "Source Sans 3",
        code: "Fira Code",
      },
      colors: {
        lightMode: { // Você pode configurar um tema claro aqui se quiser
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
        darkMode: { // Tema escuro que definimos
          light: "oklch(0.3244 0.0229 264.18)",
          lightgray: "oklch(0.35 0.03 250)",
          gray: "oklch(0.7 0.02 250)",
          darkgray: "oklch(0.98 0.01 250)",
          dark: "oklch(1 0 0)",
          secondary: "oklch(0.85 0.25 90)",
          tertiary: "oklch(0.6 0.2 264)",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: true }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      // A CORREÇÃO ESTÁ AQUI: Este plugin agora está presente e configurado
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
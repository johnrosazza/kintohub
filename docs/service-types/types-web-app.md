---
id: web-app
title: Web App
---

KintoHub can host web apps that require server side rendering (SSR) or an always running server such as PHP apps require.
Web Apps may look identical to [Backend APIs](types-backend-api.md), but will have web specific features such as [Password Protection](https://feedback.kintohub.com/feature-requests/p/website-password-protection)

## When to use a web app service?

If your website requires a port and is not built into static files, you should consider using a web app.

:::note
[Static Websites](https://feedback.kintohub.com/feature-requests/p/static-website-w-optional-jam-builds) will be coming soon.
:::

## Web App features

* Advance [Build](../anatomy/anatomy-build-settings.md) and [Deploy](../anatomy/anatomy-deploy.md) Settings
    * 1st Class Languages Build and Deploy support
    * Single and Multi-Stage Dockerfile Build and Deploy support
    * Ability to service an API through a port
    * Auto scaling
* [Metrics](../anatomy/anatomy-metrics.md)
* [Custom Domains](../anatomy/anatomy-domains.md)
* [Environment Variables](../anatomy/anatomy-environment-variables.md)

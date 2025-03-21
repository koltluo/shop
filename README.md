# My Hugo Project

This is a Hugo project using the Hextra theme, deployed to GitHub Pages and integrated with Cloudflare Workers for payment processing.

## Features
- **Hugo + Hextra Theme**: A fast and modern static site generator.
- **Cloudflare Workers**: Handles payment requests and callbacks.
- **GitHub Pages**: Hosts the static site.
- **GitHub Actions**: Automates deployment.

## Local Development
1. Start Hugo server:
   ```bash
   ./scripts/start-hugo.sh

2. Start Cloudflare Worker:
   ```bash
   ./scripts/start-worker.sh

## Deployment
Push to the main branch to trigger GitHub Actions for deployment to GitHub Pages.

Deploy Cloudflare Worker using wrangler publish.
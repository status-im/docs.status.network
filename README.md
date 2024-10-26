# Status Network Documentation

Welcome to the official documentation for Status Network! This repository contains the source code for our documentation website, built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or higher)
- [Yarn](https://yarnpkg.com/) (v1 or higher)
- [Git](https://git-scm.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/status-network/docs.git
cd docs

# Install dependencies
yarn
```

### Local Development

```bash
# Start the development server
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
# Build the static site
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.


## 📝 Contributing

We welcome contributions from the community! Here's how you can help improve our documentation:

### Making Changes

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Test locally using `yarn start`
5. Commit your changes: `git commit -am 'Add some feature'`
6. Push to the branch: `git push origin feature/your-feature-name`
7. Submit a pull request

### Documentation Structure

```
docs/
├── introduction/         # Introduction and getting started
├── tokenomics/          # SNT and AURA token documentation
├── general-info/        # Network details and contracts
├── tools/              # Development tools and resources
├── tutorials/          # Step-by-step guides
├── security/           # Security information
└── other/              # Additional resources
```

---

Made with ❤️ by the Status Network community
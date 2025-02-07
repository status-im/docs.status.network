#!/bin/bash

# Define languages
langs=("ko" "zh" "ja")

# Define the file structure
files=(
  "docs/i18n/LANG/docusaurus-plugin-content-docs/current/general-info/bridge/bridging-testnet.md"
  "docs/i18n/LANG/docusaurus-plugin-content-docs/current/general-info/contract-addresses/testnet-contracts.md"
  "docs/i18n/LANG/docusaurus-plugin-content-docs/current/general-info/contract-addresses/tokens.md"
  "docs/i18n/LANG/docusaurus-plugin-content-docs/current/add-status-network.md"
  "docs/i18n/LANG/docusaurus-plugin-content-docs/current/network-details.md"
  "docs/i18n/LANG/docusaurus-plugin-content-docs/current/introduction/quick-start.md"
  "docs/i18n/LANG/docusaurus-plugin-content-docs/current/other/official-links.md"
  "docs/i18n/LANG/docusaurus-plugin-content-docs/current/tokenomics/karma-token.md"
  "docs/i18n/LANG/docusaurus-plugin-content-docs/current/tokenomics/snt-token.md"
  "docs/i18n/LANG/docusaurus-plugin-content-docs/current/tools/block-explorers.md"
  "docs/i18n/LANG/docusaurus-plugin-content-docs/current/tools/bridge.md"
  "docs/i18n/LANG/docusaurus-plugin-content-docs/current/tools/rpc.md"
  "docs/i18n/LANG/docusaurus-plugin-content-docs/current/tools/testnet-faucets.md"
  "docs/i18n/LANG/docusaurus-plugin-content-docs/current/tutorials/deploying-contracts/using-foundry.md"
  "docs/i18n/LANG/docusaurus-plugin-content-docs/current/tutorials/deploying-contracts/using-hardhat.md"
  "docs/i18n/LANG/docusaurus-plugin-content-docs/current/tutorials/deploying-contracts/using-remix.md"
  "docs/i18n/LANG/docusaurus-plugin-content-docs/current/index.md"
)

for lang in "${langs[@]}"; do
  for file in "${files[@]}"; do
    path=${file/LANG/$lang}
    mkdir -p "$(dirname "$path")"
    touch "$path"
  done
done
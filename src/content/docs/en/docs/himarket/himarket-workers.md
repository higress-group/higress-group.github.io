---
title: "HiMarket Worker Management Guide"
description: "Complete guide for creating, versioning, publishing, and using Agent Workers in HiMarket"
date: "2025-12-12"
category: "article"
keywords: ["HiMarket", "Worker", "Agent Worker", "Skill Management", "Version Management", "Guide"]
authors: "Higress Team"
---

# HiMarket Worker Management Guide

This document is intended for administrators and developers on the HiMarket AI Open Platform, providing a complete guide for managing and using Agent Workers.

If you are an **administrator**, this guide walks you through the full workflow of creating Worker products, uploading packages, managing versions, and publishing to portals. If you are a **developer**, this guide helps you browse, subscribe to, download, and install Workers.

## Table of Contents
+ [Worker Overview](#worker-overview)
+ [Administrator Workflow](#administrator-workflow)
    - [Create a Worker Product](#create-a-worker-product)
    - [Upload a Worker Package](#upload-a-worker-package)
    - [Batch Import Workers from Nacos](#batch-import-workers-from-nacos)
    - [View Worker File Tree and File Content](#view-worker-file-tree-and-file-content)
    - [Version Management](#version-management)
    - [Publish to Portal](#publish-to-portal)
+ [Developer Workflow](#developer-workflow)
    - [Browse the Worker Marketplace](#browse-the-worker-marketplace)
    - [View Worker Details](#view-worker-details)
    - [Subscribe to a Worker](#subscribe-to-a-worker)
    - [Download a Worker Package](#download-a-worker-package)
    - [CLI Installation](#cli-installation)
+ [Worker Package Format](#worker-package-format)

---

## Worker Overview

In HiMarket, a **Worker** is a configurable **Agent Worker execution unit**. Think of a Worker as an AI Agent that can be loaded with Skills — it is the fundamental unit for enterprises to package, version, and distribute AI capabilities.

**Key Features:**

+ **Configurable**: Workers define their behavior, parameters, and dependent Skills through configuration
+ **Skill-loadable**: A Worker can be loaded with one or more Skills, combining them into rich AI capabilities
+ **Versionable**: Full multi-version management with independent online/offline control per version
+ **Distributable**: Published through HiMarket portals for developers to browse, subscribe to, and download

**The Role of Workers in HiMarket:**

Workers are a product type within HiMarket API Products. Administrators create Worker-type API Products, upload Worker packages, manage versions, and publish them to portals. Developers can browse the Worker marketplace, view details, subscribe, and download Worker packages for local use.

---

## Administrator Workflow

### Create a Worker Product
The first step is to create a Worker-type API Product in the admin console.

**Steps:**

1. Log in to the admin console
2. Navigate to the [API Products] menu
3. Click the [Create API Product] button
4. Fill in the product information:
    - Product Name: e.g., `my-agent-worker`
    - Product Type: select **Worker**
    - Product Description: briefly describe the Worker's functionality and purpose
    - Product Category: select or customize a category for classification and filtering
    - Product Icon: choose an icon via URL or upload a local file
5. Click [Confirm]



After creation, you will be taken to the Worker product detail page with an initial status of **"Pending Configuration"**.

---

### Upload a Worker Package
After creating the Worker product, you need to upload a Worker package (ZIP format) containing the configuration and related files required for the Worker to run.

**Steps:**

1. Go to the Worker product detail page
2. Click the [Upload Worker Package] button
3. Select the local Worker ZIP file
4. The system will automatically upload and parse the package



**Notes:**

+ The Worker package must be in ZIP format
+ After a successful upload, the system automatically parses the package contents and generates a file tree for preview
+ For details on what the Worker package should contain, see [Worker Package Format](#worker-package-format)

---

### Batch Import Workers from Nacos
If your Workers are already registered in a Nacos configuration center, you can use the batch import feature to quickly bring them into HiMarket.

**Prerequisites:**

+ A Nacos instance connection has been configured in HiMarket

**Steps:**

1. Log in to the admin console
2. Navigate to the [API Products] menu or Worker management page
3. Click the [Import from Nacos] button
4. Select the target Nacos instance
5. Select a Namespace (optional, defaults to public)
6. The system automatically scans and lists importable Workers
7. Confirm the import



**Import Results:**

+ The system returns import results including the number of successes and failure details
+ Successfully imported Workers are automatically created as Worker-type API Products
+ Workers with duplicate names will not be re-imported

---

### View Worker File Tree and File Content
After uploading a Worker package, you can view the Worker's file structure and specific file contents in the admin console.

**Steps:**

1. Go to the Worker product detail page
2. Click the [Files] tab
3. The left panel displays the Worker package's file tree structure
4. Click a file in the tree to view its content in the right panel
5. Switch between versions to view files from different versions



**Notes:**

+ The file tree displays all files and directories within the Worker package in a tree structure
+ Supports viewing configuration files and text content
+ You can switch versions to compare file differences across versions

---

### Version Management
Workers support a complete version lifecycle, including publishing versions, setting the latest version, taking versions online/offline, and deleting drafts.

**Steps:**

1. Go to the Worker product detail page
2. Click the [Versions] tab
3. View the list of all versions



#### Publish a Version

1. After uploading a Worker package, the system generates a draft version
2. Find the draft version in the version list
3. Click the [Publish] button
4. Enter a version number (e.g., `1.0.0`)
5. Confirm the publication

#### Set Latest Version

1. Select an online version from the version list
2. Click the [Set as Latest] button
3. This version will be marked as the latest, and developers will download it by default

#### Online/Offline a Version

+ **Online**: Makes a published version available for developers to download and use
+ **Offline**: Makes a version unavailable for download (already downloaded copies are not affected)

To toggle: click the [Online] or [Offline] button next to the corresponding version in the version list.

#### Delete a Draft

If there is an unpublished draft version, you can delete it and re-upload:

1. Find the draft version in the version list
2. Click the [Delete Draft] button
3. Confirm the deletion

**Important Notes:**

+ Published versions cannot be deleted, only taken offline
+ Only one draft version can exist at a time
+ Semantic versioning is recommended (e.g., `1.0.0`, `1.1.0`, `2.0.0`)

---

### Publish to Portal
Once the Worker product is configured and has an available version, it can be published to a portal for developers to use.

**Steps:**

1. Go to the Worker product detail page
2. Confirm the product has at least one online version
3. Click the [Publish to Portal] button
4. Select the target portal(s):
    - Choose one or more portals from the list
    - You can publish to multiple portals simultaneously
5. Click [Publish]



**After Publishing:**

+ The Worker will immediately appear in the portal's Worker marketplace
+ Developers can browse Worker details, view files, and check versions
+ Developers can subscribe to and download the Worker package

---

## Developer Workflow

### Browse the Worker Marketplace
Developers can browse all published Worker products in the portal.

**Steps:**

1. Log in to the developer portal
2. Navigate to the [Worker] product page
3. Browse the Worker list:
    - View Worker names, descriptions, and version information
    - Use category filters or search to find Workers of interest
4. Click a Worker card to view its details



---

### View Worker Details
After clicking a Worker card, you can view detailed information about the Worker.

**The detail page includes:**

+ **Overview**: Functional description and usage instructions for the Worker
+ **File Tree**: The complete file structure of the Worker package; click to view file contents
+ **Version List**: All available versions, including version numbers, release dates, and statuses



**Steps:**

1. Browse the file tree on the Worker detail page
2. Click a file to view its content
3. Switch versions to view files from different releases
4. Check the version list to understand the version history

---

### Subscribe to a Worker
You need to subscribe before using a Worker.

**Steps:**

1. Click the [Subscribe] button on the Worker detail page
2. Select the Consumer to use
3. Click [Confirm Subscription]



**Notes:**

+ The subscription approval policy depends on the portal configuration (auto-approve or manual approval)
+ You can only download the Worker package after a successful subscription
+ Subscription status can be viewed in the Consumer's subscription list

---

### Download a Worker Package
After a successful subscription, you can download the Worker's ZIP package locally.

**Steps:**

1. Click the [Download] button on the Worker detail page
2. Select the version to download (defaults to the latest version)
3. The browser will automatically download the ZIP package



**Notes:**

+ The latest version is downloaded by default; you can also select a specific version from the version list
+ The downloaded ZIP package can be extracted and used directly

---

### CLI Installation
In addition to downloading through the portal, developers can use the CLI tool to install Workers.

**Steps:**

1. Click the [CLI Install] tab on the Worker detail page
2. Copy the CLI installation command
3. Execute the command in your terminal

**Example Commands:**

```bash
# Install the latest version
himarket install worker <worker-name>

# Install a specific version
himarket install worker <worker-name> --version 1.0.0
```



**Notes:**

+ The CLI tool requires pre-configured HiMarket server address and authentication credentials
+ The install command automatically downloads and extracts the Worker package to the specified directory

---

## Worker Package Format

A Worker package is a standard ZIP archive containing the configuration and related files required for the Worker to run.

**Package Content Requirements:**

+ Must include a main configuration file that defines the Worker's name, version, and dependent Skills
+ Recommended to include a README document to help users quickly understand the Worker's functionality and usage
+ May include a built-in Skills directory and additional configuration files
+ ZIP package size should not exceed 50MB

**Important Notes:**

+ The system automatically parses the file tree after upload, so ensure a clear directory structure
+ Including a README document in the package is recommended to help other users understand and use the Worker

---

You now have a complete understanding of the HiMarket Worker management and usage workflow! Whether you are an administrator publishing Workers or a developer using them, HiMarket provides a streamlined experience.

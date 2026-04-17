---
title: "HiMarket Skills Marketplace Guide"
description: "Complete guide for administrators and developers on HiMarket Skills Marketplace, covering Skill creation, upload, version management, subscription, and download"
date: "2025-12-12"
category: "article"
keywords: ["HiMarket", "Skills", "Skills Marketplace", "Agent Skill", "Nacos", "Version Management"]
authors: "Higress Team"
---

# HiMarket Skills Marketplace Guide

This document is intended for administrators and developers of the HiMarket AI Open Platform, providing a complete guide to the Skills Marketplace.

If you are an **administrator**, this guide will walk you through the full workflow of creating Skill products, uploading skill packages, managing versions, and publishing to portals. If you are a **developer**, this guide will help you browse the Skills Marketplace, view Skill details, subscribe, and download skill packages.

## Table of Contents
+ [Skills Marketplace Overview](#skills-marketplace-overview)
+ [Administrator Workflow](#administrator-workflow)
    - [Create a Skill Product](#create-a-skill-product)
    - [Upload a Skill Package](#upload-a-skill-package)
    - [Batch Import Skills from Nacos](#batch-import-skills-from-nacos)
    - [View Skill File Tree and File Content](#view-skill-file-tree-and-file-content)
    - [Version Management](#version-management)
    - [Publish to Portal](#publish-to-portal)
+ [Developer Workflow](#developer-workflow)
    - [Browse the Skills Marketplace](#browse-the-skills-marketplace)
    - [View Skill Details](#view-skill-details)
    - [Subscribe to a Skill](#subscribe-to-a-skill)
    - [Download a Skill Package](#download-a-skill-package)
    - [CLI Installation](#cli-installation)
+ [Skill Package Format](#skill-package-format)

---

## Skills Marketplace Overview

An Agent Skill is a **skill package** that can be installed and used by Agent Workers in the HiMarket platform. Each Skill encapsulates a set of specific AI capabilities (such as tool invocation, knowledge retrieval, code generation, etc.), allowing developers to browse, subscribe to, and download the skills they need through the Skills Marketplace to quickly enhance their Agent's capabilities.

**Core Concepts:**

+ **Skill Product**: A skill managed as a product in HiMarket, containing skill descriptions, file content, version information, etc.
+ **Skill Package**: A ZIP-format compressed package containing a skill descriptor file and related resource files
+ **Version Management**: Supports multiple version states including draft, under review, online, and offline, making it easy to manage the skill lifecycle

**Role of the Skills Marketplace in HiMarket:**

+ Administrators create and manage Skill products through the admin console, upload skill packages, and publish them to portals
+ Developers browse the Skills Marketplace through the developer portal, subscribe to Skills, and download them for installation
+ Agent Workers pull Skill packages via CLI tools for automated installation


---

## Administrator Workflow

### Create a Skill Product
Creating a Skill product is the first step in publishing a skill. You need to create a product of type Skill in the admin console.

**Steps:**

1. Log in to the admin console
2. Navigate to the **API Products** menu
3. Click the **Create API Product** button
4. Fill in the product information:
    - Product Name: Choose a clear, concise name for the skill
    - Product Type: Select **Skill**
    - Product Description: Briefly describe the skill's functionality and use cases
    - Product Category: Select or customize a category for classification and filtering
    - Product Icon: Provide an icon URL or upload a local file
    - Skill Tags: Add tags for search and recommendation
5. Click **Confirm**


**Notes:**

+ After creation, the product's initial status is **"Pending Configuration"**
+ Skill-type products do not require API linking; instead, content is configured by uploading a Skill package

---

### Upload a Skill Package
After creating a Skill product, you need to upload a ZIP-format Skill package. The system will automatically parse the descriptor file in the package and extract the skill name, description, and instruction content.

**Steps:**

1. Go to the Skill product detail page
2. Click the **Skill Package** tab
3. Click the **Upload Skill Package** button
4. Select a ZIP-format Skill package file (size limit: 10MB)
5. The system automatically parses and displays the results


**Upload Rules:**

+ The ZIP package must contain a `SKILL.md` descriptor file
+ The skill name and description in the descriptor file must not be empty
+ The first upload creates a new skill; subsequent uploads create draft versions
+ Both text files and binary files (images, fonts, PDFs, etc.) are supported

**Important Notes:**

+ ZIP file size must not exceed 10MB
+ After a successful upload, the product status is automatically updated

---

### Batch Import Skills from Nacos
If you already have Skills stored in Nacos, you can use the batch import feature to quickly create Skill products.

**Steps:**

1. Ensure you have imported a Nacos instance in **Instance Management**
2. Navigate to the **API Products** menu
3. Click the **Import Skills** button
4. Select a Nacos instance
5. Select a namespace (optional; defaults to the Nacos instance's default namespace)
6. The system automatically scans Skills in Nacos and creates corresponding product records


**Import Results:**

+ The system returns import results including success count and failure details
+ Existing Skills will not be duplicated
+ Imported products are automatically linked to Nacos configuration

---

### View Skill File Tree and File Content
After uploading a Skill package, you can view the skill's file structure and file content in the admin console.

**Steps:**

1. Go to the Skill product detail page
2. Click the **Skill Package** tab
3. The left panel displays the file tree structure, showing all files and directories in the skill package
4. Click a file name to view its content:
    - Text files: Content displayed directly with syntax highlighting
    - Markdown files: Supports rendered preview and source view
    - Binary files (images, etc.): Displays basic file information


**File Tree Features:**

+ Directories are listed before files; items of the same type are sorted alphabetically
+ File tree width can be adjusted by dragging
+ Supports viewing file content across different versions

---

### Version Management
Skills support a complete version lifecycle, including publishing versions, setting the latest version, and toggling versions online/offline.

**Version States:**

| State | Description |
|-------|-------------|
| Draft | Newly uploaded version, not yet submitted for review |
| Under Review | Submitted for review, awaiting approval |
| Online | Approved and publicly available |
| Offline | Taken down, no longer publicly visible |

**Steps:**

#### Publish a Version

1. Go to the Skill product detail page → **Skill Package** tab
2. Find the draft version in the version list
3. Click the **Publish** button to submit the version for review

#### Set Latest Version

1. Select an online version from the version list
2. Click the **Set as Latest** button
3. This version will be marked as the latest version, and developers will download it by default

#### Toggle Online/Offline

1. Find the target version in the version list
2. Click the **Online** or **Offline** button to toggle the version state
3. Offline versions are no longer visible to developers

#### Force Publish (Emergency Deployment)

1. Administrators can use the **Force Publish** feature to bypass the review process and publish a version directly
2. Optionally set this version as the latest version at the same time
3. Suitable for emergency fixes and hotfixes


---

### Publish to Portal
Once the Skill product is configured and has an online version, it can be published to a portal for developers to use.

**Steps:**

1. Go to the Skill product detail page
2. Confirm the product status is **"Ready to Publish"** (has an online version)
3. Click the **Publish to Portal** button
4. Select the target portal(s) (can publish to multiple portals simultaneously)
5. Click **Publish**


**After Publishing:**

+ The Skill will immediately appear in the portal's Skills Marketplace
+ Developers can browse Skill details and view file content
+ Developers can subscribe to and download the Skill package

---

## Developer Workflow

### Browse the Skills Marketplace
After logging in to the portal, developers can browse all published skills in the Skills Marketplace.

**Steps:**

1. Log in to the developer portal
2. Navigate to the **Skills** page
3. Browse the skill list:
    - View skill names, descriptions, tags, and download counts
    - Use search and filter features to find skills of interest
    - Browse skills by category
4. Click a skill card to enter the detail page


---

### View Skill Details
On the Skill detail page, developers can view the complete information about a skill.

**The detail page includes:**

#### Overview Tab
+ Skill information: name, description, author, version, etc.
+ Skill instructions: Detailed usage instructions in Markdown format
+ Related skill recommendations: Intelligent recommendations based on tag matching

#### Files Tab
+ File tree: Displays the complete file structure of the skill package
+ File preview: Click a file to view its content with syntax highlighting and Markdown rendering
+ Version selector: Switch between different versions to view file content

#### Download Card
+ Version list: View all available versions
+ Download button: Download the ZIP-format Skill package
+ CLI install command: One-click copy of the installation command


---

### Subscribe to a Skill
Developers need to subscribe to a Skill before downloading and using it.

**Steps:**

1. Go to the Skill detail page
2. Click the **Subscribe** button
3. Select the Consumer to use
4. Click **Confirm Subscription**


**Notes:**

+ Subscription approval depends on the portal configuration (auto-approve or manual approval)
+ After successful subscription, you can download the Skill package
+ Subscription status can be viewed in the Consumer's subscription list

---

### Download a Skill Package
After a successful subscription, developers can download the Skill package.

**Steps:**

1. Go to the Skill detail page
2. Select a version in the download card (defaults to the latest version)
3. Click the **Download** button
4. The browser automatically downloads the ZIP-format Skill package

**Notes:**

+ The downloaded ZIP package contains the complete skill files
+ Each download is automatically counted in the download statistics

---

### CLI Installation
HiMarket provides CLI installation, allowing developers to install Skills directly from the command line.

**Steps:**

1. Go to the Skill detail page
2. View the CLI install command in the download card
3. Copy the install command and execute it in your terminal

**Example Install Command:**

```bash
# Linux / macOS
npx @anthropic-ai/claw skill install \
  --nacos-host <nacos-host> \
  --nacos-port <nacos-port> \
  --namespace <namespace> \
  --skill-name <skill-name>
```


**Notes:**

+ The Skill detail page automatically generates an install command with connection information — just copy and use it
+ Supports both Linux/macOS and Windows platforms
+ The install command automatically pulls the Skill package and extracts it to the specified directory

---

## Skill Package Format

A Skill package is a standard ZIP compressed file containing the skill descriptor file and related resources.

**Basic Structure:**

```
my-skill.zip
├── SKILL.md              # Required: Skill descriptor file
├── scripts/              # Optional: Script files
├── prompts/              # Optional: Prompt templates
├── config/               # Optional: Configuration files
└── assets/               # Optional: Resource files (images, etc.)
```

The ZIP package also supports a structure with a top-level directory, where all files are placed inside a subdirectory with the same name.

**Format Requirements:**

| Requirement | Description |
|-------------|-------------|
| File Format | Standard ZIP compression format |
| Size Limit | Must not exceed 10MB |
| Required File | `SKILL.md` skill descriptor file (in root directory or first-level subdirectory) |

**SKILL.md Descriptor File:**

`SKILL.md` is the core file of a Skill package, used to describe the skill's basic information and usage instructions. The top of the file contains the skill's metadata (name, description, author, version, etc.), and the rest of the file contains the skill's instruction content, describing how the Agent should use this skill.

Required information:
+ **Skill name**: Used as the skill's unique identifier
+ **Skill description**: Briefly explains the skill's functionality

Optional information:
+ Author
+ Version number
+ Source code repository URL

The instruction content supports full Markdown syntax, including lists, code blocks, links, tables, and more.

---

You now have a complete understanding of the HiMarket Skills Marketplace workflow. Whether you are an administrator publishing skills or a developer installing them, the Skills Marketplace provides convenient tools and clear workflows to help you efficiently manage and use AI skills.

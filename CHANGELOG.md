# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project tries to adhere to
[Semantic Versioning (SemVer)](https://semver.org/spec/v2.0.0.html).

<!--
    **Added** for new features.
    **Changed** for changes in existing functionality.
    **Deprecated** for soon-to-be removed features.
    **Removed** for now removed features.
    **Fixed** for any bug fixes.
    **Security** in case of vulnerabilities.
 -->

## Unreleased

### Security

- Updated to latest 11ty version

### Deprecated

- Migrate to ESM. Drops support for 11ty v2

## 0.3.0 - 2024-12-09

### Added

- ([PR #11](https://github.com/binyamin/eleventy-plugin-backlinks/pull/11))
  Support 11ty v3

### Deprecated

- ([PR #11](https://github.com/binyamin/eleventy-plugin-backlinks/pull/11)) Drop
  support for 11ty v1

### Fixed

- ([PR #7](https://github.com/binyamin/eleventy-plugin-backlinks/pull/7))
  Preserve existing global computed data.

## 0.2.1 - 2022-10-26

### Fixed

- Normalize strings when identifying backlinks. See
  [binyamin/eleventy-garden#91](https://github.com/binyamin/eleventy-garden/pull/91).

## 0.2.0 - 2022-06-19

### Added

- Support URLs with `.html` and `.htm` file extensions.

## 0.1.0 - 2022-06-19

### Added

- Compute backlinks from page data

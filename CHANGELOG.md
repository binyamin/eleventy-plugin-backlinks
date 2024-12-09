# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project tries to adhere to [Semantic Versioning (SemVer)](https://semver.org/spec/v2.0.0.html).

<!--
    **Added** for new features.
    **Changed** for changes in existing functionality.
    **Deprecated** for soon-to-be removed features.
    **Removed** for now removed features.
    **Fixed** for any bug fixes.
    **Security** in case of vulnerabilities.
 -->

## Unreleased

### Added
- ([PR #11](https://github.com/binyamin/eleventy-plugin-backlinks/pull/11)) Support 11ty v3

### Deprecated
- ([PR #11](https://github.com/binyamin/eleventy-plugin-backlinks/pull/11)) Drop support for 11ty v1

### Fixed
- ([PR #7](https://github.com/binyamin/eleventy-plugin-backlinks/pull/7)) Preserve existing global computed data.


## 0.2.1 - 2022-10-26

### Fixed
- ([`ad2aeff`](https://github.com/binyamin/eleventy-plugin-backlinks/commit/ad2aeffb8d1d5c00f74ec5e757ed8bc56a23ba19)) Normalize strings when identifying backlinks. See [binyamin/eleventy-garden#91](https://github.com/binyamin/eleventy-garden/pull/91).


## 0.2.0 - 2022-06-19

### Added
- ([`cb21a1f`](https://github.com/binyamin/eleventy-plugin-backlinks/commit/cb21a1f3d1e737e572c6f0c90d63092e05df98af)) Support URLs with `.html` and `.htm` file extensions.


## 0.1.0 - 2022-06-19

### Added
- ([`32eeefe`](https://github.com/binyamin/eleventy-plugin-backlinks/commit/32eeefe75e3a6901219c5234e4fade794ac0376c)) Compute backlinks from page data

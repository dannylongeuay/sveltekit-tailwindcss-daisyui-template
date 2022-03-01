.DEFAULT_GOAL := help

.PHONY: help
help: ## View help information
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: deps
deps: ## Install dependencies
	npm i

.PHONY: run-dev
run-dev: deps ## Run the development web server
	npm run dev

.PHONY: format
format: ## Run prettier formatter
	npm run format

.PHONY: format-check
format-check: ## Run formatting check
	npm run format:check

.PHONY: lint
lint: ## Run linter
	npm run lint

.PHONY: test
test: ## Run test suite
	npm run test

.PHONY: check
check: ## Run Svelte check
	npm run check

.PHONY: cq
cq: deps format check lint test ## Run code quality tools

.PHONY: cq-check
cq-check: deps format-check check lint test ## Run code quality checks

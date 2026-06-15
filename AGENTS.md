# AGENTS.md

Guidance for AI agents working in this repository.

## Repository overview

This is a **CS 2430 (Summer 2026) course project organizer** — not a runnable application yet. It holds placeholder folders for four assignments plus shared documentation:

| Path | Purpose |
|------|---------|
| `project1/` – `project4/` | Individual course projects (currently empty) |
| `docs/` | Shared documentation |
| `README.md` | Course and repo description |

There are no `package.json`, `pom.xml`, `build.gradle`, Docker Compose files, or CI configs. When a project folder is populated, re-read that project's README and build files before assuming stack or commands.

## Inferred tech stack

`.gitignore` targets **Java / Eclipse** artifacts (`*.class`, `bin/`, `out/`, `target/`, `.metadata/`, `.project`, `.classpath`). Future projects will likely be Java-based unless a project README says otherwise.

## Cursor Cloud specific instructions

### Services

**No services must run** for the current scaffold. There is no API, frontend, database, or Docker stack.

### Toolchain

OpenJDK **21** (`java`, `javac`) is available on the VM. Use it for Java coursework unless a project specifies another JDK version.

### Dependency refresh

The VM update script is a no-op (`true`) because this repo has no package manager lockfiles or install scripts. After project code lands, update the update script if a project adds Maven, Gradle, npm, etc.

### Lint / test / build / run

Nothing is defined at the repo root today. Per project, look for:

- **Maven:** `mvn test`, `mvn compile`, `mvn exec:java` (or project-specific main class)
- **Gradle:** `./gradlew test`, `./gradlew run`
- **Plain Java:** `javac` then `java` from the project's source directory
- **Eclipse:** `.project` / `.classpath` — prefer documented CLI commands when present

### Working in empty project folders

Project directories contain only `.gitkeep`. Agents may add code under the appropriate `projectN/` folder when implementing assignments. Do not assume cross-project shared libraries exist until they are added.

### Git

Standard git workflow on `main`. No custom pre-commit hooks or husky setup in this repo.

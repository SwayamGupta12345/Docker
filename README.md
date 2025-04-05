# 🐳 Docker Revision Guide

This repository contains a comprehensive Markdown guide for Docker, designed for quick revision and long-term reference. It includes:

- 🔧 Common Docker commands
- 🚀 Building & running images/containers
- 📦 Dockerfile examples
- 🛠️ Docker Hub workflow
- 🧹 Cleanup and image management tips
- 🏷️ All commonly used flags explained

Whether you're just getting started or brushing up before a deployment, this guide keeps you covered.

# 🐳 Docker Full Revision Guide

A comprehensive revision Markdown file to help you recall and revise all key Docker concepts and commands.

---

## 📦 1. Installation & Setup

### 🔹 Install Docker
- [Docker Desktop (Windows/Mac)](https://www.docker.com/products/docker-desktop)
- Linux: Use your package manager (e.g., `apt`, `dnf`)

### 🔹 Check Docker Version
```bash
docker --version
```

### 🔹 Check Docker Status
```bash
docker info
```

---

## 🐳 2. Docker Basics

### 🔹 Pull an Image
```bash
docker pull <image-name>:<tag>
```
- Example: `docker pull ubuntu:20.04`

### 🔹 Run a Container
```bash
docker run [OPTIONS] <image-name> [COMMAND]
```
**Common Flags:**
- `-d` : Run in detached mode (in background)
- `-p` : Port mapping (e.g., `-p 8080:80`)
- `--name` : Assign a name
- `-it` : Interactive + TTY (for shell access)

Example:
```bash
docker run -d -p 3000:3000 --name myapp node:18
```

### 🔹 List Running Containers
```bash
docker ps
```

### 🔹 List All Containers (including stopped)
```bash
docker ps -a
```

### 🔹 Stop a Container
```bash
docker stop <container-id-or-name>
```

### 🔹 Start a Stopped Container
```bash
docker start <container-id-or-name>
```

### 🔹 Remove a Container
```bash
docker rm <container-id-or-name>
```

---

## 📂 3. Docker Images

### 🔹 List Images
```bash
docker images
```

### 🔹 Remove an Image
```bash
docker rmi <image-id-or-name>
```
Use `-f` to force:
```bash
docker rmi -f <image-id-or-name>
```

### 🔹 Build an Image from Dockerfile
```bash
docker build -t <yourname/app-name>:tag .
```
Example:
```bash
docker build -t swayamgupta12345/learn:latest .
```

### 🔹 Tag an Image
```bash
docker tag <local-image> <your-dockerhub-username>/<repo-name>:<tag>
```

### 🔹 Push to Docker Hub
```bash
docker push <your-dockerhub-username>/<repo-name>:<tag>
```

### 🔹 Login to Docker
```bash
docker login
```

### 🔹 Logout
```bash
docker logout
```

---

## 🧹 4. Docker Cleanup

### 🔹 Remove All Stopped Containers
```bash
docker container prune
```

### 🔹 Remove All Unused Images
```bash
docker image prune
```

### 🔹 Remove Everything (containers + images + volumes)
```bash
docker system prune -a
```
Add `-f` to skip confirmation:
```bash
docker system prune -a -f
```

---

## 🛠 5. Dockerfile Reference

```dockerfile
# Start with base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the files
COPY . .

# Expose the port
EXPOSE 3000

# Start command
CMD ["npm", "start"]
```

---

## 🧪 6. Docker Compose Basics

### 🔹 Sample `docker-compose.yml`
```yaml
version: '3'
services:
  backend:
    build: .
    ports:
      - "5000:5000"
    depends_on:
      - mongo
  mongo:
    image: mongo
    ports:
      - "27017:27017"
```

### 🔹 Commands
- Start services:
```bash
docker-compose up
```
- Run in background:
```bash
docker-compose up -d
```
- Stop services:
```bash
docker-compose down
```

---

## 🌐 7. DockerHub Best Practices

### 🔸 Repositories
- Public: visible to everyone
- Private: only for you (1 free private repo on DockerHub free tier)

### 🔸 Tips
- Always tag images before pushing.
- Use meaningful names and versions.
- Keep images light and clean.

---

## 🧠 Useful Flags Cheat
| Command | Flags | Description |
|--------|--------|-------------|
| `docker run` | `-d`, `-p`, `--name`, `-it` | Background, port, name, interactive |
| `docker ps` | `-a` | Show all containers |
| `docker build` | `-t` | Tag the build |
| `docker rmi` | `-f` | Force remove |
| `docker system prune` | `-a`, `-f` | Remove everything |

---

## ✅ Recommended Flow for Uploading a Project to DockerHub
```bash
docker build -t swayamgupta12345/learn:latest .
docker login
docker push swayamgupta12345/learn:latest
```

---

## 🧾 Extras

### 🔹 Check Container Logs
```bash
docker logs <container-name-or-id>
```

### 🔹 Execute Command in Running Container
```bash
docker exec -it <container-name> bash
```

### 🔹 Save Image as Tar File
```bash
docker save -o myapp.tar swayamgupta12345/learn:latest
```

---

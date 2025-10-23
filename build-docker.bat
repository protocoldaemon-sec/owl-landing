@echo off
echo Building OWL Docker Image...
echo.

echo Step 1: Building Docker image...
docker build -t owl-app .

if %ERRORLEVEL% neq 0 (
    echo.
    echo ERROR: Docker build failed!
    echo Please make sure Docker Desktop is running.
    pause
    exit /b 1
)

echo.
echo Step 2: Docker image built successfully!
echo Image name: owl-app
echo.

echo Step 3: To run the container, use:
echo docker run -p 3000:3000 owl-app
echo.

echo Step 4: To run in background, use:
echo docker run -d -p 3000:3000 --name owl-container owl-app
echo.

pause

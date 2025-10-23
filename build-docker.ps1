# OWL Docker Build Script
Write-Host "Building OWL Docker Image..." -ForegroundColor Green
Write-Host ""

# Check if Docker is running
Write-Host "Checking Docker status..." -ForegroundColor Yellow
try {
    $dockerInfo = docker info 2>$null
    if ($LASTEXITCODE -ne 0) {
        throw "Docker is not running"
    }
    Write-Host "Docker is running ✓" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Docker is not running!" -ForegroundColor Red
    Write-Host "Please start Docker Desktop and try again." -ForegroundColor Red
    Write-Host ""
    Write-Host "You can start Docker Desktop by:" -ForegroundColor Yellow
    Write-Host "1. Searching for 'Docker Desktop' in Start Menu" -ForegroundColor Yellow
    Write-Host "2. Or running: Start-Process 'C:\Program Files\Docker\Docker\Docker Desktop.exe'" -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "Step 1: Building Docker image..." -ForegroundColor Yellow
docker build -t owl-app .

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "ERROR: Docker build failed!" -ForegroundColor Red
    Write-Host "Please check the error messages above." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Step 2: Docker image built successfully! ✓" -ForegroundColor Green
Write-Host "Image name: owl-app" -ForegroundColor Cyan
Write-Host ""

Write-Host "Step 3: Available commands:" -ForegroundColor Yellow
Write-Host "To run the container:" -ForegroundColor White
Write-Host "  docker run -p 3000:3000 owl-app" -ForegroundColor Gray
Write-Host ""
Write-Host "To run in background:" -ForegroundColor White
Write-Host "  docker run -d -p 3000:3000 --name owl-container owl-app" -ForegroundColor Gray
Write-Host ""
Write-Host "To stop the container:" -ForegroundColor White
Write-Host "  docker stop owl-container" -ForegroundColor Gray
Write-Host ""
Write-Host "To remove the container:" -ForegroundColor White
Write-Host "  docker rm owl-container" -ForegroundColor Gray
Write-Host ""

# Ask if user wants to run the container
$runContainer = Read-Host "Do you want to run the container now? (y/n)"
if ($runContainer -eq "y" -or $runContainer -eq "Y") {
    Write-Host ""
    Write-Host "Starting container..." -ForegroundColor Yellow
    docker run -d -p 3000:3000 --name owl-container owl-app
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Container started successfully! ✓" -ForegroundColor Green
        Write-Host "Your app is available at: http://localhost:3000" -ForegroundColor Cyan
    } else {
        Write-Host "Failed to start container!" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Build process completed!" -ForegroundColor Green

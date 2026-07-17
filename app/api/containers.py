from fastapi import APIRouter
from app.services.docker_service import list_containers

router = APIRouter()

@router.get("/containers")
def containers():
    return list_containers()

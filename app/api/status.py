from fastapi import APIRouter

from app.services.system_service import get_system_info
from app.services.docker_service import get_docker_info

router = APIRouter()

@router.get("/status")
def status():
    return {
        "system": get_system_info(),
        "docker": get_docker_info(),
    }

from fastapi import APIRouter

from app.services.docker_service import (
    get_docker_info,
    list_containers,
)

from app.services.system_service import (
    get_system_info,
)

router = APIRouter()


@router.get("/dashboard")
def dashboard():

    return {
        "docker": get_docker_info(),
        "system": get_system_info(),
        "containers": list_containers(),
    }

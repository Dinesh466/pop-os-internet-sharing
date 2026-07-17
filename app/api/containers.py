from fastapi import APIRouter
from app.services.docker_service import (
    get_docker_info,
    list_containers,
    start_container,
    stop_container,
    restart_container,
    get_logs,
)


router = APIRouter()


@router.get("/docker")
def docker_info():
    return get_docker_info()


@router.get("/containers")
def containers():
    return list_containers()
@router.post("/containers/{name}/start")
def start(name: str):
    return start_container(name)


@router.post("/containers/{name}/stop")
def stop(name: str):
    return stop_container(name)


@router.post("/containers/{name}/restart")
def restart(name: str):
    return restart_container(name)


@router.get("/containers/{name}/logs")
def logs(name: str):
    return get_logs(name)

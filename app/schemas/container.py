from pydantic import BaseModel

class ContainerActionResponse(BaseModel):
    success: bool
    message: str
    container: str

from fastapi import APIRouter

router = APIRouter(prefix="/logging", tags=["logging"])

@router.get("/events")
async def list_events():
    """Заглушка просмотра событий"""
    return [{"event_id": 1, "status": "done"}]


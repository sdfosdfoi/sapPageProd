from fastapi import APIRouter

router = APIRouter(prefix="/notifications", tags=["notifications"])

@router.post("/send")
async def send_notification(channel: str, message: str, recipient: str):
    """Заглушка отправки уведомления"""
    return {"sent": True, "via": channel, "to": recipient}


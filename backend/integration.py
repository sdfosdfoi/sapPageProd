from fastapi import APIRouter

router = APIRouter(prefix="/integration", tags=["integration"])

@router.post("/webhook")
async def webhook(event: dict):
    """Заглушка webhook-интеграции"""
    return {"received": True, "event": event}

@router.get("/banks")
async def list_banks():
    return ["VISA", "Mastercard", "МИР", "SBP", "USDT"]


from fastapi import APIRouter

router = APIRouter(prefix="/routing", tags=["routing"])

@router.get("/smart-route")
async def smart_route(amount: float):
    """Заглушка смарт-маршрутизации"""
    return {"bank": "STUB_BANK", "amount": amount, "status": "ok"}


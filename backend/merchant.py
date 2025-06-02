from fastapi import APIRouter

router = APIRouter(prefix="/merchant", tags=["merchant"])

@router.get("/profile")
async def profile():
    """Заглушка профиля мерчанта"""
    return {"merchant_id": "demo", "balance": 10000.0, "api_key": "abc123"}


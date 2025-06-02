from fastapi import APIRouter

router = APIRouter(prefix="/core", tags=["core"])

@router.get("/bin-analyze")
async def bin_analyze(bin_number: str):
    """Заглушка BIN-анализа"""
    return {"bin": bin_number, "issuer": "stub bank", "country": "RU", "antifraud_status": "OK"}


from fastapi import APIRouter

router = APIRouter(prefix="/security", tags=["security"])

@router.get("/p2pe-status")
async def p2pe_status():
    """Заглушка проверки шифрования"""
    return {"p2pe": True, "waf": True, "pci_dss": "Level 1"}


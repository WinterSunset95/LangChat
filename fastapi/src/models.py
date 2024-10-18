from pydantic import BaseModel


class ChatRes(BaseModel):
    success: str | None;
    error: str | None;

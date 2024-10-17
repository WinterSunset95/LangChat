from langchain_groq import ChatGroq
from  langchain_core.messages  import BaseMessage, HumanMessage

model = ChatGroq(
        model="llama3-8b-8192",
        stop_sequences=["\n"],
        )

def query(text, id) -> BaseMessage:
    print(f"Querying with text: {text}")
    response = model.invoke([HumanMessage(content=text)])
    return response

import { comments } from "@/app/data/db";

export async function PATCH(request,{params}) {
    const comment=await request.json();
    const id=params.id
    const commentIndex=comments.findIndex(comment=>comment.id===parseInt(id))
    comments[commentIndex].text=comment.text
    return new Response(JSON.stringify(comments),{status:"202",
        "headers":{"Content-Type":"application/json"}
    })
    
}